import React from 'react';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from './HomeStyle';
import SignOut from '../../Hooks/SingOut';
import { HomeCard } from './HomeCard';

const Home = ({ route, navigation }) => {

    const { user } = route.params;

    let nombreCorto = user.firstName.split(' ');

    const logOut = () => {
         navigation.navigate('Welcome');
    }


    return (
        <ScrollView>
            <View style={estilos.Header}>
                <Image
                    source={{ uri: user.image }}
                    style={estilos.sidebar}
                />
                <Text style={estilos.name}> HOLA, {`${nombreCorto[0]}`.toUpperCase()}</Text>
                <TouchableOpacity onPress={()=> logOut()}>
                    <Image source={require('../../Asset/cerrar-sesion.png')} style={{ marginLeft: 45, width: 25, height: 25 }} />
                </TouchableOpacity>
                {/*<SignOut/>*/}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Agenda', { user: user })}>
                <View style={estilos.Container_ESPECIALIDAD}>
                    <Image
                        source={require('../../Asset/meetings.png')}
                        style={{
                            margin: 10,
                            borderRadius: 10,
                            width: 60,
                            height: 60,
                            resizeMode: 'cover',
                        }}
                    />
                    <View style={estilos.Container_ESPECIALIDAD_inside}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: 'white',
                            margin: 10,
                        }}>
                            MIS CITAS
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={estilos.Container_Search}>
                <View style={estilos.Container_Search_inside}>
                    <Text style={estilos.text}>
                        ENCUENTRA UN MÉDICO
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
        
            <TouchableOpacity onPress={() => navigation.navigate('ServiceSpecialities', {user: user})}>
                <View style={estilos.Container_ESPECIALIDAD}>
                    <View style={estilos.Container_ESPECIALIDAD_inside}>
                        <Text style={estilos.text}>
                        ESPECIALIDADES
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
                <HomeCard navigation= {navigation} user= {user} />
            </View>
        </ScrollView>
    );
};
export default Home;
