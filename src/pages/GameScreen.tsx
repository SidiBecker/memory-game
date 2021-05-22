import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../utils/StyleConstants';
import { shuffle } from '../utils/Utils';

function GameScreen({ route, navigation }: any) {
  const { level } = route.params;

  const coupleCardsNumber = level * 5;

  let cardList: Array<any> = [];

  for (let i = 0; i < coupleCardsNumber; i++) {
    const obj = { type: i };
    cardList.push(obj);
    cardList.push(obj);
  }

  cardList = shuffle(cardList);

  useEffect(() => {
    navigation.setOptions({ title: `Level ${level}` });
  }, []);

  return (
    <View>
      <View style={styles.cardsContainer}>
        {cardList.map((el, index) => (
          <View style={styles.card} key={`card_${index}`}>
            <Text style={styles.cardText}>{el.type}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    height: 200,
    width: 130,
    backgroundColor: COLORS.levelButton.background,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 40,
  },
});

export default GameScreen;
