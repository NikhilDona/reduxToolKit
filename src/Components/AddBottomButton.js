import { View, Text, TouchableHighlight, StyleSheet, Animated, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather';

const AddBottomButton = () => {

    const btnSize = useRef(new Animated.Value(0)).current;
    const ButtonSize = useRef(new Animated.Value(1)).current;
    // const ButtonSize = new Animated.Value(1)

    const [index, setIndex] = useState(1)

    const handlePress = (toValue) => {
        Animated.timing(btnSize, {
            toValue,
            duration: 300,
            useNativeDriver: false
        }).start()
    }

    const rotation = btnSize.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "180deg"]
    });

    const OnButtonSize = () => {
        Animated.sequence([
            Animated.timing(ButtonSize, {
                toValue: 0.95,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(ButtonSize, {
                toValue: 1,
                useNativeDriver: false
            })
        ]).start()
    }


    const onPress = () => {
        setIndex(index === 1 ? 0 : 1);
        handlePress(index === 1 ? 0 : 1)
    }

    const thermometerX = ButtonSize.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -100]
    })
    const thermometerY = ButtonSize.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -100]
    })


    return (
        <View style={{ alignItems: "center", position: "absolute" }}>
            <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                <View style={styles.secondryButton}>
                    <Feather name={"thermometer"} size={24} color={"#FFF"} />
                </View>
            </Animated.View>
            <Animated.View style={[styles.btn, {
                transform: [{
                    scale: ButtonSize
                }]
            }]}>
                <TouchableHighlight onPress={() => {
                    OnButtonSize(),
                        onPress()
                }} underlayColor={"#7F58FF"}>
                    <Animated.View style={{
                        transform: [{
                            rotate: rotation
                        }]
                    }}>
                        <FontAwesome5 name={"plus"} size={24} color={"#FFF"} />
                    </Animated.View>
                </TouchableHighlight>
            </Animated.View>

        </View>
    )
}

export default AddBottomButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#7F58FF",
        alignItems: "center",
        justifyContent: "center",
        height: 72,
        width: 72,
        borderRadius: 36,
        position: "absolute",
        top: -70,
        elevation: 5,
        shadowColor: "#7F58FF",
        borderWidth: 3, borderColor: "#FFF"

    },
    secondryButton: {
        alignItems: "center",
        position: "absolute",
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#7F58FF'
    }
})