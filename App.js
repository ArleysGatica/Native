import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './src/Components/Welcome/Logo';
import Welcome from './src/Components/Welcome/Welcome';
import Home from './src/Components/Home/Home';
import ServiceSpecialities from './src/Service/Speciality';
import Profile from './src/Components/Profile-Doctor/Profile';
import {Doctors} from './src/Service/Doctor-DT';
import Login from './src/Pages/Login/Login';
import { Meetings } from "./src/Pages/Meetings"
import { Establishments } from './src/Service/Establishment';
import { DoctorsEM } from './src/Service/Doctor-EM';
import { Agenda } from './src/Service/Agenda';
import {AgendaMedico} from './src/Service/AgendaMedico'

const Stack = createNativeStackNavigator();

function LogoStack() {
   
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="LOGUITO" component={Logo} />
            <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="ServiceSpecialities" component={ServiceSpecialities} />
            <Stack.Screen options={{ headerShown: false }} name="Establishments" component={Establishments} />
            <Stack.Screen options={{ headerShown: false }} name="Doctors" component={Doctors} /> 
            <Stack.Screen options={{ headerShown: false }} name="DoctorsEM" component={DoctorsEM} /> 
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
            <Stack.Screen options={{ headerShown: false }} name="Meetings" component={Meetings} />
            <Stack.Screen options={{ headerShown: false }} name="Agenda" component={Agenda} />
            <Stack.Screen options={{ headerShown: false }} name="AgendaMedico" component={AgendaMedico} />
        </Stack.Navigator>
    )
}

function RootNatigator() {
    return (
        <NavigationContainer>
            <LogoStack />
        </NavigationContainer>
    )
}
export default function App() {
    return (
        <RootNatigator />
    );    
}