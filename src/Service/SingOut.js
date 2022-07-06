import React, { useEffect, useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { View, Text, ScrollView, Button, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';

const SignOut = () => {

    useEffect(() => {
        const config = {
            ClientId: "663908802543-p4no9ub7j6l3no76r92effc9jiucg4n2.apps.googleusercontent.com",
            scopes: ["profile", "email"]
        };
        GoogleSignin.configure(config);
    });

    const [user, setUser] = useState(null);

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser(userInfo);
            console.log(userInfo);
        } catch (error) {
            console.log(error);
        }
    }

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setUser(null);
            console.log("signed out");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={signOut}>
                    <Image source={require('../Asset/cerrar-sesion.png')} style={{ width: 40, height: 40 }} />
                </TouchableOpacity>
            </View>
        </ScrollView >
    );

}
export default SignOut;
