import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { COLORS } from '../utils/StyleConstants';
import { shuffle } from '../utils/Utils';
import FlipCard from 'react-native-flip-card';
import { useNavigation } from '@react-navigation/core';

function GameScreen({ route }: any) {
  const { level } = route.params;

  const coupleCardsNumber = level.quantity;
  const [cardRow, setCardRow] = useState<Array<Array<any>>>([]);
  const [selecteds, setSelecteds] = useState<Array<any>>([]);
  const [combinedCards, setCombinedCards] = useState<Array<number>>([]);

  const [initTime, setInitTime] = useState<any>(undefined);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: `Nível ${level.level}` });

    let cardList: Array<any> = [];
    let id = 0;

    for (let i = 0; i < coupleCardsNumber; i++) {
      const obj = () => {
        return { id: id, type: i + 1, selected: false };
      };
      cardList.push(obj());
      id++;
      cardList.push(obj());
      id++;
    }

    cardList = shuffle(cardList);

    const rowList: any = [];

    for (let i = 0; i < cardList.length; i = i + 4) {
      rowList.push(cardList.slice(i, i + 4));
    }

    setCardRow(rowList);
  }, []);

  useEffect(() => {
    if (selecteds.length == 2) {
      setTimeout(() => {
        if (selecteds[0].type === selecteds[1].type) {
          setCombinedCards([...combinedCards, selecteds[0].type]);
        }

        setSelecteds([]);
      }, 1000);
    }
  }, [selecteds]);

  function onPressCard(card: any) {
    if (
      selecteds.length < 2 &&
      !Boolean(selecteds.find((el: any) => el.id == card.id)) &&
      !Boolean(combinedCards.find((el: any) => el == card.type))
    ) {
      setSelecteds([...selecteds, card]);
    }

    if (initTime == null) {
      setInitTime(new Date());
    }
  }

  function calculateTime() {
    function format(milliseconds: number) {
      var ret = '';
      let secs: number = milliseconds / 1000;
      const mins: number = secs / 60;

      if (mins >= 1) {
        ret += mins.toFixed(0) + ' minuto(s) e ';
        secs = secs - 60 * parseInt(mins.toFixed(0));
      }
      ret += secs.toFixed(0) + ' segundos e ';

      ret +=
        parseFloat(secs.toString().split('.')[1]).toFixed(0) + ' milésimos';

      return ret;
    }

    return format(Math.abs(new Date().getTime() - initTime.getTime()));
  }

  return (
    <View style={styles.container}>
      {combinedCards.length < coupleCardsNumber && (
        <View style={styles.cardsContainer}>
          {cardRow.map((cardListRow, index) => (
            <View style={styles.cardRow} key={`cardrow_${index}`}>
              {cardListRow.map((card, index) => (
                <TouchableWithoutFeedback
                  style={{ height: 110, minHeight: 110}}
                  key={`card_${index}`}
                  onPress={() => onPressCard(card)}
                >
                  <FlipCard
                    friction={6}
                    perspective={1000}
                    flipHorizontal={true}
                    flipVertical={false}
                    flip={Boolean(
                      selecteds.find((el: any) => el.id == card.id)
                    )}
                    clickable={false}
                    style={styles.cardContainer}
                  >
                    <Text
                      style={[
                        {
                          opacity: Boolean(
                            combinedCards.find((type: any) => type == card.type)
                          )
                            ? 0
                            : 1,
                        },
                        styles.cardText,
                        styles.cardFront,
                      ]}
                    >
                      X
                    </Text>
                    <Text style={[styles.cardText, styles.cardBack]}>
                      {card.type}
                    </Text>
                  </FlipCard>
                </TouchableWithoutFeedback>
              ))}
            </View>
          ))}
        </View>
      )}
      {combinedCards.length == coupleCardsNumber && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>PARABÉNS</Text>
          <Text style={styles.resultText}>
            Você concluiu com sucesso o nível {level.level} com o tempo de:
          </Text>
          <Text style={styles.resultText}>{calculateTime()}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.background,
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
    justifyContent: 'center',
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
    borderRadius: 10,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
    padding: 10,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 20,
  },
});

export default GameScreen;
