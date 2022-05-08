import { useState } from 'react';
import { StyleSheet, Text, View,FlatList,Button} from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
 


export default function App() {
 
  const [courseGoals,setCourseGoals]=useState([]);
  const [modalIsVisible,setModalIsVisible]= useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }
  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  
  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals)=>
    [...currentCourseGoals,{text:enteredGoalText, id:Math.random().toString()}]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
   setCourseGoals((currentCourseGoals)=>{return currentCourseGoals.filter((goal)=> goal.id !== id);
  });
  }

  return (

    <View style={styles.container}>
    <Button title='Add New Goal' color='#5e0acc' onPress={startAddGoalHandler}/>
    <GoalInput showmodal={modalIsVisible} onAddGoal={addGoalHandler}
      onCancel={endAddGoalHandler}
    />
     
      <View style={styles.goalContainer}>
        <FlatList 
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <GoalItem 
            text={itemData.item.text} 
            id = {itemData.item.id}
            onDeleteItem={deleteGoalHandler} 

            />
         
          );
        }}
        keyExtractor={(item,index)=>{
          return item.id;
        }}
          alwaysBounceHorizontal={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingHorizontal:16,
    flex:1,
    backgroundColor:'#1e085a'
  },
  goalContainer:{
    flex:4,
  },
 
 
  
});
