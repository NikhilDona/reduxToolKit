import { View, Text, TouchableHighlight, StyleSheet, Animated, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather';

const InvertedButton = () => {

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
        <View style={styles.chevron}>
            <View style={styles.chevronMain} />
            <View style={[styles.chevronTriangle, styles.chevronTopLeft]} />
            <View style={[styles.chevronTriangle, styles.chevronTopRight]} />
            <View style={[styles.chevronTriangle, styles.chevronBottomLeft]} />
            <View style={[styles.chevronTriangle, styles.chevronBottomRight]} />
        </View>
    )
}

export default InvertedButton;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#000",
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
    },
    chevron: {
        width: 70,
        height: 30,
      },
      chevronMain: {
        width: 70,
        height:30,
        backgroundColor: "#202427",
      },
      chevronTriangle: {
        backgroundColor: "transparent",
        borderTopWidth: 20,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 75,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderRightColor: "transparent",
        borderLeftColor: "#202427",
      },
      chevronTopLeft: {
        position: "absolute",
        top: -20,
        left: 0,
      },
      chevronTopRight: {
        position: "absolute",
        top: -20,
        right: 0,
        transform: [{ scaleX: -1 }],
      },
      chevronBottomLeft: {
        position: "absolute",
        bottom: -20,
        left: 0,
        transform: [{ scale: -1 }],
      },
      chevronBottomRight: {
        position: "absolute",
        bottom: -20,
        right: 0,
        transform: [{ scaleY: -1 }],
      },
})