import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const Login = () => {
    const [UserData, setUser] = useState([]);
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
        const user = data.find(user => user.email === email && user.password === password);
        if (user) {
            setSuccess(true);
            setLoading(false);
        } else {
            setError('Email or password is incorrect');
            setLoading(false);
        }
        setUser(user);
    }

    const valideEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(String(password));
    }

    const valideLogin = () => {
        if (email === '') {
            setError('Email is required');
            return false;
        }
        if (!valideEmail(email)) {
            setError('Invalid Email');
            return false;
        }
        if (password === '') {
            setError('Password is required');
            return false;
        }
        if (!validatePassword(password)) {
            setError('Invalid Password');
            return false;
        }
        return true;
    }

    return (

        < ScrollView >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../Asset/Logo.png')} style={{ width: 100, height: 100 }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Login</Text>
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
                <TouchableOpacity
                    style={{ width: 200, height: 40, backgroundColor: '#00bfff', borderRadius: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => signIn() ? signIn() : null}
                >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Login</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Or</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 5 }}>Register</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Welcome Dr{UserData.lastName}  </Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>The type is ''{UserData.type}</Text>
            </View>
        </ScrollView >
    );
}
export default Login;