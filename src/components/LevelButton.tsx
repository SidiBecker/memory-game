import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS } from '../utils/StyleConstants';

const LevelButton = ({ value, navigation }: number | any) => {
  function onClickButton(level: number) {
    navigation.navigate('Game', { level });
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onClickButton(value)}
    >
      <Text style={styles.level}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: COLORS.levelButton.background,
    borderRadius: 50,
    margin: 10,
  },
  level: {
    fontSize: 30,
    color: COLORS.levelButton.color,
  },
});

export default LevelButton;
