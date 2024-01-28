import { StyleSheet ,View,} from "react-native";
import Colors from "../../constant/colors";
function Card({children}){
    return (
    <View style={styles.inputContainer}>{children}</View>
    );

}        
const styles=StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:36,
        marginHorizontal:24,
        padding:20,
        backgroundColor:Colors.primary500,
        borderRadius:8, 
        elevation:4,
        shadowColor:'black', 
        shadowOffset:{width:0, height:2},
        shadowRadius: 6,
        shadowOpacity:0.25,
  },

});


export default Card;