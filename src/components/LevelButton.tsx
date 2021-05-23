import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS } from '../utils/StyleConstants';
import { Level } from '../utils/Contants';
import { useNavigation } from '@react-navigation/core';

const LevelButton = ({ level }: Level | any) => {
  const navigation = useNavigation();

  function onClickButton(level: number) {
    navigation.navigate('Game', { level });
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onClickButton(level)}
    >
      <Text style={styles.level}>{level.level}</Text>
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
    backgroundColor: COLORS.levelButton.backgroundFront,
    borderRadius: 50,
    margin: 10,
  },
  level: {
    fontSize: 30,
    color: COLORS.levelButton.color,
  },
});

export default LevelButton;
