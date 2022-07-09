import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Doctor from '../Service/Doctor';

const Calendario = (props) => {

    const [data] = Doctor()

    console.log("🚀 ~ file: ", data)

    const [selected, setSelected] = useState('');
    const [clickEvent, setClickEvent] = useState('');
    const [cancelar, setCancelar] = useState('');

    const onDayPress = (day) => {
        setSelected(day.dateString);
    }

    useEffect(() => {
        setClickEvent('');
    }, [selected]);

    const onPressCLICK = () => {
        setClickEvent('Clicked');
    }

    useEffect(() => {
        setCancelar('');
    }, [selected]);

    const onPressCANCEL = () => {
        setCancelar('Cancelado');
        clickEvent === 'Clicked' ?
            alert('Cita cancelada') :
            alert('No hay citas para cancelar');
    }



    return (
        <View>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    [selected]: { selected: true, marked: true },
                }}
            />
            <View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#000' }}
                            onPress={onPressCANCEL}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, borderRadius: 10 }}
                            onPress={onPressCLICK}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
                                Agendar
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {
                            clickEvent === 'Clicked' ?
                                <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                                    {` Selected day: ${selected}`}
                                </Text>
                                :
                                cancelar === 'Cancelado' ? 
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                                        {` Cita cancelada`}
                                    </Text>
                                    :
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                                        {` `}
                                    </Text>
                        }
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Calendario;