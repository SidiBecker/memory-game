import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LevelButton from '../../src/components/LevelButton';
import { COLORS } from '../../src/utils/StyleConstants';
import { LEVELS } from '../utils/Contants';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>ESCOLHA O NÍVEL QUE DESEJA JOGAR</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <LevelButton level={LEVELS.ONE} />
          <LevelButton level={LEVELS.TWO} />
        </View>

        <View style={styles.buttons}>
          <LevelButton level={LEVELS.THREE} />
          <LevelButton level={LEVELS.FOUR} />
        </View>
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
    fontSize: 25,
    textAlign: 'center',
    padding: 10,
    width: 240,
    lineHeight: 50,
  },
  buttonsContainer: {
    flex: 3,
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  level: {
    fontSize: 20,
  },
});

export default HomeScreen;
