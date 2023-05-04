import { View, Text, StyleSheet, TouchableOpacity, StatusBar, FlatList, Image } from 'react-native'
import React from 'react'
import { Svg } from 'react-native-svg'
import HexIcon from '../Assets/Icons/hexIcon'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToMyCart } from '../Redux/MyCartSlice'
import { useNavigation } from '@react-navigation/native'

const MyCart = () => {

    const mycartItems = useSelector(state => state.cart)


  return (
    <View style={{ flex: 1, backgroundColor: "#F5f5f5" }}>
      <StatusBar
        backgroundColor={"#fff"}
        barStyle={"dark-content"}
      />

      <View style={styles.header}>
        <Text style={styles.headerText}>My Cart</Text>
      </View>


      <FlatList
        data={mycartItems}
        key={() => Math.random()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.box}>
              <Image
                source={{ uri: item?.image }}
                style={{ height: 100, width: 100, borderRadius: 20, alignSelf: "center", marginLeft: 10 }}
                resizeMode='cover'
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 14 }}>{item?.name}</Text>
                <Text>{item?.brand}</Text>
                <Text style={{ color: "green" }}>₹{item?.prices}</Text>
                <View style={{ marginTop: 10, flexDirection: "row", alignItems: "center" }}>

                  {
                    item.qty == 0 ? (
                      <TouchableOpacity style={[styles.btn, { width: 30, marginLeft: 10 }]}>
                        <Text style={{ fontSize: 14, color: "#FFF" }}>-</Text>
                      </TouchableOpacity>
                    )
                      :
                      null
                  }
                  {
                    item.qty !== 0 ? null : (
                      <Text style={{ alignSelf: "center", marginLeft: 10, fontWeight: "700" }}>{'0'}</Text>
                    )
                  }
                  {
                    item.qty !== 0 ? null : (
                      <TouchableOpacity style={[styles.btn, { width: 30, marginLeft: 10 }]}>
                        <Text style={{ fontSize: 14, color: "#FFF" }}>+</Text>
                      </TouchableOpacity>
                    )
                  }
                </View>
              </View>
            </View>
          )
        }}
      />


    
    </View>
  )
}

export default MyCart;

const styles = StyleSheet.create({

  header: {
    backgroundColor: "#ffff",
    height: 60,
    justifyContent: "center",
    paddingLeft: "5%",
    elevation: 5
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    alignSelf: "center"
  },
  box: {
    backgroundColor: "#FFF",
    width: "94%",
    alignSelf: "center",
    borderRadius: 20,
    height: 120,
    marginTop: 20,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  btn: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 7,
    width: 90
  },
  bottomMainView:{
    position:"absolute",
    width:"100%",
    height:60,
    bottom:0,
    backgroundColor:"#FFF",
    elevation:5,
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:"center"
  },
  addedText:{
    color:"#000",
    fontWeight:'700',
    fontSize:16
  }
})