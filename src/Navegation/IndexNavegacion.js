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
                name="Favorite"
                component={Logo}
                options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require("../Asset/Logo.png")}
                            style={{ width: 75, height: 75, top: -15 }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Welcome"
                component={ Welcome}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderPokeball(),
                }}
            />

            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: "Mi cuenta",
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require("../Asset/Logo.png")}
                            style={{ width: 75, height: 75, top: -15 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function renderPokeball() {
    return (
        <Image
            source={require("../Asset/Logo.png")}
            style={{ width: 75, height: 75, top: -15 }}
        />
    );
}
