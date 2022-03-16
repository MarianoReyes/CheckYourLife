import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons, FontAwesome5, Entypo} from "@expo/vector-icons";


//SCREENS

import toDoList from "./screens/toDoList";
import Finanzas from "./screens/Finanzas";
import timeTracker from "./screens/Reloj";
import Comunidad from "./screens/comunidad";
import LoginScreen from "./screens/Login";
import addTask from "./screens/addTask"
import HomeScreen from "./screens/HomeScreen";

const TAB = createBottomTabNavigator();
const STACK = createStackNavigator();


function MyTabs() {
    return (
        <TAB.Navigator
        tabBarOptions={{ showLabel: false }}
        //initialRouteName="LoginScreen"
        >
            <TAB.Screen 
            options={{
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                      name="md-checkbox"
                      color='#001219'
                      size={24}
                    />),
                headerTitle: 'TO DO LIST',
                headerTitleAlign: 'center',
                headerTitleStyle : {
                    fontWeight: 'bold',
                },
            }}
            name="To do List" component={todolist}></TAB.Screen>
            <TAB.Screen 
            options= {{
                tabBarIcon: ({ tintColor }) => (
                    <MaterialCommunityIcons
                      name='finance'
                      color='#001219'
                      size={28}
                    />),
                headerTitle: 'FINANZAS',
                headerTitleAlign: 'center',
                headerTitleStyle : {
                    fontWeight: 'bold',
                },
            }}
            name="Finanzas" component={Finanzas}></TAB.Screen>
            <TAB.Screen 
            options={{
                tabBarIcon: () => (
                    <FontAwesome5 name="user-friends" size={24} color="'#001219'" />),
                headerTitle: 'COMUNIDAD',
                headerTitleAlign: 'center',
                headerTitleStyle : {
                    fontWeight: 'bold',
                },
                tabBarStyle: {
                    
                }
            }}
            name="Comunidad" component={Comunidad}></TAB.Screen>
            <TAB.Screen
            options={{
                tabBarIcon: () => (
                    <Entypo name="back-in-time" size={24} color="'#001219'" />),
                headerTitle: 'TIME TRACKER',
                headerTitleAlign: 'center',
                headerTitleStyle : {
                    fontWeight: 'bold',
                },
            }}
            name="Time Tracker" component={timeTracker}></TAB.Screen>
        </TAB.Navigator>
    )
}

const todolist = () =>{
    return (
    <STACK.Navigator>
        <STACK.Screen options={{headerShown: false}} name='To Do List' component={toDoList} />
        <STACK.Screen options={{headerTitle: 'Más Información',}} name='AddItem' component={addTask} />
    </STACK.Navigator>)
}

export function Login() {
    return (
        <NavigationContainer>
            <STACK.Navigator>
                <STACK.Screen options={{headerShown: false}} name='LOGIN' component={LoginScreen} />
                <STACK.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
            </STACK.Navigator>
        </NavigationContainer>)
}

export default function Navigation() {
    return (
    
            <MyTabs/>
            
    )
}