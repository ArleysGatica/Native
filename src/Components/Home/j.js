import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';


const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const ReservationAgenda = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }
                }
                console.log('panas');
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };

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
                selected={'2017-05-16'}
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

