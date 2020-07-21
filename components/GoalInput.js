import React, { useState } from 'react'
import { StyleSheet, Text, Modal, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }    

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} >
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.inputBox}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                /> 
                <Button 
                    title="add" 
                    onPress={() => {props.addGoalHandler(enteredGoal); setEnteredGoal('')}}
                />
            </View>
        </Modal>
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
  