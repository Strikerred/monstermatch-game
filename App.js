import React, { useState } from 'react'
import { StyleSheet, View, SafeAreaView, Button } from 'react-native'
import MonsterImg from './src/components/monstermatch'
import Constants from 'expo-constants'

export default function App() {

  // const [headImage, setHeadImage] = useState([require('./assets/monster1_head.png'), require('./assets/monster2_head.png'), require('./assets/monster3_head.png')])

  const [headImage, setHeadImage] = useState(0)
  const [bodyImage, setBodyImage] = useState(0)
  const [feetImage, setFeetImage] = useState(0)

  const head = [require('./assets/monster1_head.png'), require('./assets/monster2_head.png'), require('./assets/monster3_head.png')]

  const body= [require('./assets/monster1_body.png'), require('./assets/monster2_body.png'), require('./assets/monster3_body.png')]

  const feet = [require('./assets/monster1_feet.png'), require('./assets/monster2_feet.png'), require('./assets/monster3_feet.png')]

  const matchMonsters = () => {
    
    setHeadImage(Math.floor(Math.random() * Math.floor(3)))
    setBodyImage(Math.floor(Math.random() * Math.floor(3)))
    setFeetImage(Math.floor(Math.random() * Math.floor(3)))

  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MonsterImg imageSrc={head[headImage]}/>
        <MonsterImg imageSrc={bodyImage[bodyImage]}/>
        <MonsterImg imageSrc={feetImage[feetImage]}/>
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
