import React from 'react';
import { useState } from 'react';
import Colors from '../constant/colors';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructinText';
import {
    TextInput,
    View,
    StyleSheet,
    Alert,Text
    ,KeyboardAvoidingView,ScrollView,

     
} from 'react-native';

 function StartGameScreen({
    onPickNumber}){
    const [enteredNumber,setEneteredNumber]=useState('');
    
    function numberInputHandler(enteredText){
        setEneteredNumber(enteredText) ;
        console.log('Number-',enteredNumber);

    }
    function resetInputHandler(){
        setEneteredNumber('');
    }
    function confirmInputHandler(){
        const choseNumber=parseInt(enteredNumber);
        
        if(isNaN(choseNumber) || choseNumber<0 || choseNumber>99){
            Alert.alert('Invalid Number','Number has to be a number between 1 to 99',
            [{text:'Okay',style:'destructive',onPress:resetInputHandler}]
            )
            return;
        }
        console.log('Valid Number!');
        onPickNumber(choseNumber);

    }
    return(
        // <KeyboardAvoidingView style={styles.rootContainer} behavior='position'>
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput style={styles.numberInput} 
            maxLength={2} 
            keyboardType='Numeric'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View  style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
            </Card>
        </View>
        // {/* </KeyboardAvoidingView> */}
    
    );
    }
        const styles=StyleSheet.create({
            rootContainer:{
                flex:1,
                marginTop:'60%',
                alignItems:'center',
            },
            numberInput:{
                fontSize:32,
                height:55,
                width:55,
                borderBottomColor:Colors.primary600,
                borderBottomWidth:2,
                color:Colors.primary600,
                marginVertical:8,
                fontWeight:'bold', 
                textAlign:'center',

        },  
            buttonsContainer:{
                flexDirection:'row',
            },
            buttonContainer:{
                flex:1,
            },
            
    });


export default  StartGameScreen;