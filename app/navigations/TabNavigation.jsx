import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { color } from 'react-native-tailwindcss';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

export class TabNavigation extends Component {
  render() {
    return (
        <Tab.Navigator 
        screenOptions={{
          headerShown:false,
          tabBarActiveTintColor:Colors.PRIMARY
        }}><>
        <Tab.Screen name="home" component={HomeScreen} options={{
          tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>),tabBarIcon:({color,size})=>(
            <FontAwesome name='home' size={size} color={color}/>
          )
        }} />
        <Tab.Screen name="login" component={LoginScreen} options={{
          tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Login</Text>),tabBarIcon:({color,size})=>(
            <FontAwesome name='bookmark' size={size} color={color}/>
          )
        }} />        
        <Tab.Screen name="profile" component={ProfileScreen} options={{
          tabBarLabel:({color})=>(<Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>),tabBarIcon:({color,size})=>(
            <FontAwesome name='user-circle' size={size} color={color}/>
          )
        }} />      
        </>
        </Tab.Navigator>
    )
  }
}

export default TabNavigation