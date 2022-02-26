import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer, TabActions } from "@react-navigation/native";

//SCREENS

import toDoList from "./screens/toDoList";
import Finanzas from "./screens/Finanzas";
import timeTracker from "./screens/timeTracker";
import Comunidad from "./screens/Comunidad";
import LoginScreen from "./screens/Login";


const TAB = createBottomTabNavigator();
function MyTabs() {
    return (
        <TAB.Navigator
        //initialRouteName="LoginScreen"
        >
            <TAB.Screen name="Login" component={LoginScreen}></TAB.Screen>
            <TAB.Screen name="To do List" component={toDoList}></TAB.Screen>
            <TAB.Screen name="Finanzas" component={Finanzas}></TAB.Screen>
            <TAB.Screen name="Comunidad" component={Comunidad}></TAB.Screen>
            <TAB.Screen name="Time Tracker" component={timeTracker}></TAB.Screen>
        </TAB.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}