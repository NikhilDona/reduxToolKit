import { View, Text,Vibration, TouchableOpacity, Alert, Platform } from 'react-native'
import React from 'react'

const MeasureScreen = () => {
  console.log(Platform)

  return (
    <View style={{flex:1,...Platform.select({
      android:{
        backgroundColor:"#202427"
      },
      ios:{
        backgroundColor:"blue"
      }
      
    })}}>
      <Text>MeasureScreen</Text>

      {/* <TouchableOpacity>
        <Text onPress={() => Vibration.vibrate()} style={{backgroundColor:"red",padding:20}}>press resizeMode</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => Vibration.vibrate()}>
        <Text>pre</Text>
      </TouchableOpacity>



    </View>
  )
}

export default MeasureScreen;