import {Text, View, StyleSheet, Image, Button} from 'react-native'

export default function Vehicle(){
    return (
        <View style={styles.container} >
        <View style={styles.container2} >
            <Image style={styles.imgprofile} source={require('../../../assets/profile.png')}/>
            <Text>Jon Snow</Text>
            <Text>2 veículos</Text>
            <Button style={styles.bt}title='Veiculo'/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
    },
    container2: {
        backgroundColor: 'red'
    },
    imgprofile:{
        width: 80,
        height: 80,
    },
})