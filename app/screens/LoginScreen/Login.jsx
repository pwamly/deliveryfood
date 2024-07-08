import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Text>Login screen</Text>
      <TouchableOpacity style={{backgroundColor:'red'}} onPress={()=>{console.log('button is clicked')}}>
      <Text>Login screen?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})