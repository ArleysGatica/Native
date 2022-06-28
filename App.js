import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from './src/Components/Welcome/Logo';
import Welcome from './src/Components/Welcome/Welcome';
import Home from './src/Components/Home/Home';
import ServiceSpecialities from './src/Service/Speciality';
import Profile from './src/Components/Profile-Doctor/Profile';
import ReservationAgenda from './src/Components/Home/j';
import SingLogin from './src/Service/SingLogin';
import Doctor from './src/Service/Doctor';
import Login from './src/Pages/Login/Login';
import Specialities from './src/Pages/Specialities';
import DoctorView from './src/Pages/Doctor';
import Calendario from './src/Components/Calendar';
import createBottomTabNavigator from './src/Components/Menu/AppMenu';

const Stack = createNativeStackNavigator();

function LogoStack() {
   
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="LOGUITO" component={Logo} />
            <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Stack.Screen options={{ headerShown: false }} name="ServiceSpecialities" component={ServiceSpecialities} />
            <Stack.Screen options={{ headerShown: false }}name="Doctor" component={Doctor}  /> 
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