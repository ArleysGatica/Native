import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';

const DoctorView = (props) => {

    const {/* navigation, route: { params },*/ data } = props;
    
    console.log(data);

    return (
        <>
            <View>
                <Text
                    style={{ fontSize: 35, fontWeight: 'bold', alignSelf: 'center', color: 'black' }}
                >holis</Text>
                <View
                    style={{
                        backgroundColor: '#08007C',
                        maxwidth: '100%',
                        maxHeight: '100%',
                        borderRadius: 20,
                    }}>
                    <FlatList
                        numColumns={2}
                        data={Date}
                        renderItem={({ item }) => (
                            <ScrollView
                                style={{
                                    marginHorizontal: 10,
                                    marginVertical: 10,
                                    backgroundColor: '#00B9E4',
                                    alignSelf: 'center',
                                    borderRadius: 20,
                                }}>
                                <Text
                                    style={{ fontSize: 35, fontWeight: 'bold', alignSelf: 'center', color: 'black' }}>
                                    {item.name}
                                </Text>
                            </ScrollView>
                        )}
                    />
                </View>
            </View>
        </>
    )
}

export default DoctorView;

