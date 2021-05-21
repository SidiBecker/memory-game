import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LevelButton from './src/components/LevelButton';
import { COLORS } from './src/utils/StyleConstants';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>ESCOLHA O NÍVEL QUE DESEJA JOGAR</Text>
      </View>

      <View style={styles.buttons}>
        <LevelButton value={1} />
        <LevelButton value={2} />
        <LevelButton value={3} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mainTextContainer: {
    flex: 2,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  level: {
    fontSize: 20,
  },
});
