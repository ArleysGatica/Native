import React from 'react';
import {
    Text, View,
    ScrollView,
    Image, TextInput,
} from 'react-native';
import estilos from './HomeStyle';

export const HomeCard = ({}) => {
    return (
        <ScrollView>
            <View style={estilos.Container_Category}>
                <Text style={estilos.Container_Category_Info_Cat}>Top Rated Doctor</Text>
                <Text style={estilos.Container_Category_Info_sell}>See All</Text>
            </View>
            <View style={estilos.Container_Perfil}>
                <View>
                    <Image
                        source={require('../../Asset/user.png')}
                        style={estilos.Container_Perfil_img_img}
                    />
                </View>
                <View style={estilos.Container_Perfil_item}>
                    <View>
                        <Text style={estilos.Container_Perfil_info_name}>Dr. John Doe</Text>
                        <Text style={estilos.Container_Perfil_info_speciality}>
                            Specialist in Dermatology
                        </Text>
                        <Text>
                            Rated 4.5/5
                        </Text>
                    </View>
                </View>
                <View style={estilos.img_right} >
                    <Image source={require('../../Asset/right.png')}
                        style={estilos.Container_Perfil_PUN}
                    />
                </View>
            </View>

        </ScrollView>
    )
}