import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Doctor from '../../Service/Doctor';

const Profile = () => {

    const [Data] = Doctor();
    console.log("🚀", Data)


    return (
        <View style={styles.card}>
            {
                Data.slice(0, 1).map((item, index) => {
                    return (
                        <View key={index}>
                            <View style={styles.cardHeader}>
                                <View style={styles.cardHeaderLeft}>
                                    <Image source={{ uri: item.image }} style={styles.cardHeaderLeftImage} />

                                    <Text style={styles.cardHeaderLeftText}>{item.firstName}</Text>
                                </View>
                                <View style={styles.cardHeaderRight}>
                                    <Text style={styles.cardHeaderRightText}>{item.Rating}</Text>
                                    <Image source={require('../../Asset/Logo.png')} style={styles.cardHeaderRightImage} />
                                </View>
                            </View>
                            <View style={styles.cardBody}>
                                <View style={styles.cardBodyLeft}>
                                    <Text style={styles.cardBodyLeftText}>{item.speciality}</Text>
                                </View>

                            </View>
                            <View style={styles.cardFooter}>

                                <View style={styles.cardFooterRight}>
                                    <TouchableOpacity style={styles.cardFooterRightButton}>
                                        <Text style={styles.cardFooterRightButtonText}>
                                            Reservation
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View >
                                <Text style={styles.cardFooterRightText}>
                                    {item.biography}
                                </Text>
                            </View>
                        </View>
                    )
                }
                )
            }

        </View>
    )

}


const styles = StyleSheet.create({
    card: {
        height: '40%',
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
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardHeaderLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardHeaderLeftImage: {
        width: 85,
        height: 85,
        borderRadius: 15,
        marginRight: 10,
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
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    cardHeaderRightImage: {
        width: 20,
        height: 20,
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
        fontSize: 18,
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
        marginRight: 10,
    },
    cardFooterRightButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default Profile;
