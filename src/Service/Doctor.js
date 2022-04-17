import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import Specialities from './Speciality';
import Establishments from './Establishment';

const Doctor = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        firestore()
            .collection('Doctor')
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


}
export default Doctor;