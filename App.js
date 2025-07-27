import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,ScrollView,FlatList} from 'react-native';
import {useState} from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
export default function App() {
  const[goals,setGoals]=useState([]) 
  const[isModalVisible, setIsModalVisible]=useState(false);
  useEffect(() => {
  async function loadGoals() {
    const storedGoals = await AsyncStorage.getItem('goals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }
  loadGoals();
}, []);

  function addGoalHandler(goalText)
  {
       const updatedGoals = [...goals, goalText];
       setGoals(updatedGoals);
       AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
  }
  function deleteItem(index)
  {
   const newGoals = goals.filter((el, i) => i !== index);
  setGoals(newGoals);
  AsyncStorage.setItem('goals', JSON.stringify(newGoals));
  }
  function startAddGoalHandler()
  {
    setIsModalVisible(true);
  }
   function closeGoalHandler()
  {
    setIsModalVisible(false);
  }
  return (
    <>
       <StatusBar style="light" />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#A070D6" onPress={startAddGoalHandler}/>
      
      <GoalInput onClose={closeGoalHandler} visible={isModalVisible} onAddGoal={addGoalHandler}/>
      <View style={styles.goalContainer}>
      <FlatList
          data={goals}
          renderItem={(itemdata)=>{
            return(  
              <GoalItem text={itemdata.item} onDelete={()=>deleteItem(itemdata.index)}/>
            )
          }}
      />
       
     
      
      </View>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  
  appContainer:
  {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:'#1A0037'
  },
  
  goalContainer:{
    flex:4
  }
 
});
