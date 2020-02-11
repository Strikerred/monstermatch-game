import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'

const MonsterImg = (props) => {
    return (
        <Image source={props.imageSrc} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        resizeMode: 'contain'
    }
})

export default MonsterImg