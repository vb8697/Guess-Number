import { StyleSheet,Text} from "react-native";
import Colors from "../../constant/colors";
function InstructionText({children,style}){
    return(
        <Text style={[styles.instructionText,style]}>{children}</Text>

    );
}
const styles=StyleSheet.create({
instructionText:{
    color:Colors.primary600,
    fontSize:24,
},});
export default InstructionText;