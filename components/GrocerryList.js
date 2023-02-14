import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TodoList from './TodoList';

export default function GrocerryList({grocerryList, setGrocerryList, storeData}) {
    return (
      <View style={{marginTop: 50, width: '95%', alignSelf: 'center', flex: 1}}>
        <FlatList
          data={grocerryList}
          keyExtractor={() => Math.random().toString()}
          renderItem={e => (
            <TodoList
              text={e.item}
              indexOfText={e.index}
              storeData={storeData}
              setGrocerryList={setGrocerryList}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }