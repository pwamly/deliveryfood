import { View, Text,FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

import GlobalApi from '../../utils/GlobalApi'

const Slider = () => {
    const [slider,setSlider]=useState([]); 
    useEffect(()=>{
        getSlider();
    },[]);

const getSlider =()=>{
GlobalApi.getSlider().then(resp=>{

    // console.log("..",resp.items );
    setSlider(resp?.items)
})
    }
  return (
    <View>   
    {slider&&
    <FlatList data={slider}  horizontal={true}  renderItem={({item})=>(
        <View style={{marginRight:10}}>
            <Image source={{uri:item.profile_pic_url}}
            style={styles.sliderImage}
            />
        </View>
    )} />
    }
    </View>
  )
}

const styles=StyleSheet.create({
    sliderImage:{
        width:170,
        height:150,
        borderRadius:30,
        objectFit:'contain'
    }
});
export default Slider