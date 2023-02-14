import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import GrocerryList from './components/GrocerryList';
export default function App() {
  const [textValue, setTextValue] = useState('');
  const [grocerryList, setGrocerryList] = useState([]);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@grocerylist', JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@grocerylist');
      setGrocerryList(jsonValue != null ? JSON.parse(jsonValue) : []);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 17, fontWeight: 800, alignSelf: 'center'}}>
          Grocerry List
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={v => setTextValue(v)}
          value={textValue}
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            textValue &&
              setGrocerryList(prev => {
                let updatedList = [...grocerryList, textValue];
                storeData(updatedList);
                return updatedList;
              });
            setTextValue('');
          }}>
          <View style={styles.buttonText}>
            <Text style={{fontSize: 20, color: 'white'}}>Add Item</Text>
          </View>
        </TouchableOpacity>
      </View>
      <GrocerryList
        grocerryList={grocerryList}
        setGrocerryList={setGrocerryList}
        storeData={storeData}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  buttonStyle: {
    backgroundColor: 'coral',
    width: '30%',
    alignSelf: 'center',
    borderRadius: 3,
    height: 30,
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
