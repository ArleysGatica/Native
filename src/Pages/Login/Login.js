import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import SingLogin from '../../Service/SingLogin';

const Login = ({ navigation, prueba }) => {

    console.log('Loading'+prueba)

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
                    data.push(doc.data());
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
        } else {
            setError('❌Email or password is incorrect❌');
            setLoading(false);
        }
        setUser(user);
    }

    useEffect(() => {
        success && navigation.navigate('Home', { user: UserData });
    }, [success]);
  
    return (
        < ScrollView >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 120 }}>

                <TextInput
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                //secureTextEntry={true}
                />
                {loading ? <Text>Loading...</Text> : null}
                {error ? <Text>{error}</Text> : null}
                <TouchableOpacity
                    style={{ width: 200, height: 40, backgroundColor: '#00659C', borderRadius: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => signIn()}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white'}}>Login</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Or</Text>
                <SingLogin />
            </View>
        </ScrollView >
    );
}
export default Login;