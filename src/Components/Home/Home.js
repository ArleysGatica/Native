import React from 'react';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from './HomeStyle';
import SignOut from '../../Hooks/SingOut';
import { HomeCard } from './HomeCard';

const Home = ({ route, navigation }) => {

    const { user } = route.params;
    // console.log(`Test-IMG...: ${user.image}`);

    return (
        <ScrollView>
            <View style={estilos.Header}>
                <Image
                    source={{ uri: user.image }}
                    style={estilos.sidebar}
                />
                <SignOut/>
            </View>
            <View style={estilos.base}>
                <Text style={estilos.name}>{`Hello, ${user.firstName} ${user.lastName}`}</Text>
            </View>
            <View style={estilos.Container_Search}>
                <View style={estilos.Container_Search_inside}>
                    <Text style={estilos.text}>
                        Find The Doctor Nearest To Your Location
                    </Text>
                    <View style={estilos.Container_items}>
                        <TextInput style={estilos.input} placeholder="Search" />
                        <Image
                            source={require('../../Asset/lupa.png')}
                            style={estilos.search}
                        />
                    </View>
                </View>
            </View>
        
            <TouchableOpacity onPress={() => navigation.navigate('ServiceSpecialities')}>
                <View style={estilos.Container_ESPECIALIDAD}>
                    <View style={estilos.Container_ESPECIALIDAD_inside}>
                        <Text style={estilos.text}>
                        Especialidades
                        </Text>
                        <View style={estilos.Container_IMG}>
                            <Image
                                source={require('../../Asset/doctorenmedicina.png')}
                                style={estilos.ESPECIALIDAD}
                            />
                        </View>
                    </View>
                </View>
           
            </TouchableOpacity>
            <View>
                <HomeCard />
            </View>
        </ScrollView>
    );
};
export default Home;
