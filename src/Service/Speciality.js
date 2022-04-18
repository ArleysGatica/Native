import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const Specialities = () => {

    const[Data, setData] = useState([]);
     
    useEffect(() => {
        firestore()
            .collection('Specialities')
            .get()
            .then(querySnapshot => {
                const data = [];
                querySnapshot.forEach(doc => {
                    data.push(doc.data());
                });
                setData(data);
            });
    }, []);      

}

export default Specialities;
