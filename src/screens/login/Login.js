
import { StatusBar } from 'expo-status-bar';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
// import server from '../../server/server'

export default function Login() {

  const getdata = ()=>{
    const fetchbody ={
      "variable": "temperatura",
      "value": "67",
      "umidade": "umidade",
      "valor": 100
  }
  fetch('https://api.tago.io/data', {   
    method: 'POST',  
    body: JSON.stringify(fetchbody),
    headers: {'Content-type': 'application/json; charset=UTF-8',
            'Device-Token': 'a381b1c3-f8ed-42bc-9273-81ead8afcf7f'
    },})  
    .then((response) => response.json())  
    .then((json) => console.log(json))

  //   request(options, function (error, response) {
  //     if (error) throw new Error(error);
  //     console.log(response.body);
  // })
    }

return(
    <>
<ScrollView>
<View style={styles.container}>
  <View style={styles.container2}>
    <Text style={styles.Text}>Entrar</Text>
    <Image style={styles.Logo} source={require('../../../assets/logo.png')} />
    <Text style={styles.TextLogo}>Find My Vehicle</Text>
  <StatusBar style="auto" />
  </View>

  <View>
  <Text style={styles.TextInput}>Email</Text>
  <TextInput
    style={styles.input}
    placeholder="SeuEmail@gmail.com"
  />
  <Text style={styles.TextInput}>Senha</Text>
  <TextInput
    style={styles.input}
    placeholder="********************"
  />
  <View style={styles.Bt}>
  <Button
    onPress={() => {
      getdata()
    }}
  title='Continuar'
  color={'#19295A'}/>
  </View>
  </View>
</View>
</ScrollView>
<Text style={styles.TextVersion}>V1.0</Text>
  </>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
marginTop: 50,
},
container2: {
marginBottom: 50,
alignItems: 'center'
},
Text: {
// fontFamily: 'Poppins',
// fontFamily: 'Poppins-Regular',
marginBottom: 100,
color: '#0D1C4A',
fontWeight: 'bold',
fontSize: 22,
},
TextInput: {
fontSize: 16,
},
TextLogo:{
color: '#0D1C4A',
fontWeight: 'bold',
fontSize: 25,
marginBottom: 25,
},
input: {
width: 260,
borderRadius: 20,
borderColor:'#FAFAFA',
height: 60,
borderWidth: 1,
padding: 10,
marginTop:10,
marginBottom: 10,
backgroundColor: '#FAFAFA'
},
Bt:{
marginTop: 40,
},
TextVersion:{
alignSelf: 'center'
}
});
