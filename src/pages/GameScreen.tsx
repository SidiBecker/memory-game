import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../utils/StyleConstants';
import { shuffle } from '../utils/Utils';
import FlipCard from 'react-native-flip-card';

function GameScreen({ route, navigation }: any) {
  const { level } = route.params;

  const coupleCardsNumber = level.quantity;

  let cardList: Array<any> = [];

  for (let i = 0; i < coupleCardsNumber; i++) {
    const obj = { type: i, selected: false };
    cardList.push(obj);
    cardList.push(obj);
  }

  const cardRow = [];

  cardList = shuffle(cardList);

  for (let i = 0; i < cardList.length; i = i + 4) {
    cardRow.push(cardList.slice(i, i + 4));
  }

  debugger;

  function onClickCard(card: any) {
    console.log(card);
    card.selected = !card.selected;
  }

  useEffect(() => {
    navigation.setOptions({ title: `Level ${level.level}` });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {cardRow.map((cardListRow, index) => (
          <View style={styles.cardRow} key={`cardrow_${index}`}>
            {cardListRow.map((card, index) => (
              <FlipCard
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={true}
                style={styles.cardContainer}
              >
                <Text style={[styles.cardText, styles.cardFront]}>
                  X
                </Text>
                <Text style={[styles.cardText, styles.cardBack]}>{card.type}</Text>
              </FlipCard>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.background
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  cardContainer: {
    margin: 10,
    height: 100,
    minHeight: 100,
    width: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardFront: {
    backgroundColor: COLORS.levelButton.backgroundFront,
  },
  cardBack: {
    backgroundColor: COLORS.levelButton.backgroundBack,
  },
  cardText: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 100,
    width: 70,
    textAlign: 'center',
    borderRadius: 10
  },
});

export default GameScreen;
