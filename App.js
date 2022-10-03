import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNum) => {
    setUserNumber(selectedNum);
  };

  const content = userNumber ? (
    <GameScreen userChoice={userNumber} />
  ) : (
    <StartGameScreen startGame={startGameHandler} />
  );
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
