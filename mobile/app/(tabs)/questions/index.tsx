import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCallback, useEffect, useState } from 'react';
import { Answer, getRamdomQuestionList, getScore } from '@/data/question';
import { Question } from '@/models/question';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { addLeaderboard } from '@/data/leaderboard';


export default function QuestionScreen() {
  const { userName } = useLocalSearchParams()
  const [selectedValue, setSelectedValue] = useState<string>();
  const [counter, setCounter] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleNextQuestion = () => {
    if (counter < questions.length - 1) {
      if (!selectedValue) return
      setAnswers([...answers, {
        questionId: questions[counter].id,
        answerValue: selectedValue
      }])
      setCounter(counter + 1)
      setSelectedValue(undefined)
      return
    }
    const score = getScore(answers)
    if (userName) {
      addLeaderboard({
        userName: userName.toString(),
        score: score,
      })
    }
    router.push({
      pathname: `/questions/summary`, params: {
        score: score,
        userName: userName,
      }
    });
  }


  useFocusEffect(
    useCallback(() => {
      const questionList: Question[] = getRamdomQuestionList(20)
      setQuestions(questionList)
      setCounter(0)
      setAnswers([])
      setSelectedValue(undefined)
    }, [])
  );

  const question = questions[counter]

  if (!question) return null

  return (
    <ThemedView style={{
      flex: 1,
    }} >
      <ScrollView>
        <ThemedView style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: 20,
        }}>
          <ThemedText
            type='subtitle'
          >{`${counter + 1}: ${question?.word}`}</ThemedText>

        </ThemedView>
        <ThemedView style={{
          paddingHorizontal: 10,
          gap: 8,
          marginBottom: 20,
        }}>
          {question?.answerOptions.map((answerOption, _) => (
            <TouchableOpacity
              key={answerOption.value}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                backgroundColor: selectedValue === answerOption.value ? '#e1e1e1' : '#f9f9f9',
                borderRadius: 10,
              }}
              onPress={() => setSelectedValue(answerOption.value)}
            >
              <ThemedView style={styles.outerCircle}>
                {selectedValue === answerOption.value && <ThemedView style={styles.innerCircle} />}
              </ThemedView>
              <ThemedText style={{
                marginLeft: 10,
                fontSize: 16,
              }}>{answerOption.label}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
        <ThemedView style={{

          paddingHorizontal: 10,
        }}>
          <TouchableOpacity
            style={{
              backgroundColor: !selectedValue ? '#ccc' : '#3B82F6',
              padding: 10,
              borderRadius: 10,
            }}
            onPress={handleNextQuestion}
            disabled={!selectedValue}
          >
            <ThemedText style={{
              fontSize: 18,
              textAlign: 'center',
              color: '#fff',
            }}>Submit</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ScrollView>
    </ThemedView >
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  radioText: {
    marginLeft: 10,
    fontSize: 16,
  },
  selectedValueText: {
    marginTop: 20,
    fontSize: 16,
  },
});