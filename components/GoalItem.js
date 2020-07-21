import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, TextInput, ScrollView, FlatList } from 'react-native';
// TouchableHighlight similar to opacity, different visual

const GoalItem = props => {
    // listeners, onTouch etc 
    return (
        // touchable has a bunch of built in stuff to recongnize touch events 
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.itemData.item.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
  });
  