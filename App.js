import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Logo from './src/Components/Welcome/Logo';
import Welcome from './src/Components/Welcome/Welcome';
import Firebase from './src/Service/Firebase';

const App = () => {
    return (
        <View style={estilos.contenedor}>
            <Firebase />
        </View>
    )
}

const estilos = StyleSheet.create({

    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

});

export default App;