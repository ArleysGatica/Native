import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = ({route, navigation}) => {

    const { dataDoctor, user, speciality } = route.params;

    console.log("LOS DATOS LLEGARON A PROFILE: ", "DOCTOR", dataDoctor, "USER", user, "SPECIALITY", speciality);

    const cualquiera = () => {
        navigation.navigate('Meetings', { dataDoctor: dataDoctor, user: user, speciality: speciality });
    }
    
    return (
        <View style={styles.card}>
                        <View >
                <View style={styles.cardHeader}>
                                <Image source={{ uri: dataDoctor.image }} style={styles.cardHeaderLeftImage} />
                                <View style={styles.cardHeaderLeft}>
                                    <Text style={styles.cardHeaderLeftText}>{(dataDoctor.firstName).toUpperCase()}</Text>
                        <Text style={styles.cardHeaderLeftText}> {(dataDoctor.lastName).toUpperCase()}</Text>
                                </View>
                                <View style={styles.cardHeaderRight}>
                                    <Text style={styles.cardHeaderRightText}>{dataDoctor.Rating}</Text>
                                    <Image source={require('../../Asset/star.png')} style={styles.cardHeaderRightImage} />
                                </View>
                            </View>
                            <View style={styles.cardBody}>
                                <View style={styles.cardBodyLeft}>
                                    <Text style={styles.cardBodyLeftText}>{speciality.name}</Text>
                                </View>

                            </View>
                            <View style={styles.cardFooter}>

                                <View style={styles.cardFooterRight}>
                                    <TouchableOpacity style={styles.cardFooterRightButton} onPress={() => cualquiera()}>
                                        <Text style={styles.cardFooterRightButtonText}>
                                            Reservation
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View >
                                <Text style={styles.cardFooterRightText}>
                                    {dataDoctor.biography}
                                </Text>
                            </View>
                        </View>
                    
        </View>
    )

}


const styles = StyleSheet.create({
    card: {
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    cardFooterRightText: {
        marginTop: 30,
        fontSize: 20,
        fontWeight: '400'

    },
    cardHeader: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
    },
    cardHeaderLeftImage: {
        width: 120,
        height: 120,
        borderRadius: 15,
        marginRight: 10,
        marginBottom: 20,
    },
    cardHeaderLeftText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardHeaderRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardHeaderRightText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 10,
    },
    cardHeaderRightImage: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 10,
        marginTop: 10,
    },
    cardBodyLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardBodyLeftText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginRight: 10,
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
    },

    cardFooterRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardFooterRightButton: {
        backgroundColor: '#00a8ff',
        borderRadius: 10,
        padding: 10,
        marginLeft: -10,
        //marginRight: 10,
    },
    cardFooterRightButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default Profile;
