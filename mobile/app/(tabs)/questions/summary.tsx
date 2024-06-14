import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { router, useLocalSearchParams } from 'expo-router';


export default function SummaryScreen() {
  const { userName, score } = useLocalSearchParams()

  const handleLeaderBoard = () => {
    router.navigate({
      pathname: `/leaderboard`, params: {
        userName: userName,
      }
    })
  }

  const handleGoBack = () => {
    router.navigate("/")
  }

  return (
    <ThemedView style={{
      flex: 1,
    }} >

      <ThemedView style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
        minHeight: 200,
      }}>
        <ThemedText
          type='subtitle'
        >
          {`user : `}
          <ThemedText
            type='title'
          >{userName}</ThemedText>
        </ThemedText>
        <ThemedText
          type='subtitle'
        >
          {`score : `}
          <ThemedText
            type='title'
          >{score}</ThemedText>
        </ThemedText>


      </ThemedView>

      <ThemedView style={{

        paddingHorizontal: 10,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#3B82F6',
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
          }}
          onPress={handleLeaderBoard}
        >
          <ThemedText style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#fff',
          }}>Leaderboard</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={{

        paddingHorizontal: 10,
      }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#3B82F6',
            padding: 10,
            borderRadius: 10,
          }}
          onPress={handleGoBack}
        >
          <ThemedText style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#fff',
          }}>Go back</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView >
  );
}
