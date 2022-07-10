import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        height: '100%',
    },

    Title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#000000",
        fontFamily: 'poppins',
        textAlign: "center",
    },

    Caption: {
        textAlign: 'center',
        fontFamily: 'poppins',
        fontSize: 18,
        marginTop: 5,
        color: '#000000',
    },

    Logo: {
        maxWidth: 500,
        maxHeight: 500,
        quality: 0.5,
    },

    Button: {
        marginTop: 20,
        width: 250,
    },

});

export default estilos;