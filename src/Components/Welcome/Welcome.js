import React from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import estilos from './WelcomeStyle';
    
const Welcome = ({navigation}) => {
    return (

        <ScrollView style={{ backgroundColor: '#FFFFFF', height: '100%' }} >
            <View style={estilos.Container}>
                <Text style={estilos.Title}>
                    Bienvenido a{"\n"}
                    Mr Doctor
                </Text>
                <Text style={estilos.Caption}>Aplicación móvil para la gestión de citas médicas</Text>
                <Image source={require('../../Asset/Welcome.png')}
                    style={estilos.Logo}
                />
                <View style={estilos.Button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Button onPress={() => navigation.navigate('Login')} title="Get Started"/>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    )
}

export default Welcome;