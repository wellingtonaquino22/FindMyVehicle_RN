import {View, StyleSheet, Platform, PermissionsAndroid, Dimensions, Text, Image, TouchableOpacity} from "react-native";
import {Button} from "react-native-elements"
import React, {useState, useEffect} from "react";
import MapView, {Marker, MarkerAnimated} from "react-native-maps";
import * as Location from "expo-location";
import {Ionicons} from "@expo/vector-icons";
import {
    useFonts,
    SourceSansPro_700Bold,
    SourceSansPro_400Regular,
    SourceSansPro_300Light
} from "@expo-google-fonts/source-sans-pro";

const {width, height} = Dimensions.get('screen')

export default function Home({navigation}) {

    const [font, setFont] = useFonts({
        SourceSansPro_700Bold, SourceSansPro_400Regular, SourceSansPro_300Light
    })
    const [region, setRegion] = useState(null)

    useEffect(() => {
        getMyLocation()
        console.log('\n\nScreen dimensions: \n\n- width: ' + width + '\n- height: ' + height + '\n\n')
    }, [])

    async function getMyLocation() {
        let location = await Location.getCurrentPositionAsync({})
        console.log(location)

        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        })

    }

    async function sendData() {
        const fetchBody = {region}
        const response = await fetch('https://api.tago.io/data', {
            method: 'POST',
            body: JSON.stringify(fetchBody),
            headers: {
                'Content-Type': 'application/json',
                'Device-Token': 'ccf64fb8-c91b-43b5-900e-5356a05fdd2f'
            },
        })
        const json = await response.json()
        console.log(json)
    }

    async function handleMonitor() {
        const response = await fetch('https://api.tago.io/data/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Device-Token': 'ccf64fb8-c91b-43b5-900e-5356a05fdd2f'
            }
        })
        const json = await response.json()
        console.log(json)
    }

    if (!font) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.content}>
                    <View style={styles.profile}>
                        <Image style={styles.imgProfile} source={require('../../../assets/user.png')}/>
                    </View>
                    <View>
                        <Text
                            style={
                                {
                                    fontFamily: 'SourceSansPro_700Bold',
                                    fontSize: 21,
                                    color: '#192959'
                                }
                            }>User Name
                        </Text>
                        <Text
                            style={
                                {
                                    fontFamily: 'SourceSansPro_400Regular',
                                    fontSize: 16,
                                    color: '#777'
                                }
                            }
                        >2 veículos
                        </Text>
                    </View>
                </View>
                <View style={[styles.content, {justifyContent: 'flex-end'}]}>
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}>
                        <View style={styles.menu}>
                            <Ionicons name={'menu'} color={'#BBB'} size={25}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bt}>
                <Button
                    buttonStyle={styles.vehicle}
                    title='Toyota, Corolla - BRA2E19'
                    titleStyle={{
                        color: '#192959',
                        fontFamily: 'SourceSansPro_400Regular',
                    }}
                    onPress={() => {
                        setRegion({
                            latitude: -8.109173,
                            longitude: -35.287119,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        })
                        sendData()
                        handleMonitor()
                    }}
                />
                <Button
                    buttonStyle={styles.vehicle}
                    title='CB Twister - BRC3TR1'
                    titleStyle={{
                        color: '#192959',
                        fontFamily: 'SourceSansPro_400Regular',
                    }}
                    onPress={() => {
                        setRegion({
                            latitude: -8.1186496,
                            longitude: -35.2910706,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        })
                        sendData()
                        handleMonitor()
                    }}
                />
            </View>
            <MapView
                onMapReady={() => {
                    Platform.OS === 'android' ?
                        PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                            .then(() => {
                                console.log("Fine location permission accepted!")
                            })
                        : ''
                }}
                style={{
                    width: '100%',
                    height: '82.2%',
                }}
                region={region}
                zoomEnabled={true}
                minZoomLevel={17}
                showsUserLocation={true}
            >
                <Marker
                    focusable={true}
                    coordinate={{
                        latitude: -8.109173,
                        longitude: -35.287119,
                    }}
                    title='Teste'
                    description='Descrição do local'
                    icon={{
                        uri: "https://img.icons8.com/plasticine/1x/car.png"
                    }}
                />
                <Marker
                    coordinate={{
                        latitude: -8.1186496,
                        longitude: -35.2910706,
                    }}
                    focusable={true}
                    title='Teste'
                    description='Descrição do local'
                    icon={{
                        uri: "https://img.icons8.com/plasticine/1x/car.png"
                    }}
                />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    container2: {
        // backgroundColor: '#eee',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginTop: 45,
    },
    container3: {
        backgroundColor: 'green'
    },
    content: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profile: {
        width: 62,
        height: 62,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 30,

        marginRight: 13,

        shadowColor: "#777",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    imgProfile: {
        width: 60,
        height: 60,
    },
    bt: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        width: '100%',
        height: 55,


        borderBottomColor: '#BBB',
        borderBottomWidth: 0.4
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

        width: 40,
        height: 40,
        color: '#BBB',

        borderRadius: 50,

        shadowColor: "#777",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.22,
        shadowRadius: 10.24,
        elevation: 13
    },
    vehicle: {
        height: 35,
        width: 176,
        marginLeft: 20,

        borderRadius: 50,
        borderWidth: 0.2,
        borderColor: '#BBB',

        backgroundColor: '#fbfbfb',
    }
})
