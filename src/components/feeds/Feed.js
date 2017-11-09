//import liraries
import React, { Component } from 'react'
import { TouchableHighlight, Alert, Image, View, Text, StyleSheet } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

goToPost = (name) => {
  Actions.postContainer(name)
}

const Feed = ({ id, author, image, title, name }) => {
    return (
      <Card
        key={id}
        title={author}
        image={{uri: image}}
        >
        <Text style={{marginBottom: 10}}>
          {title}
        </Text>
        <Button
          onPress={() => this.goToPost(name)}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>   
    ) 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:12,
    flexDirection:'row',
    alignItems:'center'
  },
  photo: {
    height: 56,
    width: 108,
    borderRadius: 20,
  },
  text:{
    marginLeft:12,
    fontSize:16
  }
})

export default Feed
