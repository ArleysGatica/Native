import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import SingLogin from '../../Service/SingLogin';

const Login = ({ navigation, route }) => {


    const [UserData, setUser] = useState({}); //Aqui se guarda el pass and email
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        firestore()
            .collection('Users')
            .get()
            .then(querySnapshot => {
                const data = [];
                querySnapshot.forEach(doc => {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                setData(data);
            });
    }
        , []);

    const signIn = async () => {
        setLoading(true);
        setSuccess(false);
        setError('');
        setUser(null);
        const user = data?.find(user => user.email === email && user.password === password);
        if (user) {
            console.log("User found", user);
            setSuccess(true);
            setLoading(false);
            setEmail("");
            setPassword("");
            setUser(user);
        } else {
            setError('❌Email or password is incorrect❌');
            setLoading(false);
        }
    }

    useEffect(() => {
        if (success) {
            if (UserData.type === 1) {
                navigation.navigate('Home', { user: UserData });
            } else {
                navigation.navigate('AgendaMedico', { user: UserData });
            }
        }
    }, [success]);
  
    return (
        < ScrollView style={{ backgroundColor: '#2196F3', height: '100%',}} >
            <View style={{  flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 120 }}>
                 <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', marginBottom: 25}} > MR. DOCTOR</Text>   
                <TextInput
                    style={{
                        width: '80%',
                        height: '25%',
                        backgroundColor: '#dcdcdc',
                        borderRadius: 10,
                        marginBottom: 15,
                        padding: 15,
                        marginHorizontal: 20,
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={{
                        width: '80%',
                        height: '25%',
                        backgroundColor: '#dcdcdc',
                        borderRadius: 10,
                        marginBottom: 15,
                        padding: 15,
                        marginHorizontal: 20,
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                //secureTextEntry={true}
                />
                {loading ? <Text>Loading...</Text> : null}
                {error ? <Text>{error}</Text> : null}
                <TouchableOpacity
                    style={{
                        width: '60%',
                        height: '25%',
                        alignSelf: 'center',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 10,
                        marginTop: 20,
                        padding: 10,
                        marginHorizontal: 15 }}
                    onPress={() => signIn()}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2196F3', textAlign: 'center' }}>INICIAR SESIÓN</Text>
                </TouchableOpacity>
                {/*<Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Or</Text>
                <SingLogin />*/}
            </View>
        </ScrollView >
    );
}
export default Login;