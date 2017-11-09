import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import { Card } from 'react-native-elements'
import Comment from './Comment'

// create a component
const CommentList = ({comments}) => {
  return (
    
      <Card title="Comments">
          {
            comments.map((item, i) => {
              return (
                <Comment 
                  key={item.id}
                  id={item.id}
                  body={item.body}
                  author={item.author} />
              )
            })
          }
      </Card>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
})

//make this component available to the app
export default CommentList
