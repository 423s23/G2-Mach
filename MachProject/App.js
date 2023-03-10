import * as React from "react";
import NavBar from "./components/NavBar"

import * as SQLite from 'expo-sqlite';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {navigationRef} from "./RootNavigation";
import Profile from "./screens/Profile";
import Settings from "./screens/Settings";
import TaskList from "./screens/TaskList";
import Task from "./screens/Tasks";

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
                <Stack.Screen name="TaskList" component={TaskList} />
                <Stack.Screen name="Task" component={Task} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}