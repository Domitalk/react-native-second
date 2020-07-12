import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            {/* item is a preassigned key that comes with the renderItem prop in FlatList */}
            <Text>{props.title}</Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem; 