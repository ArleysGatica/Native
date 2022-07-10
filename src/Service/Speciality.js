import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import Specialities from '../Pages/Specialities';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';

const ServiceSpecialities = ({ navigation, route }) => {

    const { user } = route.params

    console.log("USER LLEGO A ESPECIALITY: ", user);

    const [DataSpecialities, setData] = useState([]);

    useEffect(() => {
        firestore()
            .collection('Specialities')
            .get()
            .then(querySnapshot => {
                const data = [];
                querySnapshot.forEach(doc => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                setData(data);
            });
    }, []);

    const cualquiera = (item) => {
        navigation.navigate('Doctors', {speciality: item, user: user});
    }

    return (
        <>
            <View>
                <View
                    style={{
                        backgroundColor: '#08007C',
                        justifyContent: 'center',
                        alignItems: 'center',
                    
                    }}>
                    
                    <FlatList
                        numColumns={2}
                        data={DataSpecialities}
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
                                        width: 175,
                                    }}>
                                    <Image
                                        id={item.name}
                                        source={{ uri: item.image }}
                                        resizeMode='contain'
                                        style={{ resizeMode: 'cover', width: 100, height: 100, alignSelf: 'center', margin: 10, borderRadius: 20,  justifyContent: 'center' }}
                                    />
                                    <Text
                                        style={{ fontSize: 20, margin: 10, fontWeight: 'bold', alignSelf: 'center' }}
                                    >{item.name}
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


export default ServiceSpecialities;
