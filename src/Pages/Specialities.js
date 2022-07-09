/* import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Doctor from '../Service/Doctor';
import ServiceSpecialities from '../Service/Speciality';

const Specialities = () => {


    const COMBINATIONDOCTORSPECIALTIES = (dataS, DataD) => {

        const data = [];

        DataD.forEach(DOCTOR => {
            if (DOCTOR.speciality == 'Js3iWAzl8UQlS7mhLwFd') {
                data.push({
                    Email: DOCTOR.email,
                    id: DOCTOR.id
                });
            }
        });
        console.log()
    }

    return (
        <View>
            <FlatList
                numColumns={2}
                data={COMBINATIONDOCTORSPECIALTIES(dataS, DataD)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onClick(item)}>
                        <View style={{ flex: 1, flexDirection: 'row', margin: 10, backgroundColor: 'red'}}>
                            <Image source={{ uri: item.image }} style={{ width: 100, height: 100, margin: 10 }} />
                            <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
                                <Text>{item.name}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
            
    )
}

export default Specialities;
  */