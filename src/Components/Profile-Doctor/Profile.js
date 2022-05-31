import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import estilos from './ProfileStyle';

const Profile = () => {
    return (
        <>
            <ScrollView style={estilos.Container}>
                <View style={estilos.ContainnerProfile}>
                <Text> DR. ARLEYS </Text>
                    <Text>Dermatologist</Text>
                    </View>
                <View>
                <Image
                        source={require('../../Asset/user.png')}
                        style={estilos.ContainerJoin}    />
                    <Text>4.5/5</Text>
                </View>
                
            </ScrollView>    
        </>
    )
}

export default Profile;