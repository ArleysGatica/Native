import React from 'react';
import {
    Text, View, ScrollView,
    Image, Button
} from 'react-native';

import estilos from './WelcomeStyle';

const Welcome = () => {
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
                    <Button
                        title="Get Started"
                    />
                </View>
            </View>

        </ScrollView>

    )
}

export default Welcome;