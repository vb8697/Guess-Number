import Colors from '../../constant/colors';
import {
    StyleSheet,
    Text,View
} from 'react-native';

function numberConatiner({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
} 
const styles=StyleSheet.create({
     container:{
        borderWidth:4,
        borderBlockColor:Colors.primary500,
        padding:20,
        leftmargin:100,
        margin:20,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
     },
     numberText:{
        color:Colors.primary500,
        fontSize:34,
        fontWeight:'bold',
     }
});
export default numberConatiner;
