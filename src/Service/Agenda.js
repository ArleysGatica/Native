import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const Agenda = ({ route }) => {

    const { user } = route.params;

    const [dataMeetings, setDataMeetings] = useState([]);
    const [dataDoctors, setDataDoctors] = useState([]);

    const [band, setBand] = useState(false);

    useEffect(() => {

        firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                let initialData = [];
                querySnapshot.forEach(doc => {
                    initialData.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                initialData = initialData.filter(item => item.type === 2);
                setDataDoctors(initialData);
            }); 
        console.log("YA HAY DOCS");
        setBand(!band);
    }, []);

    useEffect(() => {
        firestore()
            .collection('Meetings')
            .get()
            .then(querySnapshot => {
                let data = [];
                querySnapshot.forEach(doc => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                data = data.filter(item => item.patient === user.id);
                setDataMeetings(data);
            });
        console.log("YA HAY MEETINGS");
    }, [band]);

        dataMeetings.map((item) =>
        item.doctor = dataDoctors.find(doctor => doctor.id === item.doctor)
        )
        console.log("MEETINGS ", dataMeetings);



    return (
        <View style={{ backgroundColor: '#08007C', height: '100%' }}>
            <Text styel={{backgroundColor: 'red', color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 20}} ></Text>
            <FlatList
                numColumns={1}
                data={dataMeetings}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.id}>
                        <View
                            style={{
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                marginHorizontal: 10,
                                marginVertical: 10,
                                backgroundColor: '#00B9E4',
                                borderRadius: 20,
                                width: 350,
                                height: 130,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                            }}>
                            <Image
                                source={{ uri: `${item.doctor.image}` }}
                                style={{ resizeMode: 'cover', width: 100, height: 100, margin: 10, borderRadius: 20, justifyContent: 'center' }}
                            />
                            <View>
                                <Text
                                    style={{ fontSize: 20, fontWeight: 'bold', color: 'black'}}
                                >Dr. {`${item.doctor.firstName}`}
                                </Text>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>
                                    Fecha {`${item.date}`.substring(0, 10)}{"\n"}
                                    Hora {`${item.time}`.substring(11, 16)}
                                </Text> 
                            </View>
                            
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
