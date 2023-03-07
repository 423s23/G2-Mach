import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'


//Screens
import Home from './Home'
import Leaderboard from './Leaderboard'
import Profile from './Profile'
import Tasks from './Tasks'

//Screen names
const homeName = 'Home'
const tasksName = 'Tasks'
const leaderboardName = 'Leaderboard'
const profileName = 'Profile'

const Tab = createBottomTabNavigator()

export default function NavBar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    } else if(rn === tasksName){
                        iconName = focused ? 'ribbon' : 'ribbon-outline'
                    } else if(rn === leaderboardName){
                        iconName = focused ? 'podium' : 'podium-outline'
                    } else if(rn === profileName){
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name ={iconName} size={size} color={color}/>
                },
            })}>

                <Tab.Screen name={homeName} options={{headerShown: false}} component={Home}/>
                <Tab.Screen name={tasksName} options={{headerShown: false}} component={Tasks}/>
                <Tab.Screen name={leaderboardName} options={{headerShown: false}} component={Leaderboard}/>
                <Tab.Screen name={profileName} options={{headerShown: false}} component={Profile}/>

            </Tab.Navigator>

        </NavigationContainer>
    )
}
