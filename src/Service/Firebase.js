import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Firebase = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        firestore()
            .collection('Establishments')
            .get()
            .then(querySnapshot => {
                const data = [];
                querySnapshot.forEach(doc => {
                    data.push(doc.data());
                });
                setData(data);
            });
    }, []);


    return (
        <ScrollView>
            <Text>Conexion con Firebase</Text>
            {
                data && data !== [] && data.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>{item.name}</Text>
                            <Text>{item.location}</Text>
                            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                        </View>
                    )
                })
            }
        </ScrollView>
    );

}

export default Firebase;