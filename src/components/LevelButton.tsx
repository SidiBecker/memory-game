import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS } from '../utils/StyleConstants';

const LevelButton = (props: { value: number }) => {

  function onClickButton(value: number) {
    alert('Click on level ' + value);
  }

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onClickButton(props.value)}
    >
      <Text style={styles.level}>{props.value}</Text>
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
