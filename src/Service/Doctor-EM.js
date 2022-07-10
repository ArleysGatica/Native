import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import Specialities from '../Pages/Specialities';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';

export const DoctorsEM = ({ navigation, route }) => {

    const { establishment, user } = route.params

    console.log("USER DOCTOR EM: ", user );

    const [data, setData] = useState(false);
    const [especialidades, setEspecialidades ] = useState([]);

    useEffect(() => {
        firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                let initialData = [];
                querySnapshot.forEach(doc => {
                    initialData.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                initialData = initialData.filter(item => item.type === 2);
                initialData = initialData.filter(item => item.establishment === establishment.id);
                setData(initialData);
            });
        
        firestore()
            .collection('Specialities')
            .get()
            .then(querySnapshot => {
                let dataEsp = [];
                querySnapshot.forEach(doc => {
                    dataEsp.push({
                        id: doc.id,
                        ...doc.data(),
                    })
                });
                setEspecialidades(dataEsp);
            });
        
    }, []);


    const cualquiera = (item) => {
        let especialidad = especialidades.find(esp => esp.id === item.speciality);
        navigation.navigate('Profile', { dataDoctor: item, user: user, speciality: especialidad });
    }

    return (
        <>
            <View>
                <Text
                    style={{ fontSize: 35, fontWeight: 'bold', alignSelf: 'center', color: 'black' }}
                >{establishment.name}</Text>
                <View
                    style={{
                        backgroundColor: '#08007C',

                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>

                    <FlatList
                        numColumns={1}
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity key={item.id} onPress={() => cualquiera(item)} >
                                <ScrollView
                                    style={{
                                        paddingHorizontal: 10,
                                        paddingVertical: 10,
                                        borderRadius: 10,
                                        marginHorizontal: 10,
                                        marginVertical: 10,
                                        backgroundColor: '#00B9E4',
                                        borderRadius: 20,
                                        alignSelf: 'center',
                                        elevation: 15,
                                        margin: 10,
                                        resizeMode: 'cover'
                                    }}>
                                    <Image
                                        id={item.name}
                                        source={{ uri: item.image }}
                                        resizeMode='contain'
                                        style={{ width: 100, height: 100, margin: 10, borderRadius: 20, justifyContent: 'center' }}
                                    />
                                    <Text
                                        style={{ fontSize: 20, margin: 10, fontWeight: 'bold', alignSelf: 'center' }}
                                    >{item.firstName + " " + item.lastName}
                                    </Text>
                                </ScrollView>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </>
    )
}
