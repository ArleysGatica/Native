import React, { useEffect, useState } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { View, Text, ScrollView,  StatusBar, TouchableOpacity, Image } from 'react-native';

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


    return (
        <ScrollView>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={signIn}>
                    <Image source={require('../Asset/google.png')} style={{ width: 50, height: 50 }} />
                </TouchableOpacity>
                {user && (
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Name: {user.name}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Email: {user.email}</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>com: {uuser.password}</Text>
                        <Image source={{ uri: user.user.photo }} style={{ width: 100, height: 100 }} />
                    </View>
                )}
            </View>
        </ScrollView >
    )
}
export default SingLogin;

