import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function InfoScreen1() {
    return (
        <View style={styles.container}>
            <Text>
                Second info screen!
            </Text>
            <View style={styles.nav}>
                <View style={styles.index}></View>
                <View style={styles.index}></View>
                <View style={[styles.index, {backgroundColor: '#192959'}]}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    nav: {
        position: 'absolute',
        top: "76%",

        display: 'flex',
        flexDirection: 'row'
    },
    index: {
        marginHorizontal: 12,
        width: 11,
        height: 11,

        borderRadius: 10,
        backgroundColor: '#d9d9d9'
    }
})