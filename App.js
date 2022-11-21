import 'react-native-gesture-handler';
import React from "react";
import Login from './src/screens/login/Login';
import Main from './src/screens/main/Main';
import Profile from "./src/screens/profile/Profile";
import Home from "./src/screens/home/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from "@expo/vector-icons";
import {useFonts, SourceSansPro_300Light, SourceSansPro_700Bold} from "@expo-google-fonts/source-sans-pro";
import InfoView from "./src/screens/welcome/InfoView";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

export function MenuDrawer() {

    const [font, setFont] = useFonts({
        SourceSansPro_300Light, SourceSansPro_700Bold
    })

    if (!font) {
        return null
    }

    return (
        <Drawer.Navigator
            screenOptions={{headerShown: false}}>
            <Drawer.Screen
                options={
                    {
                        title: 'Início',
                        drawerLabelStyle: {
                            fontSize: 18,
                            fontFamily: 'SourceSansPro_700Bold'
                        },
                        drawerIcon: () => (
                            <Ionicons
                                name={'home'}
                                size={20}
                                color={'#777'}
                            />
                        )

                    }
                }
                name="HomeDrawer"
                component={Home}/>
            <Drawer.Screen
                options={
                    {
                        title: 'Sair',
                        drawerLabelStyle: {
                            fontSize: 18,
                            fontFamily: 'SourceSansPro_700Bold'
                        },
                        drawerIcon: () => (
                            <Ionicons
                                name={'log-out'}
                                size={20}
                                color={'#777'}
                            />
                        )
                    }
                }
                name="Logout"
                component={Main}
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Main}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={"InfoView"}
                    component={InfoView}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Register"
                    component={Profile}
                />
                <Stack.Screen
                    name="Home"
                    component={MenuDrawer}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
