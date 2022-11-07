import {Text, View, StyleSheet, Image, Button, Dimensions} from 'react-native'
import { Octicons,FontAwesome5 } from '@expo/vector-icons';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import { useEffect, useState } from 'react';

export default function Vehicle(){

    const [origin,setOrigin]=useState(null);
    const [destination,setDestination]=useState(null);

    async function sendData (){
    const fetchbody ={origin}
    const response = await fetch('https://api.tago.io/data', {   
    method: 'POST',  
    body: JSON.stringify(fetchbody),
    headers: {
            'Content-Type': 'application/json',
            'Device-Token': 'ccf64fb8-c91b-43b5-900e-5356a05fdd2f'
    },})  
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

    useEffect(()=>{
        (async function(){
            try {
                const {status,permissions}=await Permissions.askAsync(Permissions.LOCATION)
                if (status === 'granted'){
                    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
                    setOrigin({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    })
                    // console.log(location);                
            } 
            }catch (error) {
                console.log(error + '')
            }
        })();
    },[]);

    return (
        <View style={styles.container} >
        <View style={styles.container2} >
            <Image style={styles.imgprofile} source={require('../../../assets/profile.png')}/>
            <View>
            <Text>Jon Snow</Text>
            <Text>2 veículos</Text>
            </View>
            <View style={styles.bt}>
            <Button title='Veiculo'
            onPress={() => {
            sendData()
            }}
            />
            <Button title='Veiculo2'
            onPress={() => {
            handleMonitor()
            }}
            />
            </View>
            <Octicons name="three-bars" size={24} color="black" />
        </View>
        <View style={styles.container3}>
        <MapView
            style={styles.mapstyle}
            initialRegion={origin}
            showsUserLocation={true}
            >
            <Marker
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            title='Teste'
            description='Descrição do local'
            icon={{
                uri:"https://img.icons8.com/plasticine/1x/truck.png"
            }}
            />
        </MapView>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: null,
    },
    container2: {
        backgroundColor: null,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 29,
        marginBottom:29,
    },
    container3:{
        backgroundColor: 'green'
    },
    imgprofile:{
        width: 60,
        height: 60,
    },
    bt:{
        width: 150,
        height:50,
    },
    mapstyle:{
        width: '100%',
        height: '100%',
    }
})