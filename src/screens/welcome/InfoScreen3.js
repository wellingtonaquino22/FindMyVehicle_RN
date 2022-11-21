import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {useFonts} from "expo-font";
import {Poppins_200ExtraLight, Poppins_300Light, Poppins_700Bold} from "@expo-google-fonts/poppins";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/core";
import {Ionicons} from "@expo/vector-icons";

export default function InfoScreen3() {

    const navigation = useNavigation()

    const [font] = useFonts({
        Poppins_200ExtraLight, Poppins_300Light, Poppins_700Bold
    })

    if (!font) {
        return null
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.mapsLogo}
                source={require('../../../assets/maps_logo.png')}
            />
            <View style={styles.content}>
                <View style={styles.mapsIcon}>
                    <Image
                        style={styles.imgIcon}
                        source={require('../../../assets/location.png')}
                    />
                </View>
                <Text style={styles.text}>
                    Esta é a sua localização no mapa
                </Text>
            </View>
            <View style={styles.content}>
                <View style={styles.mapsIcon}>
                    <Image
                        style={styles.imgIcon}
                        source={require('../../../assets/map.png')}
                    />
                </View>
                <Text style={styles.text}>
                    Visualize seu veículo no Google Maps
                </Text>
            </View>
            <View style={styles.content}>
                <View style={styles.mapsIcon}>
                    <Image
                        style={styles.imgIcon}
                        source={require('../../../assets/route.png')}
                    />
                </View>
                <Text style={styles.text}>
                    Veja a distancia e o caminho até seu veículo
                </Text>
            </View>
            <View style={styles.buttonView}>
                <Button
                    title={"Continuar"}
                    buttonStyle={styles.button}
                    titleStyle={styles.buttonTitle}
                    onPress={() => navigation.navigate("Main")}
                >
                </Button>
                <Ionicons name={'arrow-forward'} size={20} color={'#fff'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: "#fff"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        height: 132,
        width: 313
    },
    mapsLogo: {
        width: 150,
        height: 84.48,

        marginBottom: 50
    },
    mapsIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: 90,
        height: 90,

        borderRadius: 12,
        borderColor: '#E9E9E9',
        borderWidth: 1,

        backgroundColor: '#FFF',

        shadowColor: "#777",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    imgIcon: {
        width: 60,
        height: 60
    },
    text: {
        width: 182,
        marginLeft: 18,

        fontFamily: 'Poppins_200ExtraLight',
        fontSize: 19,

        color: '#777'
    },
    buttonView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 20,

        width: 180,
        height: 40,
        marginVertical: 73,

        backgroundColor: '#192959'
    },
    buttonTitle: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 16,
    },
    button: {
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: 'center',

        width: 130,
        height: 36,

        backgroundColor: null
    }
})