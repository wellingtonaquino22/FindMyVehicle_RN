import React, {useState} from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-elements';
import {StatusBar} from 'expo-status-bar';
import {useFonts} from "expo-font";
import {Poppins_700Bold} from "@expo-google-fonts/poppins";
import {SourceSansPro_700Bold, SourceSansPro_300Light} from "@expo-google-fonts/source-sans-pro";
import {Ionicons} from '@expo/vector-icons'


export default function Login({navigation}) {

    const [font] = useFonts({
        Poppins_700Bold, SourceSansPro_700Bold, SourceSansPro_300Light
    })

    const [user, setUser] = useState()
    const [passwd, setPasswd] = useState()

    const userLogin = () => {
        if(user && passwd != '' && user === 'admin' && passwd === 'admin') {
            navigation.navigate('Home')
        } else {
            Alert.alert('Permissão negada!', 'E-mail ou senha inválidos. Verique e tente novamente.')
        }
    }
    const [hidePasswd, setHidePasswd] = useState(true)

    if (!font) {
        return null
    }

    return (
        <>
            <ScrollView style={styles.body}>
                <StatusBar style='auto'/>
                <View style={styles.loginArea}>
                    <View style={[styles.loginSpaceBetween, {alignItems: 'flex-start'}]}>
                        <TouchableOpacity>
                            <Ionicons
                                name={'arrow-back'}
                                color={'#B0B0B0'}
                                size={30}
                                onPress={() => navigation.goBack()}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.loginSpaceBetween, {alignItems: 'center'}]}>
                        <Text style={styles.pageTitle}>Entrar</Text>
                    </View>
                    <View style={styles.loginSpaceBetween}>
                        <Text style={styles.pageTitle}></Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.container2}>
                        <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
                        <Text style={styles.title}>Find My Vehicle</Text>
                    </View>

                    <View style={styles.container3}>
                        <Text style={styles.email}>E-mail</Text>
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.input}
                                placeholder="seuemail@mail.com"
                                placeholderTextColor={'#B0B0B0'}
                                onChangeText={(txt) => setUser(txt)}
                            />
                            <TouchableOpacity style={styles.inputIcon}>
                                <Ionicons name={'mail'} color={'#B0B0B0'} size={25}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.psswd}>Senha</Text>
                        <View style={styles.inputArea}>
                            <TextInput
                                style={styles.input}
                                placeholder="********************"
                                placeholderTextColor={'#B0B0B0'}
                                textContentType={"password"}
                                onChangeText={(txt) => setPasswd(txt)}
                                secureTextEntry={hidePasswd}
                            />
                            <TouchableOpacity style={styles.inputIcon} onPress={() => setHidePasswd(!hidePasswd)}>
                                {hidePasswd ?
                                    <Ionicons name={'eye'} color={'#B0B0B0'} size={25}/>
                                    :
                                    <Ionicons name={'eye-off'} color={'#B0B0B0'} size={25}/>
                                }
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Button
                                buttonStyle={styles.button}
                                title='Continuar'
                                titleStyle={styles.buttonTitle}
                                onPress={userLogin}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.body}>
                <Text style={styles.appVersion}>v1.0</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFF'
    },
    logo: {
        marginTop: 80,
        width: 104,
        height: 104,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 50
    },
    container2: {
        marginBottom: 50,
        alignItems: 'center'
    },
    container3: {
        marginTop: 20,
    },
    loginSpaceBetween: {
        width: '25%',
        alignItems: 'auto'
    },
    loginArea: {
        paddingHorizontal: 20,
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pageTitle: {
        color: '#192959',
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 25,
    },
    backIcon: {
        justifyContent: 'flex-start'
    },
    title: {
        marginTop: 10,
        color: '#192959',
        fontFamily: 'Poppins_700Bold',
        fontSize: 25,
    },
    email: {
        color: '#192959',
        fontFamily: 'SourceSansPro_300Light',
        fontSize: 20,
    },
    psswd: {
        color: '#192959',
        fontFamily: 'SourceSansPro_300Light',
        fontSize: 20,
        marginTop: 23
    },
    inputArea: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        borderRadius: 50,
        height: 48,
        paddingHorizontal: 17,
        marginVertical: 10,
    },
    input: {
        height: 48,
        color: '#777',
        fontSize: 20,
        width: '100%',
    },
    inputIcon: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#192959',
        fontSize: 20,
        height: 48,
        borderRadius: 50,
        marginTop: 74,
    },
    buttonTitle: {
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 25,
        color: '#fff'
    },
    appVersion: {
        color: '#192959',
        alignSelf: 'center',
        marginBottom: 10
    }
});
