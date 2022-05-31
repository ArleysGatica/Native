import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './src/Components/Welcome/Logo';
import Welcome from './src/Components/Welcome/Welcome';
import Home from './src/Components/Home/Home';
import ServiceSpecialities from './src/Service/Speciality';
import Profile from './src/Components/Profile-Doctor/Profile';

const Stack = createNativeStackNavigator();

function LogoStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LOGUITO" component={Logo} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ServiceSpecialities" component={ServiceSpecialities} />
        </Stack.Navigator>
    )
}

function RootNatigator() {
    return (
        <NavigationContainer>
            <Profile />
        </NavigationContainer>
    )
}
export default function App() {
    return (
        <RootNatigator />
    );    
}