import {
    Animated,
    StyleSheet,
    Easing,
    StatusBar,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Home = ({navigation}) => {

    const translation = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        Animated.timing(translation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.ease
        }).start(() => {
            setIsPlay(true)
            Animated.timing(scaleValue, {
                toValue: 8,
                duration: 800,
                useNativeDriver: false
            }).start(() => {
                 navigation.navigate("Profile")
            })
        })
    }, [])

    return (
        <Animated.View style={[styles.container]}>
            <StatusBar
                barStyle={"dark-content"}
                backgroundColor={"#F5F5F5"}
            />
            <Animated.View style={[styles.centerDiv, { zIndex: 9999999 },
            {
                backgroundColor: translation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['#F5F5F5', '#00373E']
                })
            }
            ]}
            >
                <Animated.Image
                    source={require('../Assets/logo.png')}
                    style={{ height: 97, width: 213, position: "absolute" }}
                    resizeMode='contain'
                />
                <Animated.Image
                    source={require('../Assets/logoY.png')}
                    style={{
                        height: 97, width: 213, position: "absolute", opacity: translation.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [0, 0.5, 1]
                        })
                    }}
                    resizeMode='contain'
                />
            </Animated.View>

            {
                isPlay ?
                    <Animated.View style={[styles.centerDiv, { position: "absolute" }, {

                        transform: [
                            {
                                scale: scaleValue
                            }
                        ]
                    }]}>

                    </Animated.View>
                    :
                    <></>
            }
        </Animated.View >
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center"
    },
    btn: {
        backgroundColor: "grey",
        height: 70,
        width: 70,
        borderRadius: 35,
        position: "absolute",
        bottom: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    innerView: {
        alignItems: "center",
        justifyContent: "center"
    },
    contain: {
        backgroundColor: "grey",
        height: 70,
        width: 70,
        borderRadius: 35,
        marginTop: "100%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    centerDiv: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "red",
        height: 258,
        width: 258,
        borderRadius: 258 / 2,
        backgroundColor: "#00373E"
    }
})