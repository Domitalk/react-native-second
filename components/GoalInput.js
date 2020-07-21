import React, { useState } from 'react'
import { StyleSheet, Text, Modal, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }    

    const addGoalHandlerCombo = () => {
        props.addGoalHandler(enteredGoal); 
        setEnteredGoal('');
    }

    const onCancelHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            {/* the view only takes the space that its children need  */}
            {/* so if you want to center everything, some work is needed  */}
            <View style={styles.inputContainer} >
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.inputBox}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                /> 
                <Button 
                    title="Cancel"
                    color="red"
                    onPress={onCancelHandler}
                />
                <Button 
                    title="Add New Goal" 
                    onPress={addGoalHandlerCombo}
                />
                
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flex one takes up the entire parent element's space 
        // flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    inputBox: {
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
    },
  });
  