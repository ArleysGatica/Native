import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { View, Text, ScrollView, Image } from 'react-native';

const Establishments = ( props ) => {

    console.log(props);

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
        {/*
        <ScrollView>
            <Text>User's</Text>
            {
                props.data.slice(0, 3).map((item, index) => {
                    return (
                        <View key={index}>
                            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
                            <Text>{item.lastName}</Text>
                           
                        </View>
                    )
                })
            }
        </ScrollView>
        */}
    );

}

export default Establishments;
            



