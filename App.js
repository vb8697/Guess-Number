import React, { useEffect } from 'react';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constant/colors';
import GameOver from './screens/GameOver';
// import {LinearGradinent} from 'react-native-linear-gradient';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';


         
function App(){
  const [userNumber, setUserNumber]=useState();
  const [gameIsOver, setGameIsOver]=useState(true);
  const [guessRounds,setGuessRounds]=useState(0);

  function  pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);

  }
  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);

  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);

  }
  let screen=<StartGameScreen  onPickNumber={pickedNumberHandler}/>
  if (userNumber){
    screen=<GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    
     screen =(<GameOver 
     userNumber={userNumber} 
     roundsNumber={guessRounds} 
     onStartNewGame={startNewGameHandler}/>
     );
  }


  return( 
    // <LinearGradinent colors={['#420329','#ddb52F']} style={styles.rootScreen}>
      <ImageBackground 
      style={styles.rootScreen}
         resizeMode='cover'
         source={require('./image/back2.jpg')}
      >
         {/* <StartGameScreen/> */}
         <SafeAreaView style={styles.rootScreen}>
         {screen}
         </SafeAreaView>
      </ImageBackground>
    // </LinearGradinent>
  );
}
const styles=StyleSheet.create({
      rootScreen:{
         flex:1,
         }

});

export default App;
