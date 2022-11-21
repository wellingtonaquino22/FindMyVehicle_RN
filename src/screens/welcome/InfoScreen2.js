import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useFonts} from "expo-font";
import {SourceSansPro_700Bold} from "@expo-google-fonts/source-sans-pro";

export default function InfoScreen2({navigation}) {

    const [font] = useFonts({
        SourceSansPro_700Bold
    })

    if (!font) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>
                    Este ícone indica onde seu veículo está no mapa
                </Text>
            </View>
            <Image
                source={require('../../../assets/car.png')}
                style={styles.img}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#fff',
    },
    content: {
        width: 271,
        marginBottom: 97
    },
    text: {
        textAlign: 'center',
        fontFamily: 'SourceSansPro_700Bold',
        fontSize: 28,

        color: '#192959'
    },
    img: {
        width: 215,
        height: 215
    }
})