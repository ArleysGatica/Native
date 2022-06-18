import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet  } from 'react-native';
import { Agenda, Card, Avatar, theme } from 'react-native-calendars';


const ReservationAgenda = () => {

    const [items, setItems] = useState({});
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const items = {};
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        for (let i = 0; i < 10; i++) {
            const time = day + i;
            const strTime = time.toString();
            const key = `${year}-${month + 1}-${strTime.length === 1 ? '0' + strTime : strTime}`;
            items[key] = [];
            for (let j = 0; j < 10; j++) {
                items[key].push({
                    name: 'event',
                    height: Math.random() * 100 % 2 === 0 ? 50 : 100,
                    time: day + i + ':' + j * 10,
                });
            }
        }
        setItems(items);
    }
        , [])
    
    console-log($`${selected}`);
    
    const onDayPress = (day) => {
        setSelected(day.dateString);
        console.log("day pressed", day);
    }

    const renderItem = (item) => {
        return (
            <View style={[styles.item, { height: item.height }]}>
                <Text>{item.time}</Text>
            </View>
        );
    }

    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!...1</Text>
            </View>
        );
    }

    const rowHasChanged = (r1, r2) => {
        return r1.name !== r2.name;
    }

    const renderEmptyData = () => {
        return (
            <View style={styles.emptyData}>
                <Text>This is empty data!...2</Text>
            </View>
        );
    }

    const headerHasChanged = (h1, h2) => {
        return h1.date !== h2.date;
    }

    return (
        <View style={styles.container}>
            <Agenda
                items={items}
                loadItemsForMonth={(month) => { console.log('trigger items loading') }}
                selected={selected}
                renderItem={renderItem}
                renderEmptyDate={renderEmptyDate}   
                rowHasChanged={rowHasChanged}
                
                renderDay={(day, item) => {
                    return (
                        <View style={styles.day}>
                            <Text>{day.dayNumber}</Text>
                        </View>
                    );
                }}
                renderEmptyData={renderEmptyData}
                headerHasChanged={headerHasChanged}
                onDayPress={onDayPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    }
});

export default ReservationAgenda;
   
