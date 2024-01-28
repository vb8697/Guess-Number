import { StyleSheet, Text, View, } from 'react-native';
import Colors from '../../constant/colors';
function Title({children}){
    return(
        <View>
        <Text style={styles.title}>{children}</Text>
        </View>
    );

}
const styles=StyleSheet.create(
     {
        title:{
        fontSize: 24,
        fontWeight: 'bold',
        color:Colors.primary500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor:Colors.primary500,
        padding: 12,}
});
export default Title;
