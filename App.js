
import { StyleSheet, Text, View, ActivityIndicator, StatusBar } from 'react-native';
import Navbar from './src/components/Navbar';
import { useState, useEffect } from 'react';



export default function App() {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
 const [display, setDisplay] = useState({display:'none'})
 const [found, setFound]  = useState(true)

  const getData = async (value) => {


    const options = {
      method: 'GET',
      headers: { 'X-Api-Key': 'HZQaz6EflflwH2mdq6CkIg==LnFxOgQUyffoEIp6' }
    };

    try {

      setIsLoading(true)

      const res = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${value}`, options)
      const response = await res.json()

      setIsLoading(false)

if (response.length === 1) {

  setDisplay({})
  setData(response[0])
  setFound(true)
  
}else{
setDisplay({display:'none'})
setData({})
setFound(false)

}


      
    }

    catch {

      (err => console.error(err))

    }

  }





  if (isLoading) {

    return <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>


      <ActivityIndicator

        color='#023e8a'
        size='large'

      />

    </View>


  }


  return (
    <View style={styles.container}>

<StatusBar
        animated={true}
        backgroundColor='#03045e'
        barStyle='light-content'
        
        
      />

      <Navbar getData={getData} />




{

found === false &&

<View style={{ alignItems: 'center',marginTop:200, width: '100%', height: '100%' }}>

<Text style={{color:'#03045e'}}>Data not found</Text>


</View> }




  <View style={[styles.mainContainer, display]}>



          <View style={styles.heading}>

            <Text style={{ fontSize: 20, color: '#48cae4', textTransform:'capitalize' }}>{data.name}</Text>
            <Text style={{ fontSize: 15, color: '#48cae4', }}>{data.serving_size_g + 'g'}</Text>
          </View>

          <View style={styles.itemContainer}>

            <View style={styles.item}><Text style={styles.itemHeading}>Calories</Text><Text style={styles.subItemHeading}>{data.calories + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Total Fat</Text><Text style={styles.subItemHeading}>{data.fat_total_g + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Saturated Fat</Text><Text style={styles.subItemHeading}>{data.fat_saturated_g + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Protein</Text><Text style={styles.subItemHeading}>{data.protein_g + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Sodium</Text><Text style={styles.subItemHeading}>{data.sodium_mg + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Potassium</Text><Text style={styles.subItemHeading}>{data.potassium_mg + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Cholesterol</Text><Text style={styles.subItemHeading}>{data.cholesterol_mg + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Carbohydrates</Text><Text style={styles.subItemHeading}>{data.carbohydrates_total_g + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Fiber</Text><Text style={styles.subItemHeading}>{data.fiber_g + 'g'}</Text></View>
            <View style={styles.item}><Text style={styles.itemHeading}>Sugar</Text><Text style={styles.subItemHeading}>{data.sugar_g + 'g'}</Text></View>



          </View>

        </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#caf0f8',
    alignItems: 'center',

  },
  mainContainer: {

    width: '100%',
    alignItems: 'center',
    marginTop: 10



  },


  heading: {

    width: '90%',
    height: 80,
    backgroundColor: '#023e8a',
    borderRadius: 10,
    padding: 10,
    // flexDirection:'row',
    // justifyContent:'space-between'


  },


  itemContainer: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    // paddingLeft:10,
    // paddingRight:10,
    marginTop: 10
  },

  item: {

    width: '47%',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#023e8a',
    margin: 5,
    borderRadius: 10,
    paddingTop: 10


  },

  itemHeading: {
    color: '#90e0ef',
    fontSize: 20


  },
  subItemHeading: {
    color: '#caf0f8',
    fontSize: 15
  }




});
