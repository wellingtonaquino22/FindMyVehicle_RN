import { View, Text, Image, StyleSheet, TextInput, ScrollView, Button} from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Profile() {
    return(
        <>
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.Text}>Registre-se de Graça</Text>
                <Image style={styles.Logo} source={require('../../../assets/profile.png')} />
            <StatusBar style="auto" />
            </View>
            <View>
                <View>
                    <Text style={styles.Text}>Seus Dados</Text>
                </View>
                <View>
                    <Text style={styles.TextInput}>Nome</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Digite seu primeiro nome"
                />
                </View>
                <View>
                    <Text style={styles.TextInput}>Sobrenome</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Digite Seu Sobrenome"
                />
                </View>
                <View>
                    <Text style={styles.TextInput}>Email</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="Digite Seu Email"
                />
                </View>
                <View>
                    <Text style={styles.Text}>Escolha Sua Senha</Text>
                </View>
                <View>
                    <Text style={styles.TextInput}>Digite uma Senha</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="No min 6. e no Max. 12"
                />
                </View>
                <View>
                    <Text style={styles.TextInput}>Confirme sua Senha</Text>
                    <TextInput
                    style={styles.input}
                    placeholder="insira novamente a sua senha"
                />
                </View>
                <View style={styles.Bt}>
                    <Button
                    title="Confirmar"
                    color={'#1A265A'}/>
                </View>
            </View>
        </View>
        </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: null,
        alignItems: 'center',
        marginTop: 60,
    },
    container2:{
        alignItems: 'center',
    },
    Text:{
        marginBottom: 50,
        color: '#283361',
        fontSize: 25,
    },
    TextInput: {
        fontSize: 16,
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
    Logo:{
        borderRadius: 100,
        width: 180,
        marginBottom: 40,
    },
    Bt:{
        marginBottom: 50,
    },
})