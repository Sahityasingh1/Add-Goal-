import {StyleSheet,View,TextInput,Button,Modal,Image} from 'react-native'
import {useState} from 'react'
import {Alert} from 'react-native';
function GoalInput(props){
    const [enteredGoalText,setEnteredGoalText]= useState('');
    function goalInputHandler(enteredText){
      setEnteredGoalText(enteredText);
     }

     function addGoalHandle(){
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    }
  
    return(
      <Modal visible={props.showmodal} animationType='slide'>
        <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('/home/sahitya/Desktop/React Native/ReactNative/assets/strategy-icon-29199.png')}
        />
        <TextInput style={styles.textInput} placeholder='Your course goal!' 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.allButton}>
        <View style={styles.button}>
        <Button title='Add Goal' onPress={addGoalHandle} color='#5e0acc'/>
        </View>
        <View style={styles.button}>
        <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
        </View>
        </View>
        </View>
        </Modal>

    );

}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        backgroundColor:'#311b6b'
       
      },
      textInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        width:'70%',
        marginRight:8,
        padding:8,
        color:'#120438',
        borderRadius:6,
      },
      allButton:{
        marginTop:16,
        flexDirection:'row',
      },
      button:{
        width:100,
        marginHorizontal:8,
       
      },
      image:{
        width:100,
        height:100,
       margin:20, 
      }
      

     
})