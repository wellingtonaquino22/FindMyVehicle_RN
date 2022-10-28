import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import { SourceSansPro_700Bold, SourceSansPro_300Light } from "@expo-google-fonts/source-sans-pro";


export default function Login() {

  const [font] = useFonts({
    Poppins_700Bold, SourceSansPro_700Bold, SourceSansPro_300Light
  })

  if(!font) {
    return null
  }

  return(
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.container2}>
            {/*<Image style={styles.logo} source={require('../../../assets/back.png')} />*/}
            <Text style={styles.page_title}>Entrar</Text>
            <Image style={styles.logo} source={require('../../../assets/logo.png')} />
            <Text style={styles.title}>Find My Vehicle</Text>
          <StatusBar style="auto" />
          </View>

          <View style={styles.container3}>
            <Text style={styles.email}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="seuemail@mail.com"
            />
            <Text style={styles.psswd}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="********************"
            />
            <View>
              <Button
                  buttonStyle={styles.button}
                  title='Continuar'
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Text style={styles.TextVersion}>v1.0</Text>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 80,
    width: 104,
    height: 104,

    //TODO: Corrigir sombras
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
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
  container3: {
    marginTop: 20,
  },
  title: {
    marginTop: 10,
    color: '#192959',
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
  },
  page_title: {
    color: '#192959',
    fontFamily: 'SourceSansPro_700Bold',
    fontSize: 20,
  },
  email: {
    fontFamily: 'SourceSansPro_300Light',
    fontSize: 16,
  },
  psswd: {
    fontFamily: 'SourceSansPro_300Light',
    fontSize: 16,
    marginTop: 23
  },
  TextInput: {
    borderRadius: 50,
    fontSize: 16,
  },
  input: {
    width: 273,
    borderRadius: 50,
    borderWidth: 1,
    borderColor:'#FAFAFA',
    height: 48,
    paddingHorizontal: 17,
    marginVertical: 10,
    backgroundColor: '#FAFAFA'
  },
  //TODO: fonte do botão
  button: {
    backgroundColor: '#192959',
    fontSize: 20,
    height: 48,
    borderRadius: 50,
    marginTop: 74,
  },
  TextVersion:{
    color: '#192959',
    alignSelf: 'center',
    marginBottom: 10
  }
});
