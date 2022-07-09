import React from 'react';
import {
    Text, View,
    ScrollView,
    Image, TextInput, TouchableOpacity
} from 'react-native';
import estilos from './HomeStyle';

export const HomeCard = () => {
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('ServiceSpecialities')}>
                <View style={estilos.Container_STABLE}>
                    <View style={estilos.Container_STABLE_inside}>
                        <Text style={estilos.text}>
                            EsTablecimiento
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