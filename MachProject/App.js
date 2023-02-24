
import {Button, Image, StyleSheet} from 'react-native';
import Home from "./components/Home";
import Settings from "./components/settings";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
    return (

        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}

                    options={{
                        headerTitle: (props) => <LogoTitle {...props} />,
                        headerRight: () => (
                            <Button
                                onPress={() => navigationRef.current?.navigate('Settings')}
                                title="Settings"
                                color="#6bd0f6"
                            />
                        ),
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={
                        {
                            headerStyle: {
                                backgroundColor: '#6bd0f6',
                            }
                        }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function LogoTitle() {
    return (
        <Image
            style={{ width: 180, height: 50 }}
            source={require('./assets/mach-logo.png')}

        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    massive: {
        fontSize: 160,
        color: "#FFE133"
    },
    button: {
        backgroundColor: '#FFF',
        padding: 15,
        width: 200,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

});