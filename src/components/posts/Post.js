import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'
import CommentContainer from '../comments/CommentContainer'



const Post = ({posts}) => {
    return (
          posts.map((p, i) => {
            return (
              <ScrollView key={i}>
                <Card
                  key={p.name} 
                  title={ p.author }
                  image={{ uri: p.thumbnail }}>
                  <Text style={{marginBottom: 10}}>
                    {p.title}
                  </Text>
                </Card>
                <CommentContainer subComments={p.permalink} />
              </ScrollView>
            )
          })
    )
  }

export default Post