import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const Meetings = () => {
    
    const [Data, setData] = useState([]);
        
    useEffect(() => {
        firestore()
            .collection('Meetings')
            .get()
            .then(querySnapshot => {
                const data = [];
                querySnapshot.forEach(doc => {
                    data.push(doc.data());
                });
                setData(data);
            });
    }, []);
    
    return [Data]
}

export default Meetings;
    
