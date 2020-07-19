import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

const GoalInput = props => {
    return (
        <View style={styles.inputContainer} >
            <TextInput 
                placeholder="Course Goal" 
                style={styles.inputBox}
                onChangeText={props.goalInputHandler}
                value={props.enteredGoal}
            /> 
            <Button 
                title="add" 
                onPress={props.addGoalHandler}
            />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
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
  