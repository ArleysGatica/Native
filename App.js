import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Logo from './src/Components/Welcome/Logo';

const App = () => {
    return (
        <View style={estilos.contenedor}>
          <Logo />
        </View>
    )
}

const estilos = StyleSheet.create({

    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#08007C",
    }

});

export default App;