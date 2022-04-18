import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    main: {
        
        bottom: 25,
        
        elevation: 0,
        backgroundColor: 'blue',
        borderRadius: 15,
        height: 90,
        width: 90,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,

     
    },

    container: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderRadius: 10,
        backgroundColor: '#fff',
        maxHeight: 200,
        maxWidth: 400,
        
     
    
        
    },
    containerSub: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        borderRadius: 10,
 
    },

    img: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    }

})

export default estilos;