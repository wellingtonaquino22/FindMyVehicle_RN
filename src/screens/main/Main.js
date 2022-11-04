import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from "react-native-elements";
import {useFonts} from "expo-font";
import {Poppins_700Bold} from "@expo-google-fonts/poppins";
import {SourceSansPro_300Light, SourceSansPro_700Bold} from "@expo-google-fonts/source-sans-pro";
import Login from "../login/Login";
import {Link} from "@react-navigation/native";

export default function Home({navigation}) {

    const [font] = useFonts({
        Poppins_700Bold, SourceSansPro_700Bold, SourceSansPro_300Light
    })

    if (!font) {
        return null
    }

    //TODO: View ainda em andamento
    return (
        <View style={styles.view}>
            <StatusBar style="auto"/>
            <View style={styles.background}>
                <Image style={styles.img}
                       source={require('../../../assets/background.png')}/>
            </View>
            <View style={styles.container}>
                <View style={[styles.content, {justifyContent: 'flex-start'}]}>
                    <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
                    <Text style={styles.textLogo}>Find My Vehicle</Text>
                </View>
                <View style={[styles.content, {justifyContent: 'flex-end'}]}>
                    <Text style={styles.flashyText}>Não perca seu veículo de vista</Text>
                    <View>
                        <Button
                            buttonStyle={styles.button}
                            title='Entrar'
                            titleStyle={styles.buttonTitle}
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                    <View>
                        <Text
                            style={styles.register}
                            onPress={() => navigation.navigate('Register')}
                        >Registrar-se</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.version}>v1.0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        height: '100%',
        backgroundColor: '#fff'
    },
    background: {
        position: 'absolute',
        justifyContent: 'center'
    },
    img: {
        flex: 1,
        width: 424.29,
        height: 660,
        resizeMode: 'contain'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        height: '49%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 99
    },
    logo: {
        marginTop: 80,
        width: 104,
        height: 104,
    },
    flashyText: {
        width: 234,
        textAlign: 'center',
        fontFamily: 'SourceSansPro_300Light',
        fontSize: 25,
        color: '#192959'
    },
    textLogo: {
        marginTop: 10,
        color: '#192959',
        fontFamily: 'Poppins_700Bold',
        fontSize: 25,
    },
    button: {
        backgroundColor: '#192959',
        fontSize: 20,
        height: 48,
        width: 273,
        borderRadius: 50,
        marginTop: 35,
        marginBottom: 16,
    },
    buttonTitle: {
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 25,
        color: '#fff'
    },
    register: {
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 25,
        color: '#192959'
    },
    version: {
        alignSelf: 'center'
    }
});