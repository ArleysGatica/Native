import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Firebase = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        firestore()
            
            .collection('/Specialities')
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
                <Text>Conexion con Firebase...</Text>
                {data.map(item => (
                    <Text key={item.id}>{item.name}</Text>
                ))}
                
                
              </ScrollView>
        );
    
}

export default Firebase;