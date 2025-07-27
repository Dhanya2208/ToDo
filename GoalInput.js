import {StyleSheet,View, TextInput,Button,Modal,Image} from 'react-native';
import {useState} from 'react';
function GoalInput(props){
const[goalText,setGoalText] =useState("")
function goalInputHandler(text)
  {
      setGoalText(text);
  }
function addGoalHandler()
{
    props.onAddGoal(goalText);
    props.onClose();
}
    return(
        <Modal visible={props.visible} animationType="slide">
              <View style={styles.inputContainer}>
             <Image style={styles.image}source={require('./assets/Images/goal1.jpeg')}/>
            <TextInput 
                 onChangeText={goalInputHandler}
                 style={styles.textInput} placeholder='Type your goal'/>
            <View style={styles.buttonContainer}>
                
                 <View style={styles.button}>
                     <Button color={"f31282"} title="Back" onPress={props.onClose}/>
                </View> 
                <View style={styles.button}>
                        <Button  color={"#5e0acc"} onPress={addGoalHandler} title='Add Goal'/>
                </View>
               
            </View>
           
        </View>
        </Modal>
       
    )
}
const styles=StyleSheet.create({
inputContainer:
  {
    justifyContent:'center',
    alignItems:'center',
    borderBottomWidth: 1,
    borderBottomColor:'white',
    paddingBottom:24,
    flex:1,
    padding:16,
    backgroundColor:'#1A0037'
  },
  textInput:{
    borderWidth:1,
    borderColor:'red',
    width:'100%',
    padding:10,
    borderRadius:6,
    backgroundColor:"#e4d0ff"
  },
  buttonContainer:{
    flexDirection:"row",
    marginTop:16
  },
  button:{
    width:100,
    marginHorizontal:8
  },
  image:{
    width:200,
    height:100,
    margin:20
  }
}
)
module.exports=GoalInput;