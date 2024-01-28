import{
    Image,
    StyleSheet,
    View,Text,
} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constant/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
function GameOver({roundsNumber,userNumber,onStartNewGame}){
    return(
        <View style={styles.rootConatiner}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
            <Image 
            style={styles.image} source={require('../image/GameOver.jpg')}/>
            </View>
            <Card>
            <Text style={styles.summeryText}>Your phone neened <Text style={styles.highlight}>{} </Text>
            round to guess the number{' '}
            <Text style={styles.highlight}> {userNumber} </Text></Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </Card>
        </View>
    );
}
const styles=StyleSheet.create({
    rootConatiner:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:24,

    },
    imageContainer:{
        height:200,
        width:200,
        borderWidth:3,
        borderRadius:150,
        borderColor:Colors.primary500,
        overflow:'hidden',
        margin:30,
        alignSelf:'center',
    },
    image:{
        width:'100%',
        height:'100%',
        alignSelf:'center',
        justifyContent:'center',
    },
    summeryText:{
        fontFamily: 'open-sans',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 24,
        color:Colors.primary600,
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:'white',
    }

});
export default GameOver;