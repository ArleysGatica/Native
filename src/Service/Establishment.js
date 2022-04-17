import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const Establishments = () => {

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

}

export default Establishments;
            



