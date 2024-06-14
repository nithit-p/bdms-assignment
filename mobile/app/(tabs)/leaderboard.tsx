import { Image, StyleSheet, Platform, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import { Leaderboard } from '@/models/leaderboard';
import { getLeaderboard } from '@/data/leaderboard';

export default function LeaderBoardScreen() {
  const [leaderboards, setLeaderboards] = useState<Leaderboard[]>([])

  useFocusEffect(
    useCallback(() => {
      const leaderboards: Leaderboard[] = getLeaderboard()
      setLeaderboards(leaderboards)
    }, [])
  )

  return (
    <ThemedView style={{
      flex: 1,
    }} >
      <ScrollView>
        <ThemedView style={{
          alignItems: 'center',
          margin: 20,
        }}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">LeaderBoard</ThemedText>
          </ThemedView>
          {/* <ThemedView style={styles.titleContainer}>
            <ThemedText type="subtitle">Top 10</ThemedText>
          </ThemedView> */}
          <ThemedView style={styles.leaderBoardTable}>
            <ThemedView style={styles.tableHeader}>
              <ThemedText type="defaultSemiBold" style={styles.tableColumn}>User Name</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.tableColumnEnd}>Score</ThemedText>
            </ThemedView>
            <ThemedView style={styles.tableBody}>
              {leaderboards.map((leaderboard, index) => (
                <ThemedView key={`${leaderboard.userName} ${index}`} style={styles.tableRow}>
                  <ThemedText type="default" style={styles.tableColumn}>{leaderboard.userName}</ThemedText>
                  <ThemedText type="default" style={styles.tableColumnEnd}>{leaderboard.score}</ThemedText>
                </ThemedView>
              ))}
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  leaderBoardTable: {
    width: '100%',
    maxWidth: 400,
    marginTop: 20,
  },

  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    padding: 1,
  },

  tableBody: {
    width: '100%',
    maxWidth: 400,
    borderBottomWidth: 1,
    borderStartWidth: 1,
    borderEndWidth: 1,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
  },
  tableColumn: {
    flex: 1,
    borderEndWidth: 1,
    textAlign: 'center',
  },
  tableColumnEnd: {
    flex: 1,
    textAlign: 'center',
  }
});
