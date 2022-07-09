import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({



    Header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sidebar: {
        margin: 10,
        borderRadius: 10,
        width: 60,
        height: 60,
        resizeMode: 'cover',
    },

    base: {
        flex: 1,
        flexDirection: 'column',
    },

    Title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        alignSelf: 'center',
    },

    name: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },

    Container_Search: {
        flex: 4,
        maxWidth: 360,
        maxHeight: 200,
        backgroundColor: '#00B9E4',
        marginTop: 20,
        borderRadius: 25,
        alignSelf: 'center',
        elevation: 15,
    },

    Container_Search_inside: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },

    Container_items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 20,
    },

    search: {
        maxWidth: 35,
        maxHeight: 35,
        right: 50,
        alignSelf: 'center'
    },

    input: {
        width: 300,
        height: 50,
        borderColor: 'white',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        color: 'white',
        backgroundColor: '#dcdcdc',
        textAlign: 'center',
    },


    Container_ESPECIALIDAD: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 25,
        backgroundColor: '#00B9E4', 
        elevation: 15,   
    },

    Container_ESPECIALIDAD_inside: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },

    Container_IMG: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'cover',
    },

    ESPECIALIDAD: {
        borderRadius: 15,
        maxWidth: 90,
        maxHeight: 110,
    },

    Container_STABLE: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 25,
        backgroundColor: '#00B9E4',
        elevation: 15,
    },

    Container_STABLE_inside: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },

    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        margin: 10, 
    },

    Container_IMGSTABLE: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        resizeMode: 'cover',
    },

    STABLE: {
        borderRadius: 15,
        maxWidth: 112,
        maxHeight: 110,
    },

 

 });

export default estilos;