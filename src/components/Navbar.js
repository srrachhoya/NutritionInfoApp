import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React
, { useState } from 'react'

import { AntDesign

} from '@expo/vector-icons'; 

const Navbar = ({getData}) => {

const [search, setSearch] = useState('') 



  return (
    <View style={styles.navbar}>
      <Text style={styles.heading}>Nutrition Information</Text>
      

<View  style={styles.searchbar}>

<TextInput type="text" onChangeText={(e)=>{setSearch(e)}} style={styles.search} placeholder='Type here fruites, food...' />

<TouchableOpacity onPress={()=>{

  getData(search)

  }} style={{width:'100%'}} >

<AntDesign name="search1" size={24} color="#023e8a" />

</TouchableOpacity>

</View>


    </View>
  )
}

export default Navbar;

const styles = StyleSheet.create({

navbar:{
backgroundColor:'#03045e',
width:'100%',
height:130,
alignItems:'center',




},

heading:{
    color:'#caf0f8',
    fontSize:25,
    marginTop:20
},

searchbar:{

    backgroundColor:'#caf0f8',
    width:'90%',
    height:'30%',
    flexDirection:'row',
    borderRadius:10,
 paddingLeft:10,
 paddingRight:10,
    alignItems:'center',
marginTop:20

},

search:{
height:'100%',
width:'90%'
}


})