//import liraries
import React, { Component } from 'react'
import { ScrollView, Text, StyleSheet, FlatList, RefreshControl } from 'react-native'
import Feed from './Feed'

const FeedList = ({feeds}) => {
    return (
      <ScrollView>
        <FlatList
          data={feeds}
          renderItem={
            ({item}) => 
            <Feed 
              key={item.name}
              id={item.id}
              author={item.author}
              title={item.title}
              image={item.thumbnail}
              name={item.name}
            />
          }
      />
      </ScrollView>
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

export default FeedList


