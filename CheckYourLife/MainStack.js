import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Reloj from './screens/Reloj'
import RelojT from './screens/RelojT'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = 'Reloj'
                    component = { Reloj }
                />
                 <Stack.Screen
                    name = 'RelojT'
                    component = { RelojT }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack