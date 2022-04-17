import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Logo from './src/Components/Welcome/Logo';
import Welcome from './src/Components/Welcome/Welcome';
import Firebase from './src/Service/Firebase';
import Home from './src/Components/Home/Home';

const App = () => {
    return (
        <View style={estilos.contenedor}>
            <Home />
        </View>
    )
}

const estilos = StyleSheet.create({

    contenedor: {
       
    
           }

});

export default App;