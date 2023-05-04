import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import MainNavigator from './src/Navigation/MainNavigator'
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { mystore } from './src/Redux/MyStore';

const Stack = createNativeStackNavigator();


let items = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
    name: "Xray - Jr desk casusl shoes",
    brand: "PUMA",
    prices: 2500,
    qty: 0
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNob2V8ZW58MHx8MHx8&w=1000&q=80',
    name: "Best Running shoes",
    brand: "REEBOK",
    prices: 999,
    qty: 0
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8&w=1000&q=80',
    name: "Sneakers for man shoes",
    brand: "PROVOGUE",
    prices: 449,
    qty: 0
  }
]



function App() {
  return (
    <Provider store={mystore}>
      <MainNavigator />
    </Provider>

  );
}

export default App;
