import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  // const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  // const goalInputHandler = (enteredText) => {
  //   setEnteredGoal(enteredText);
  // }
  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  }

  return (
    <View style={styles.screen}>
      {/* <View style={styles.inputContainer} >
        <TextInput 
          placeholder="Course Goal" 
          style={styles.inputBox}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        /> 
        <Button 
          title="add" 
          onPress={addGoalHandler}
        />
      </View> */}
      <GoalInput 
        addGoalHandler={addGoalHandler}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            itemData={itemData} 
            onDelete={()=> {console.log('Does that work?')}}
            // onDelete={}
          />
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  }, 
  inputBox: {
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10,
    flex: 3
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
