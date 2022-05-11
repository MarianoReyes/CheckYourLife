import React from "react";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons, FontAwesome5, Entypo} from "@expo/vector-icons";


//SCREENS

import toDoList from "./screens/toDoList";
import Finanzas from "./screens/Finanzas";
import timeTracker from "./screens/Reloj";
import comunidad from "./screens/comunidad";
import LoginScreen from "./screens/Login";
import addTask from "./screens/addTask"
import HomeScreen from "./screens/HomeScreen";
import Perfil from "./screens/Perfil";
import chat from "./screens/chat";

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
            name="Comunidad" component={COmunidad}></TAB.Screen>
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
            <TAB.Screen
            options={{
                tabBarIcon: () => (
                    <FontAwesome5 name="user" size={24} color="'#001219'" />),
                headerTitle: 'PERFIL',
                headerTitleAlign: 'center',
                headerTitleStyle : {
                    fontWeight: 'bold',
                },
            }}
            name="Perfil" component={Perfil}></TAB.Screen>
        </TAB.Navigator>
    )
}

const todolist = () =>{
    return (
    <STACK.Navigator>
        <STACK.Screen options={{headerShown: false}} name='To Do List' component={toDoList} />
        <STACK.Screen options={{
          title: 'Más Información',
          headerStyle: {
            backgroundColor: 'rgba(20,39,155,1)',
            borderRadius: 0,
            borderColor: 'rgba(20,39,155,1)',
            borderBottomColor: 'rgba(20,39,155,1)',
            shadowColor: 'transparent',
            shadowRadius: 0,
             },
             headerBackgroundContainerStyle:{
                backgroundColor: 'rgba(20,39,155,1)',
             },
            shadowOffset: { height: 0, width: 0 },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name='AddItem' component={addTask} />
    </STACK.Navigator>)
}

const COmunidad = () =>{
    return (
    <STACK.Navigator>
        <STACK.Screen options={{headerShown: false}} name='COMUNIDAD' component={comunidad} />
        <STACK.Screen options={{headerShown: false}} name='CHAT' component={chat} />
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