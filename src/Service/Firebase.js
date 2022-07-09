import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Establishments from './Establishment';

const Firebase = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        firestore()
            .collection('Establishments')
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

    console.log(data);

    return (
        <Establishments data={data} />
    );

}

export default Firebase;const data = [];
                querySnapshot.forEach(doc => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                setData(data);