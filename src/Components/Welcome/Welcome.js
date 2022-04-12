import React from 'react';
import {
    Text, View, StyleSheet, ScrollView,
    Image, Button, Alert
} from 'react-native';

const Welcome = () => {
    return (
       
        <ScrollView>
            <View style={estilos.Container}>
                <Text style={estilos.Title}>Welcome to Mr Doctor team</Text>
                <Text style={estilos.Caption}>The best team for your next health project and reservations</Text>
            </View>
            <Image source={require('../../Asset/Logo.png')} />
            <Button
                title="Get Started"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </ScrollView>

    )
}

const estilos = StyleSheet.create({

    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },

    Title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#000000",
         backgroundColor: "#08007C",
    },

    Caption: {
        fontSize: 20,
        color: "#000000"
    }

});

export default Welcome;