import React from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import estilos from './WelcomeStyle';
    
const Welcome = ({navigation}) => {
    return (

        <ScrollView>
            <View style={estilos.Container}>
                <Text style={estilos.Title}>
                    Welcome to{"\n"}
                    Mr Doctor team
                </Text>
                <Text style={estilos.Caption}>The best team for your next health project and reservations</Text>
                <Image source={require('../../Asset/Welcome.png')}
                    style={estilos.Logo}
                />
                <View style={estilos.Button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                       <Button onPress={ () => navigation.navigate('Home')} title="Get Started"/>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>

    )
}

export default Welcome;