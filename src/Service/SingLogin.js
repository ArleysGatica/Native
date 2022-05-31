import React from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';
import { View, Text, ScrollView, Button, StatusBar, TouchableOpacity } from 'react-native';

const SingLogin = () => {

    GoogleSignin.configure({
        webClientId: '663908802543-p4no9ub7j6l3no76r92effc9jiucg4n2.apps.googleusercontent.com',

    });

    const signIn = async () => {

        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const credential = auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken);
            const firebaseUserCredential = await auth().signInWithCredential(credential);
            console.log(firebaseUserCredential.user.toJSON());
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    }

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            console.log("out");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ScrollView>
            <StatusBar barStyle="dark-content" />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>SingLogin</Text>
                <Button title="Sign In" onPress={signIn} />
                <Button title="Sign Out" onPress={signOut} />
            </View>
            
        </ScrollView>
    )

}
export default SingLogin;

