import {View, StyleSheet, Platform, PermissionsAndroid, Dimensions} from "react-native";
import React, {useState, useEffect} from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";

const {width, height} = Dimensions.get('screen')

export default function Home() {

    const [region, setRegion] = useState(null)

    useEffect(() => {
        getMyLocation()
    }, [])

    async function getMyLocation() {
        await Location.getCurrentPositionAsync({})
    }

    //TODO: Mapa retornando a posição so usuário
    return (
        <View style={styles.container}>
            <MapView
                onMapReady={() => {
                    Platform.OS === 'android' ?
                        PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                            .then(() => {
                                console.log("Aceitou")
                            })
                        : ''
                }}
                style={{width: width, height: height}}
                region={region}
                zoomEnabled={true}
                minZoomLevel={17}
                showsUserLocation={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})