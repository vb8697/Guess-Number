import { useEffect, useState } from 'react';
import {
    Alert,
    FlatList,
    StyleSheet,
    Text, View,
} from 'react-native';
import Title from '../components/ui/Title';
import NumberConatiner from '../components/game/numberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import GameOver from './GameOver';
import InstructionText from '../components/ui/instructinText';
import Card from '../components/ui/Card';
import Icons from 'react-native-vector-icons/FontAwesome5';
import GuessLogItem from '../components/game/GuessLogItem';
function generateRandomBetween(min,max,exclude){
    const rndNum=Math.floor(Math.random() * (max-min))+min;
    if (rndNum===exclude){
        return generateRandomBetween(min,max,exclude);
    }
    else
    return rndNum;
}
let minBoundary=1;
let maxBoundary=100;

function GameScreen({userNumber,onGameOver}){
    const initialGuess=generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess]=useState(initialGuess);
    const [guessRounds,setGuessRounds]=useState([initialGuess])
    useEffect(()=>{
        if(currentGuess===userNumber){
            onGameOver(true);
        }

    },[currentGuess,onGameOver,userNumber]);
    useEffect(()=>{
        minBoundary=1;
        maxBoundary=100;
    },[]);

    
    function nextGuessHandler(direction){
        if (direction==='lower' && currentGuess < userNumber
        || direction=== 'greater' && currentGuess> userNumber){
            Alert.alert("don't lie!",'You Know that this is worng..',[{text:'Sorry!', style:'cancel'},]);
            return;
        }
        if (direction==='lower'){
            maxBoundary=currentGuess;
        }
        else{
            minBoundary=currentGuess+1;

        } 
        const newRndNumber=generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess,
            );       
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);    
    }
       const guessRoundsListLength = guessRounds.length;
    
    return(
        <View style={styles.screen}>
        <Title>Mobile Guess </Title>
         <NumberConatiner>{currentGuess}</NumberConatiner>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                    -</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                 <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                 +</PrimaryButton>
                </View>
            </View>
         </Card>
         <View style={styles.listContainer}>
            {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
         <FlatList
             data={guessRounds}
             renderItem={(itemData) => (
             <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
             />
          )}
          keyExtractor={(item) => item}
        />
        </View>
        </View> 
    );
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        // alignItems:'center',
        marginTop:'50%',
        padding:20,
       },
       instructionText:{
        marginBottom:12,
       },
       buttonsContainer:{
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
        color:'white',
      },

});
export default GameScreen; 