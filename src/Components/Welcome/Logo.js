import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Logo = () => {
    return (
        <View style={estilos.contenedor}>
            <Image source={require('../../Asset/Logo.png')} />
        </View>
    )
}

const estilos = StyleSheet.create({

    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        

    },

    textoMensaje: {
        fontSize: 40,
        fontWeight: "bold"
    }

});

export default Logo;