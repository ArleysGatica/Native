import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Meetings from '../../Service/Meetings';
import moment from "moment";

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('/');
}

const getTimeToString = (time) => {
    const date = new Date(time);
    return date;
}

const timeMoment = (time) => {
    const date = moment(time).format('LLLL');
    return date;
}


const ReservationAgenda = () => {
    const [items, setItems] = useState({});

    const [Data] = Meetings();

    const meetingsMatch = Data.filter(item => {
        return item.doctor === "5bDihd9Y14dfff9X1W9tomtARLH3"
    })

    const loadItems = (day) => {
        meetingsMatch && meetingsMatch.map(item => {
            console.log(timeMoment(item.time.seconds * 1000));
        })

        /*

        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                // strTime = 2022 - 08 - 09
                if (!items[strTime]) {
                    items[strTime] = [{
                        name: 'there are no meeting',
                        height: Math.max(50, Math.floor(Math.random() * 150)),
                    }];
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };
    */
    }

    const renderItem = (item) => {
        return (
            <View >
                <Text>{item.name}</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-06-18'}
                renderItem={renderItem}
                renderEmptyDate={() => {
                    return (
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>This is empty date!</Text>
                        </View>
                    )
                }}
            />

        </View>
    );
    };
    

export default ReservationAgenda;

