import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <View style={estilos.contenedor}>
            <Image source={require('../../Asset/Logo.png')} />
            <Image style={estilos.Icons} source={require('../../Asset/next-button.png')} />
        </View>
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