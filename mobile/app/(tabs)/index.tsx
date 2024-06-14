import { Image, StyleSheet, Platform, TextInput, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';

export default function HomeScreen() {
  const [userName, setUserName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleQuestions = () => {
    if (!userName) {
      setError('Please enter your name');
      return;
    }
    console.log('handleQuestions');
    router.push({
      pathname: `/questions`,
      params: {
        userName: userName,
      }
    });
  }

  useFocusEffect(
    useCallback(() => {
      setUserName('');
      setError('');
    }, [])
  );



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
        <ThemedText type="title">20 Question</ThemedText>
      </ThemedView>
      <ThemedView style={
        {
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }
      }>
        <ThemedText type="subtitle">Enter your name</ThemedText>
      </ThemedView>
      <ThemedView style={{
        paddingHorizontal: 10,
      }}>
        <ThemedText style={{
          color: 'red',
          fontSize: 18,
        }}>{error}</ThemedText>
        <TextInput
          style={{
            borderRadius: 10,
            paddingHorizontal: 10,
            height: 40, borderColor:
              'gray',
            borderWidth: 1,
            display: 'flex',
            width: '100%',
            fontSize: 18,
          }}
          placeholder="Enter your name"
          onChangeText={text => setUserName(text)}
          value={userName}
        />
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
          onPress={handleQuestions}
        >
          <ThemedText style={{
            fontSize: 18,
            textAlign: 'center',
            color: '#fff',
          }}>Start</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
