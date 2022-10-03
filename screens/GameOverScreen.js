import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import MainButton from '../components/MainButton';
import defaultStyle from '../constants/default-styles';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={defaultStyle.title}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          // source={{
          //   uri: 'https://images.unsplash.com/photo-1478480154178-88540b2be3b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80',
          // }}
          style={styles.image}
        />
      </View>
      <Text style={defaultStyle.bodyText}>
        Number of rounds: {props.roundsNumber}
      </Text>
      <Text style={defaultStyle.bodyText}>Number was: {props.userNumber}</Text>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
