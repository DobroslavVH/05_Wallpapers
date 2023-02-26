import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import OptionsScreen from "../screens/Options/OptionsScreen";
import StackNavigator from "./StackNavigator";

import { colors } from "../constants/layout";
import Icon from 'react-native-vector-icons/FontAwesome'

const BottomNavigator = () => {
    const Tab = createBottomTabNavigator()

    const BottomTabs = () => {
        return (
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false
                }}
                detachInactiveScreens={true}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => <Icon name='home' size={focused ? 35 : 18} color={focused ? colors.orange : colors.lightgray} />,
                        tabBarActiveTintColor: colors.orange,
                        tabBarInactiveTintColor: colors.lightgray
                    }}
                />
                <Tab.Screen
                    name="Options"
                    component={OptionsScreen}
                    options={{
                        tabBarIcon: ({ focused }) => <Icon name='gear' size={focused ? 35 : 18} color={focused ? colors.orange : colors.lightgray} />,
                        tabBarActiveTintColor: colors.orange,
                        tabBarInactiveTintColor: colors.lightgray
                    }}
                />
                {/* <Tab.Screen
                    name="Old Settings"
                    component={StackNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => <Icon name='gear' size={focused ? 35 : 18} color={focused ? colors.orange : colors.lightgray} />,
                        tabBarActiveTintColor: colors.orange,
                        tabBarInactiveTintColor: colors.lightgray
                    }}
                /> */}
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    )
}

export default BottomNavigator