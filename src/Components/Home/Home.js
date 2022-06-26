import React from 'react';
import { Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from './HomeStyle';
import { HomeCard } from './HomeCard';
import Doctor from '../../Service/Doctor';
import ServiceSpecialities from '../../Service/Speciality';

const Home = ({ route, navigation }) => {

  //  console.log("user test ..... ", route.params);
    const { user } = route.params;
    console.log("user test ..... ", user.email);


    // const [DataDOCTOR] = Doctor();
    // const [DataSpecialities] = ServiceSpecialities();

    return (
        <ScrollView>
            <View style={estilos.Header}>
                <Image
                    source={require('../../Asset/sidebar.png')}
                    style={estilos.sidebar}
                />
                <Image
                    source={require('../../Asset/user.png')}
                    style={estilos.sidebar}
                />
            </View>
            <View style={estilos.base}>
                <Text style={estilos.Title}>Hello, Good Afternoon</Text>
                <Text style={estilos.SubTitle}> ...</Text>
                <Text style={estilos.name}>Auron_Play !!</Text>
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
               
                {/* {DataSpecialities.slice(0, 1)?.map((item) => (
                    <View style={estilos.Container_Category_items}>
                        <View style={estilos.Container_Category_Item}>
                            <Image
                                source={require('../../Asset/Logo.png')}
                                style={estilos.Container_Category_items_img}
                            />
                            <Text style={estilos.Container_Category_items_text}>
                                {item.name}
                            </Text>
                        </View>
                    </View>
                ))} */}
            </TouchableOpacity>
            <View>
         
            </View>
        </ScrollView>
    );
};
export default Home;
