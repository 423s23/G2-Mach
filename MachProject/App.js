import * as React from "react";
import NavBar from "./components/navBar";

import * as SQLite from 'expo-sqlite';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {navigationRef} from "./RootNavigation";
import Profile from "./components/Profile";
import Settings from "./components/settings";

const Stack = createNativeStackNavigator();

export default function App() {
    const db = SQLite.openDatabase('Mach.db');

    // return (
    //
    //    // <NavBar/>
    //
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Navigation"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}