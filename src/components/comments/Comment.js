//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SocialIcon, Avatar } from 'react-native-elements'


// create a component
const Comment = ({ id, author, body }) => {
  return (
    <View key={id} style={styles.container}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    marginBottom:10,
    marginLeft:20,
    marginRight:20,
    flexDirection:'column',
  },
  author: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize:18
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
})

//make this component available to the app
export default Comment
