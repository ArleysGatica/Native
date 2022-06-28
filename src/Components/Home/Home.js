import React from 'react';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from './HomeStyle';
import { HomeCard } from './HomeCard';

const Home = ({ route, navigation }) => {

    const { user } = route.params;
   // console.log(`Test-IMG...: ${user.image}`);

    return (    
        <ScrollView>
            <View style={estilos.Header}>
                <Image
                    //source={require('../../Asset/sidebar.png')}
                   source={{ uri: user.image }}
                    style={estilos.sidebar}
                />
                <Image
                  source={require('../../Asset/sidebar.png')}
                    resizeMode='cover'
                    style={estilos.sidebar}
                />
            </View>
            <View style={estilos.base}>
                <Text style={estilos.Title}>Hello, Good Afternoon</Text>
                <Text style={estilos.SubTitle}> ...</Text>
                <Text style={estilos.name}>{`${user.firstName} ${user.lastName}`}</Text>
            </View>
            <View style={estilos.Container_Search}>
                <View style={estilos.Container_Search_inside}>
                    <Text style={estilos.text}>
                        Find The Doctor Nearest To Your Location
                    </Text>
                    <View style={estilos.Container_items}>
                        <TextInput style={estilos.input} placeholder="Search" />
                        <Image
                            source={require('../../Asset/lupa.png')}
                            style={estilos.search}
                        />
                    </View>
                </View>
            </View>
            <View style={estilos.Container_Category}>
                <Text style={estilos.Container_Category_Info_Cat}>Category</Text>
                <Text style={estilos.Container_Category_Info_sell}>See All</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ServiceSpecialities')}>
           
                    <View style={estilos.Container_Category_items}>
                        <View style={estilos.Container_Category_Item}>
                            <Image
                                source={require('../../Asset/Logo.png')}
                                style={estilos.Container_Category_items_img}
                            />
                            <Text style={estilos.Container_Category_items_text}>
                             Holis
                            </Text>
                        </View>
                    </View>
 
            </TouchableOpacity>
            <View>
         
            </View>
        </ScrollView>
    );
};
export default Home;
