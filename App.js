// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
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
        /> 

        {/* in docs you can see what kind of styling object key-value pairs you can use on the native elements */}
        <Button 
          title="add" 
          style={{
            flex: 1,
            border: 10
          }}
        />
        {/* uhh... i duno why but the button isn't filling in the proper amount of space.  */}
      </View>
      <View>

      </View>
    </View>
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
