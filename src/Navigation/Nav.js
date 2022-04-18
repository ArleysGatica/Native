import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Nav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                   // headerShown: false, ---name ruts
                }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
    );
};
        
export default Nav;