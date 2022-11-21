import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {Dimensions} from "react-native";
import {useFonts} from "expo-font";
import {SourceSansPro_300Light} from "@expo-google-fonts/source-sans-pro";
import {Poppins_700Bold} from "@expo-google-fonts/poppins";

export default function InfoScreen1({navigation}) {

    const [font, setFont] = useFonts({
        SourceSansPro_300Light, Poppins_700Bold
    })

    if (!font) {
        return null
    }

    return (
        <View style={styles.welcome}>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <View style={styles.content}>
                    <Text style={styles.txt}>Bem vindo ao</Text>
                    <Text style={[styles.txt, {fontFamily: 'Poppins_700Bold'}]}>Find My Vehicle</Text>
                </View>
                <View style={styles.content}>
                    <Text style={[styles.txt, {fontSize: 22}]}>Localize seu veículo onde ele estiver</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcome: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,

        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

        backgroundColor: '#FFF'
    },
    container: {
        top: 120,
        display: 'flex',
        alignItems: 'center'
    },
    content: {
        display: 'flex',
        alignItems: 'center',

        width: 216,

        marginBottom: 49
    },
    logo: {
        marginTop: 80,
        width: 160,
        height: 160,

        marginBottom: 76.32
    },
    txt: {
        color: '#192959',
        fontSize: 27,
        fontFamily: 'SourceSansPro_300Light',
        textAlign: 'center'
    }
})
