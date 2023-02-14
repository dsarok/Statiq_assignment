import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function TodoList({
  text,
  indexOfText,
  storeData,
  setGrocerryList,
}) {
  return (
    <TouchableOpacity style={styles.todostyle}>
      <View style={{marginLeft: 2}}>
        <Text style={{fontWeight: 300, fontSize: 18}}>{text}</Text>
      </View>

      <TouchableOpacity
        style={{marginRight: 4}}
        onPress={() => {
          setGrocerryList(prev => {
            let updatedList = [
              ...prev.slice(0, indexOfText),
              ...prev.slice(indexOfText + 1),
            ];
            storeData(updatedList);
            return updatedList;
          });
        }}>
        <Text>&#10006;</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    todostyle: {
        borderWidth: 1,
        marginBottom: 9,
        paddingLeft: 10,
        height: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
      },
})