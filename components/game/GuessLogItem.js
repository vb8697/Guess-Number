import { StyleSheet,View,Text } from "react-native";
import Colors from "../../constant/colors";

function GuessLogItem({roundNumber,guess}){
    return(
        <View  style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Mobile Guess:{guess}</Text>
        </View>
     );
    }
    const styles=StyleSheet.create({
        listItem:{
            borderColor:Colors.primary500,
            borderWidth:1,
            borderRadius:40,
            padding:12,
            marginVertical:8,
            backgroundColor:Colors.primary500,
            flexDirectoin:'row',
            width:'100%',
            elevstion:4,
            shadowColor:'black',
            shadowOffset:{width:0,height:0},
            shadowOpacity:0.25,
            shadowRadius:3,
        },
        itemText:{
            color:'white',
        }

    });
export default GuessLogItem;