
import { StatusBar } from 'expo-status-bar';
import {Button, Image, ScrollView, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default function Home() {

return(
    <>
<ScrollView>
    {/* <ImageBackground source={require('../../../assets/logo.png')} style={styles.imagebk}> */}
<View style={styles.container}>
  <View style={styles.container2}>
    <Image style={styles.Logo} source={require('../../../assets/logo.png')} />
    <Text style={styles.TextLogo}>Find My Vehicle</Text>
  <StatusBar style="auto" />
  </View>

  <View>
  <Text style={{color: 'grey'}}>Não perca seu veículo de vista</Text>
  <View style={styles.Bt}>
  <Button 
  title='Continuar'
  color={'#19295A'}/>
  </View>
  <View style={styles.container2}>
  <Text style={styles.Text}>Registrar-se</Text>
  </View>
  </View>
</View>
{/* </ImageBackground> */}
</ScrollView>
<Text style={styles.TextVersion}>V1.0</Text>
  </>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: null,
alignItems: 'center',
marginTop: 60,
},
container2: {
marginBottom: 50,
alignItems: 'center'
},
Text: {
color: '#0D1C4A',
fontWeight: 'bold',
fontSize: 22,
},
TextLogo:{
color: '#0D1C4A',
fontWeight: 'bold',
fontSize: 25,
marginBottom: 260,
},
Bt:{
marginTop: 40,
marginBottom: 20,
},
imagebk:{
    width:400
},
TextVersion:{
alignSelf: 'center'
}
});
