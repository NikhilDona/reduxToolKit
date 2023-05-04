import { View, Text, StyleSheet, Animated, TouchableOpacity, Alert, Image, Easing } from 'react-native'
import React, { useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Profile from '../../Screens/Profile';
import MeasureScreen from '../../Screens/MeasureScreen';
import Journel from '../../Screens/Journel';
import Transparent from '../../Screens/Transparent';
import AddBottomButton from '../../Components/AddBottomButton';
import InvertedButton from '../../Components/InvertedButton';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HexIcon from '../../Assets/Icons/hexIcon';



// const TabNavigator = createBottomTabNavigator()

const BottomNavigator = () => {

    const _renderIcon = (routeName, selectedTab) => {
        let icon;
        let name;

        switch (routeName) {
            case 'Home':
                icon = 'home';
                name = 'Home'
                break;
            case 'Shop':
                icon = 'server';
                name = 'Shop'
                break;
            case 'Investment':
                icon = 'sink';
                name = 'Investment'
                break;
            case 'Store':
                icon = 'server';
                name = 'Store'
                break;
        }

        return (
            <View style={{ alignItems: "center" }}>
                <FontAwesome5
                    name={icon}
                    size={24}
                    color={routeName === selectedTab ? '#00AC99' : '#C2C5CA'}
                />
                <Text style={{ marginTop: 5 }}>{name}</Text>
            </View>
        );
    };

    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    const animatedValue = useRef(new Animated.Value(0)).current;
    const animatedInnerCircle = useRef(new Animated.Value(0)).current;
    const animatedImageOpacity = useRef(new Animated.Value(0)).current;
    const animatedWidth = useRef(new Animated.Value(0)).current;

    const [index, setIndex] = useState(0)

    const [showCircle, setShowCircle] = useState(false)

    const animate = (toValue) => {
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue,
                duration: 300,
                useNativeDriver: false
            })
        ]).start()
    }
    const animateWidth = () => {
        Animated.sequence([
            Animated.timing(animatedWidth, {
                toValue: 150,
                duration: 350,
                useNativeDriver: false
            }),
            Animated.timing(animatedInnerCircle, {
                toValue: 1,
                duration: 350,
                useNativeDriver: false,
                easing: Easing.ease
            }),
            Animated.timing(animatedImageOpacity, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false

            })
        ]).start()

    }
    const getOldWidth = () => {
        Animated.sequence([
            Animated.timing(animatedWidth, {
                toValue: 44,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(animatedInnerCircle, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }),
            Animated.timing(animatedImageOpacity, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false

            })
        ]).start()

    }

    const onPress = () => {
        setIndex(index === 1 ? 0 : 1);
        animate(index === 1 ? 0 : 1)
        setTimeout(() => {
            setShowCircle(!showCircle)
            if (!showCircle) {
                animateWidth()
            }
            else {
                getOldWidth()
            }

        }, 300)

    }

    const innerCircle = animatedInnerCircle.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 40]
    })

    const innerCircleLeft = animatedInnerCircle.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -40]
    })

    return (
        <CurvedBottomBar.Navigator
            type='DOWN'
            shadowStyle={styles.shawdow}
            screenOptions={{
                headerShown: false
            }}
            height={72}
            circleWidth={60}
            bgColor="#FFF"
            initialRouteName="Home"
            renderCircle={({ selectedTab, navigate }) => (
                // <View style={{backgroundColor:"red",bottom:30,alignItems:"center",justifyContent:"center"}}>
                <Animated.View style={{}}>
                    {
                        showCircle ?
                            <Animated.View style={{ alignSelf: "center", position: "absolute", bottom: 120 }}>
                                <Animated.View style={[styles.outerCircle, {
                                    width: animatedWidth
                                }]}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={styles.innerDot}>
                                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                                                <Animated.Image
                                                    style={{
                                                        height: 16, width: 16, opacity: animatedImageOpacity.interpolate({
                                                            inputRange: [0, 1],
                                                            outputRange: [0, 1]
                                                        })
                                                    }}
                                                    resizeMode="contain"
                                                    source={require('../../Assets/Share.png')}
                                                />

                                            </TouchableOpacity>
                                        </View>
                                        <Animated.View style={[styles.innerDot, {
                                            position: 'absolute',
                                            transform: [
                                                {
                                                    translateX: innerCircle
                                                }
                                            ]
                                        }]}>
                                            <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                                                <Animated.Image
                                                    style={{
                                                        height: 16, width: 16, opacity: animatedImageOpacity.interpolate({
                                                            inputRange: [0, 1],
                                                            outputRange: [0, 1]
                                                        })
                                                    }}
                                                    resizeMode="contain"
                                                    source={require('../../Assets/Union.png')}
                                                />

                                            </TouchableOpacity>

                                        </Animated.View>
                                        <Animated.View style={[styles.innerDot, {
                                            position: 'absolute',
                                            transform: [
                                                {
                                                    translateX: innerCircleLeft

                                                }
                                            ]
                                        }]}>
                                            <TouchableOpacity>
                                                <Animated.Image
                                                    style={{
                                                        height: 16, width: 16, opacity: animatedImageOpacity.interpolate({
                                                            inputRange: [0, 1],
                                                            outputRange: [0, 1]
                                                        })
                                                    }}
                                                    resizeMode="contain"
                                                    source={require('../../Assets/Plus.png')}
                                                />
                                            </TouchableOpacity>
                                        </Animated.View>
                                    </View>
                                </Animated.View>
                            </Animated.View>
                            :
                            <></>
                    }

                    <Animated.View style={{
                        transform: [
                            {
                                rotate: animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '-180deg']
                                })
                            }
                        ],
                        bottom: 30

                    }}>
                        <TouchableOpacity onPress={onPress}>
                            <Image
                                source={require('../../Assets/Icons/plusMid.png')}
                                style={{ width: 53, height: 60 }}
                            />
                        </TouchableOpacity>


                    </Animated.View>
                </Animated.View>
                // </View>
            )}
            tabBar={renderTabBar}
        >
            <CurvedBottomBar.Screen
                name="Home"
                position="LEFT"
                component={() => <Journel />}
            />
            <CurvedBottomBar.Screen
                name="Shop"
                position="LEFT"
                component={() => <Journel />}
            />
            <CurvedBottomBar.Screen
                name="Investment"
                component={() => <Journel />}
                position="RIGHT"
            />
            <CurvedBottomBar.Screen
                name="Store"
                component={() => <MeasureScreen />}
                position="RIGHT"
            />
        </CurvedBottomBar.Navigator>



    )
}

const styles = StyleSheet.create({
    bottomText: {
        marginTop: 6,
        fontSize: 12,
        lineHeight: 16
    },
    btnCircleUp: {
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        bottom: 80,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
    ,
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    innerDot: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        alignItems: "center",
        justifyContent: "center"
    },
    outerCircle: {
        height: 48,
        width: 48,
        borderRadius: 24,
        backgroundColor: "#00AC99",
        alignItems: "center",
        justifyContent: "center"

    }
})

export default BottomNavigator;