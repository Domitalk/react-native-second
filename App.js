import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    // style={} requires an object. thus the double curley
    <View style={{padding: 50}}>
      {/* view is most like div but unlike HTML you can't just put text inside the view, it has to be inside text component */}
      {/* it's always nice to start with view because its the most flexible in terms of styling and because you need one wrapping compoenent at the top level */}
      <View>
        <TextInput placeholder="Course Goal" style={{borderColor: 'black', borderWidth: 1, padding: 10 }}/> 
        {/* in docs you can see what kind of styling object key-value pairs you can use on the native elements */}

        <Button title="add" />
      </View>
      <View>

      </View>
    </View>
  );
}


// later on probably better to actually put all the inline styling into this section but for now just going to style attr it 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
