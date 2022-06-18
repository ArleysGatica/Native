import React, { useEffect, useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import { View, Text, ScrollView, Button, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';

const SingLogin = () => {

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
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#000' }}>Sing In</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Google</Text>
                <TouchableOpacity onPress={signIn}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={signOut}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>Sign Out</Text>
                </TouchableOpacity>
                {user && (
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Name: {user.user.name}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Email: {user.user.email}</Text>
                        <Image source={{ uri: user.user.photo }} style={{ width: 100, height: 100 }} />
                    </View>
                )}
            </View>
        </ScrollView >
    );
}
export default SingLogin;

