import 'react-native-gesture-handler';
import React from "react";
import Login from './src/screens/login/Login';
import Main from './src/screens/main/Main';
import Profile from "./src/screens/profile/Profile";
import Home from "./src/screens/home/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Ionicons} from "@expo/vector-icons";
import {useFonts, SourceSansPro_300Light, SourceSansPro_700Bold} from "@expo-google-fonts/source-sans-pro";
import WelcomeScreen from "./src/screens/welcome/WelcomeScreen";
import InfoScreen1 from "./src/screens/welcome/InfoScreen1";
import InfoScreen2 from "./src/screens/welcome/InfoScreen2";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()
const Transition = createAnimatedSwitchNavigator();

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
                        ),
                    }
                }
                name="Logout"
                component={Home}
            />
        </Drawer.Navigator>
    )
}

export function WelcomeDrawer() {
    return (
        <Stack.Navigator
            initialRouteName={WelcomeScreen}
            screenOptions={{
                headerShown: false,
                swipeEnabled: true
            }}
        >
            <Stack.Screen
                name={"WelcomeScreen"}
                component={WelcomeScreen}
                options={{

                }}
            />
            <Stack.Screen
                name={"InfoScreen1"}
                component={InfoScreen1}
            />
            <Stack.Screen
                name={"InfoScreen2"}
                component={InfoScreen2}
            />
        </Stack.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Main} screenOptions={{headerShown: false}}>
                <Stack.Screen
                    name={"WelcomeDrawer"}
                    component={WelcomeDrawer}
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
