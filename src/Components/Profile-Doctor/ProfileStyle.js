import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

    Container: {
       flex: 1, 
    },
    
    Box: {
        backgroundColor: '#2471A3',
        height: 80
    },
    ContainnerProfile: {
        flex: 1,
        
    },

    Profile: {
        backgroundColor: 'blue',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ContainerJoin: {
        flexDirection: 'row',
        maxWidth: 85,
        maxHeight: 85,
    },

});

export default estilos;