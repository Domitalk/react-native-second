// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';


import GoalItem from './components/GoalItem'

export default function App() {
  // hooookkkkkss + form data
  const [enteredGoal, setEnteredGoal] = useState('')

  // collection list of all the form submissions 
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    // going to add the form value into a hook that will hold all the goals that you add 

    // setCourseGoals([...courseGoals,  enteredGoal]);
    // probably a better way to handle this is to arrow function to use old state directly instead of referring to the hook getter 
    // this make the single source of truth a little bit more clear in async time 
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: enteredGoal }
    ])

    // and of course clear the form field 
    setEnteredGoal('');
  }



  return (
    // style={} requires an object. thus the double curley
    // <View 
    //   style={{
    //     padding: 50
    //   }}
    // >

    // this is the same as the above it simply changes into style Object, single curley brace bc there is an object at the end value
    <View style={styles.screen}>

      {/* view is most like div but unlike HTML you can't just put text inside the view, it has to be inside text component */}
      {/* it's always nice to start with view because its the most flexible in terms of styling and because you need one wrapping compoenent at the top level */}

      {/* now going to add some flexbox stuff and additional prop modifiers with inline style */}
      {/* in react native, flexbox is default in view, unlike the web and div */}
      {/* <View 
        style={{
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}
      > */}

      {/* again, changing the above element into a stylesheet object prop  */}
      <View style={styles.inputContainer} >

        {/* adding flex property in child element can determine how big it can get within the confines of the parent  */}
        {/* so if TextInput had style={{flex: 1}} and Button had style={{flex: 2}} then Button will get 2/3 and TextInput 1/3  */}
        {/* this will be a proportional share of the flexDirection ie: in this case 1/3 and 2/3 of the 'row' so side to side width  */}

          {/* flexDirection has a bunch of values that can be applied like row-reverse, column */}
          {/* default behavior is that child element will automatically fit either width or height, depending on the flexDirection's main axis  */}
          {/* if you want to modify these values it will always be justifyContent / alignItems as the two axises depending on which flexDirection you chose  */}
        <TextInput 
          placeholder="Course Goal" 
          style={styles.inputBox}
          // only put the function, don't execute because it's being called back on onChange 
          onChangeText={goalInputHandler}
          // and then show the value of the hook 
          value={enteredGoal}
        /> 

        {/* in docs you can see what kind of styling object key-value pairs you can use on the native elements */}
        <Button 
          title="add" 
          // style={{
          //   flex: 1,
          //   border: 10
          // }}

          // this is going to let us trigger a callback to addGoalHandler which will changeState/API call and then clear the form again 
          onPress={addGoalHandler}
        />
        {/* uhh... i duno why but the button isn't filling in the proper amount of space.  */}
      </View>

      {/* making the list into a scrollable area  */}
      {/* so the top isn't scrollable but the list is */}
      {/* <ScrollView> */}
        {/* scrollview might be bad if your list gets way too big, because it's going to fully render in the beginning instead of infinitescroll  */}

        {/* FlatList is like infiniteScroll object but you have to self-close it    */}
        {/* flatlist automatically adds keys to data but only if its in a familiar shape.  */}
      <FlatList 
        // keyExtractor is also built in and takes two args (item, index) but otherwise key as a key in the object will automake id 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GoalItem title={itemData.item.value}/> } 
      />
     

        {/* going to show all the goals we added  */}

        {/* going to have to iterate because array  */}
        {/* this gon throw error because key in child but whatever  */}
        {/* text doesn't have style but view does, so wrap the text in a view  */}
        {/* {courseGoals.map(goal=> (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>)
        )} */}

      {/* </View> */}
    </View>

    <View style={styles.main}> </View>
  );
}



// later on probably better to actually put all the inline styling into this section but for now just going to style attr it 
// stylesheet objects have built in validations!!!!!! AWESOME

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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

});


