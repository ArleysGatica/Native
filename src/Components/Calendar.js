import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Calendario = () => {

    const [selected, setSelected] = useState('');

    const onDayPress = (day) => {
        setSelected(day.dateString);
    }

    const [clickEvent, setClickEvent] = useState('');

    useEffect(() => {
        setClickEvent('');
    }, [selected]);

    const onPressCLICK = () => {
        setClickEvent('Clicked');
    }

    const [clickEvent2, setClickEvent2] = useState('');

    useEffect(() => {
        setClickEvent2('');
    }, [selected]);

    const onPressCLICK2 = () => {
        setClickEvent2('Clicked');
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
                            onPress={onPressCLICK2}>
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
                </View>
            </View>
            <View>
                <View>
                    {
                        clickEvent === 'Clicked' ?
                            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                                {` Selected day: ${selected}`}
                            </Text>
                            :
                            <Text style={{ fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>
                                {`Nothing selected`}
                            </Text>
                    }
                </View>
            </View>
        </View>
    );
}

export default Calendario;