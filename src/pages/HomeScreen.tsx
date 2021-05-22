import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LevelButton from '../../src/components/LevelButton';
import { COLORS } from '../../src/utils/StyleConstants';

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>ESCOLHA O NÍVEL QUE DESEJA JOGAR</Text>
      </View>

      <View style={styles.buttons}>
        <LevelButton value={1} navigation={navigation}/>
        <LevelButton value={2} navigation={navigation}/>
        <LevelButton value={3} navigation={navigation}/>
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

export default HomeScreen;
