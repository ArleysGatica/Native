import React from 'react';
import {
    Text, View,
    ScrollView,
    Image, TextInput, TouchableOpacity
} from 'react-native';
import estilos from './HomeStyle';

export const HomeCard = ({ navigation, user }) => {
    
    console.log("USER HOMECARD ", user);

    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Establishments', { user: user})}>
                <View style={estilos.Container_STABLE}>
                    <View style={estilos.Container_STABLE_inside}>
                        <Text style={estilos.text}>
                            ESTABLECIMIENTOS
                        </Text>
                        <View style={estilos.Container_IMGSTABLE}>
                            <Image
                                source={require('../../Asset/establishment.png')}
                                style={estilos.STABLE}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}