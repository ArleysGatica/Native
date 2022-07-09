import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, ScrollView } from "react-native";
import firestore from '@react-native-firebase/firestore';
import Calendario from '../Components/Calendar';

const Doctor = () => {

    const [Data, setData] = useState([]);

    useEffect(() => {
        firestore().collection('Users').get().then(snapshot => {
            const data = snapshot.docs.map(doc => doc.data());
            setData(data);
        }
        );
    }, []);
    return Data;
}

export default Doctor;