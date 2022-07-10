import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import Specialities from '../Pages/Specialities';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';

export const Doctors = ({ navigation, route }) => {
    
    const { speciality, user } = route.params

    console.log("USER LLEGO A DOCTORDT: ", user);
    console.log("SPECIALITY LLEGO A DOCTORDT: ", speciality);

    const [data, setData] = useState(false);

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
                initialData = initialData.filter(item => item.speciality === speciality.id);
                setData(initialData);
            });
    }, []);


    const cualquiera = (item) => {
        navigation.navigate('Profile', { dataDoctor: item, user: user, speciality: speciality });
    }

    return (
        <>
            <View >
                <Text
                    style={{ fontSize: 35, fontWeight: 'bold', alignSelf: 'center', color: '#08007C', marginBottom: 20, }}
                >{speciality.name}</Text>
                <View
                    style={{
                        backgroundColor: '#08007C',
                        height: '100%',
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
                                        borderRadius: 10,
                                        marginHorizontal: 10,
                                        marginVertical: 10,
                                        backgroundColor: '#00B9E4',
                                        borderRadius: 20,
                                        width: 300,
                                    }}>
                                    <Image
                                        id={item.name}
                                        source={{ uri: item.image }}
                                        style={{ resizeMode: 'cover', width: 120, height: 100, alignSelf: 'center', margin: 10, borderRadius: 20, justifyContent: 'center' }}
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
