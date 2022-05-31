import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const Specialities = (props) => {
    console.log(props);
    

    return (
        <View>
            <Text
                style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center' }}
            >Specialities</Text>
            <ScrollView
                style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: 'blue', alignSelf: 'center', borderRadius: 20, marginTop: 10 }}>
                <Image
                    source={require('../Asset/user.png')}
                    style={{ width: 100, height: 100, margin: 10, alignSelf: 'center' }}
                />
                <Text
                    style={{ fontSize: 20, margin: 10, fontWeight: 'bold' }}
                >Dermatology
                </Text>
                <Text
                    style={{ fontSize: 20, alignSelf: 'center', margin: 10 }}
                >2 Doctores</Text>
            </ScrollView>
        </View>
    )
}

export default Specialities;