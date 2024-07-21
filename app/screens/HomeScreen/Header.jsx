import { View, Text,TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native-web'
import { colors } from 'react-native-tailwindcss'
import { FontAwesome } from '@expo/vector-icons'
import Slider from './Slider'

const Header = () => {
  return (
    <View style={styles.container}>
        {/* profile section */}
        <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
        <View style={styles.userImage}><Text>S</Text>
        </View>
        <View>
        <Text style={{fontSize:19,fontFamily:'outfit'}}>Welcome!</Text>
        <Text>Trace Food</Text>
        </View>
       </View>
       <FontAwesome name='bookmark-o' size={27} color='black'/>
       </View>
       {/* search bar section */}
       <View style={styles.seachBarContainer}>
        <TextInput style={styles.textInput} placeholder='Search' />
        <FontAwesome style={styles.searchbtn} name='search' size={24} color='pink'/>
       </View>
    </View>
  )
}

const styles= StyleSheet.create({
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:20
    },
    container:{
        padding:20,
        paddingTop:10,
        backgroundColor:'pink',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
    },
    userImage:{
        width:35,
        height:35,
        borderRadius:99,
        backgroundColor:'gray',
    },
    textInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:'white',
        borderRadius:9,
        width:'85%'
    },
    seachBarContainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10,

    },
    searchbtn:{
        backgroundColor:'white',
        padding:10,
        borderRadius:8,
    }

})
export default Header