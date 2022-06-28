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

    Container_Category: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 16,
        maxWidth: 380,  
        marginTop: 25,
    },

    Container_Category_Info_Cat: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },

    Container_Category_Info_sell: {
        fontSize: 15,   
        color: 'grey',
    },

    Container_Category_items: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    Container_Category_Item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        maxWidth: 250,
        backgroundColor: '#00B9E4',
        borderRadius: 25,
    },

    Container_Category_items_img: {
        maxWidth: 50,
        maxHeight: 50,
        margin: 10,
    },

    Container_Category_items_text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        margin: 10,
    },

    Container_Perfil: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 16,
        marginTop: 10,
        maxWidth: 380,
        maxHeight: 100,
    },

    Container_Perfil_img_img: {
        maxWidth: 90,
        maxHeight: 90,
    },

    Container_Perfil_item: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 200,
    },

    Container_Perfil_info_name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },

    Container_Perfil_info_speciality: {
        fontSize: 16,
        color: 'black',
    },

    img_right: {
        alignSelf: 'center',
    },

    Container_Perfil_PUN: {
        maxWidth: 40,
        maxHeight: 40,
    }
      
 });

export default estilos;