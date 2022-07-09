import React from 'react';
import { Image, View, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logo = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={estilos.contenedor}>
            <Image source={require('../../Asset/Logo.png')} />
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                <Image style={estilos.Icons} source={require('../../Asset/flecha.png')} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({

    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#08007C",
    },

    Icons: {
        width: 70,
        marginTop: 50,
        height: 70,
        resizeMode: 'contain'
    }

});

export default Logo;