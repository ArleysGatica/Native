import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Doctor = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                const data = [];
                querySnapshot.forEach(doc => {
                    data.push(doc.data());
                });
                setData(data);
            });
    }
        , []);
    return [data]
}


        
export default Doctor;