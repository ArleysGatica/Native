import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export const Meetings = ({route, navigation}) => {

    const { dataDoctor, user, speciality } = route.params;

    console.log("LOS DATOS LLEGARON A MEETINGS: ", dataDoctor, user, speciality);

    const [direccion, setDireccion] = useState();
    const [fecha, setFecha] = useState();
    const [hora, setHora] = useState();
    const [tipo, setTipo] = useState();

    const solicitarCita = () => {
        try {
            firestore().collection('Meetings').add({
                date: `${fecha}T${hora}:00`,
                direction: direccion,
                doctor: dataDoctor.id,
                patient: user.id,
                speciality: speciality.id,
                state: 2,
                time: `${fecha}T${hora}:00`,
                type: parseInt(tipo) 
            })
        } catch (error) {
            console.log(error);
        } finally {
            setDireccion("");
            setFecha("");
            setHora("");
            setTipo("");
            alert("¡Solicitud Enviada!")
            navigation.navigate("Home", {user: user})
        }
    }

    return (
        <View>
            <Text style={styles.tittle}>REGISTRO DE CITA</Text>
            <Text style= {styles.text} >DIRECCIÓN</Text>
            <TextInput
                placeholder='dirección...'
                value={direccion}
                onChangeText={(text) => setDireccion(text)}
                style={styles.input}
            />
            <Text style={styles.text}>FECHA</Text>
            <TextInput
                placeholder='2022-07-09'
                value={fecha}
                onChangeText={(text) => setFecha(text)}
                style={styles.input}
            />
            <Text style={styles.text}>HORA</Text>
            <TextInput
                placeholder='13:00'
                value={hora}
                onChangeText={(text) => setHora(text)}
                style={styles.input}
            />
            <Text style={styles.text}>TIPO DE CITA</Text>
            <TextInput
                placeholder='local o domicilio'
                value={tipo}
                onChangeText={(text) => setTipo(text)}
                style={styles.input}
            />
            <TouchableOpacity
                style={{
                    width: '60%',
                    height: '8%',
                    alignSelf: 'center',
                    backgroundColor: '#2196F3',
                    borderRadius: 10,
                    marginTop: 20,
                    padding: 10,
                    marginHorizontal: 15 }}
                onPress={() => solicitarCita()}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>SOLICITAR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Meetings;

const styles = StyleSheet.create ({
    input: {
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        marginHorizontal: 20
    },
    text: {
        marginBottom: 10,
        padding: 10,
        marginHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 15,

    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        marginTop: 15,
        marginHorizontal: 15,
        padding: 10,
        textAlign: 'center',
        color: 'black'
    }
})