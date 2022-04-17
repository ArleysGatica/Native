import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const Specialities = () => {

    cost[GetState, setGetState] = useState([]);
     
    useEffect(() => {
        firestore()
            .collection('Specialities')
            .get()
            .then(querySnapshot => {
                const data = [];
                querySnapshot.forEach(doc => {
                    data.push(doc.data());
                });
                setGetState(data);
            });
    }, []);      

}

export default Specialities;
