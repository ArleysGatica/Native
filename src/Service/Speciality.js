import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import Specialities from '../Pages/Specialities';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';

const ServiceSpecialities = ({ navigation }) => {

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
        navigation.navigate('Doctor', { Special: item });
    }

    return (
        <>
            <View>
                <Text
                    style={{ fontSize: 35, fontWeight: 'bold', alignSelf: 'center', color: 'black' }}
                >Specialities</Text>
                <View
                    style={{
                        backgroundColor: '#08007C',
                        maxwidth: '100%',
                        maxHeight: '100%',
                        borderRadius: 20,
                    }}>
                    <FlatList
                        numColumns={2}
                        data={DataSpecialities}
                        renderItem={({ item }) => (
                            <TouchableOpacity key={item.id} onPress={() => cualquiera(item)} >
                                <ScrollView
                                    style={{
                                        marginHorizontal: 10,
                                        marginVertical: 10,
                                        backgroundColor: '#00B9E4',
                                        alignSelf: 'center',
                                        borderRadius: 20,
                                    }}>
                                    <Image
                                        id={item.name}
                                        source={{ uri: item.image }}
                                        resizeMode='contain'
                                        style={{ width: 100, height: 100, margin: 10, alignSelf: 'center' }}
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
