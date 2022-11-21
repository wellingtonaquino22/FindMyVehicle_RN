import {View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity} from "react-native";
import {Button} from "react-native-elements"
import {StatusBar} from 'expo-status-bar';
import {useFonts} from "expo-font";
import {SourceSansPro_300Light, SourceSansPro_700Bold} from "@expo-google-fonts/source-sans-pro";
import {Poppins_700Bold} from "@expo-google-fonts/poppins";
import React, {useState} from "react";
import {Ionicons} from "@expo/vector-icons";

export default function Profile({navigation}) {

    const [font] = useFonts({
        Poppins_700Bold, SourceSansPro_700Bold, SourceSansPro_300Light
    })

    const [passwd, setPasswd] = useState('')
    const [hidePasswd, setHidePasswd] = useState(true)

    if (!font) {
        return null
    }

    return (
        <>
            <View style={styles.statusBarOverflow}>
            </View>
            <ScrollView style={styles.body}>
                <StatusBar style='auto'/>
                <View style={styles.header}>
                    <View style={[styles.spaceBetween, {alignItems: 'flex-start'}]}>
                        <TouchableOpacity>
                            <Ionicons
                                name={'arrow-back'}
                                color={'#B0B0B0'}
                                size={30}
                                onPress={() => navigation.goBack()}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.spaceBetween, {alignItems: 'center', width: '70%'}]}>
                        <Text style={styles.titlePage}>Registre-se de graça</Text>
                    </View>
                    <View style={styles.spaceBetween}>
                        <Text style={styles.pageTitle}></Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.editImgView}>
                        <TouchableOpacity>
                            <Image style={styles.imgUser} source={require('../../../assets/user.png')}/>
                            <Ionicons
                                name={'add-circle'}
                                color={'#B0B0B0'}
                                size={35}
                                style={styles.iconAdd}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.titleArea}>Seus dados</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Nome</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu primeiro nome"
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>Sobrenome</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu sobrenome"
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>E-mail</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu e-mail"
                            />
                        </View>
                        <View>
                            <Text style={styles.titleArea}>Escolha sua senha</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Digite uma senha</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="No min 6. e no max. 12"
                            />
                        </View>
                        <View>
                            <Text style={styles.label}>Confirme sua senha</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Insira novamente a sua senha"
                            />
                        </View>
                        <View style={styles.Bt}>
                            <Button
                                buttonStyle={styles.button}
                                title='Continuar'
                                titleStyle={styles.buttonTitle}
                            />
                        </View>
                    </View>
                </View>
                <Text style={styles.appVersion}>v1.0</Text>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: '#FFF'
    },
    statusBarOverflow: {
        backgroundColor: '#FFF',
        width: '100%',
        height: '5%',

        overflow: 'hidden'
    },
    spaceBetween: {
        width: '10%',
        alignItems: 'auto',
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 60,
    },
    editImgView: {
        alignItems: 'center',
    },
    imgUser: {
        width: 125,
        height: 125,
        backgroundColor: '#eee',

        borderRadius: 62.5,
        borderWidth: 1,
        borderColor: '#E7E9EC'
    },
    iconAdd: {
        position: 'absolute',

        left: 94,
        top: 92
    },
    titlePage: {
        color: '#192959',
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 30,
    },
    titleArea: {
        color: '#192959',
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 25,
        marginVertical: 30
    },
    label: {
        color: '#192959',
        fontFamily: 'SourceSansPro_300Light',
        fontSize: 20,
    },
    input: {
        width: 320,
        height: 53,
        paddingHorizontal: 20,
        marginTop: 15,
        marginBottom: 18,
        backgroundColor: '#FAFAFA',

        borderWidth: 0.4,
        borderRadius: 50,
        borderColor: '#E7E9EC',

        fontSize: 20,
        fontFamily: 'SourceSansPro_300Light',
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
        marginTop: 73,
        marginBottom: 12
    }
})