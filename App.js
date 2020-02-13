import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import MonsterImg from './src/components/monstermatch'
import Constants from 'expo-constants'

export default function App() {

  const [headImage, setHeadImage] = useState(0)
  const [bodyImage, setBodyImage] = useState(1)
  const [feetImage, setFeetImage] = useState(0)
  const [match, setMatch] = useState(false)
  const [count, setCount] = useState(0)

  const head = [require('./assets/monster1_head.png'), require('./assets/monster2_head.png'), require('./assets/monster3_head.png')]

  const body= [require('./assets/monster1_body.png'), require('./assets/monster2_body.png'), require('./assets/monster3_body.png')]

  const feet = [require('./assets/monster1_feet.png'), require('./assets/monster2_feet.png'), require('./assets/monster3_feet.png')]

  

  useEffect (()=>{ 
    if(headImage === bodyImage && headImage === feetImage && bodyImage === feetImage){
      setMatch(true)
    }
  })

  const matchMonsters = () => {
  
    console.log(match)
  
    if(match){
      setCount(0)
      setMatch(false)
    }else{
      setCount(count + 1)
    }
    
    setHeadImage(Math.floor(Math.random() * Math.floor(3)))
    setBodyImage(Math.floor(Math.random() * Math.floor(3)))
    setFeetImage(Math.floor(Math.random() * Math.floor(3)))    
   }

   return (
    <SafeAreaView style={styles.container}>
      {match ? <Text>MATCHED!!</Text> : <Text></Text>}
      <Text>count: {count}</Text>
      <View>
        <MonsterImg imageSrc={head[headImage]}/>
        <MonsterImg imageSrc={body[bodyImage]}/>
        <MonsterImg imageSrc={feet[feetImage]}/>
      </View>
      <Button title="Match Monsters!" onPress={matchMonsters}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
