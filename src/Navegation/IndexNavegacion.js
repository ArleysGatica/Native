import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Logo from "../Components/Welcome/Logo";
import Welcome from "../Components/Welcome/Welcome";
import Login from "../Pages/Login/Login";

const Tab = createBottomTabNavigator();

export default function NavegationLocal() {
     
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Logo"
                component={Logo}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={require("../Asset/Logo.png")}
                            style={{ width: 75, height: 60, top: -15 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Welcome"
                component={ Welcome}
                options={{
                    tabBarIcon: () => renderNav(),
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    
                    tabBarIcon: () => (
                        <Image
                            source={require("../Asset/cerrar-sesion.png")}
                            style={{ width: 75, height: 60, top: -15 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function renderNav() {
    return (
        <Image
            source={require("../Asset/cerrar-sesion.png")}
            style={{ width: 60, height: 60, top: -15, backgroundColor: 'red' }}
        />
    );
}
