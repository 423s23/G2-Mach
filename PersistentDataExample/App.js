import * as React from "react";
import NavBar from "./components/NavBar"

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {navigationRef} from "./RootNavigation";
import Profile from "./screens/Profile";
import TaskList from "./screens/TaskList";
import Task from "./screens/Tasks";
import Awards from "./screens/Awards.jsx";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Navigation"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="TaskList" component={TaskList} />
                <Stack.Screen name="Task" component={Task} />
                <Stack.Screen name="Awards" component={Awards} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}