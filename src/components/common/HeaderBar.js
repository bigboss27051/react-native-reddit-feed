//import liraries
import React, { Component } from 'react';
import { StatusBar, Navigator, View, StyleSheet } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text, Body, Title } from 'native-base'

// create a component
class HeaderBar extends Component {
  render() {
    return (
      <Header>
          <Body>
            <Title>News</Title>
          </Body>
        </Header>
    )
  }
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
export default HeaderBar
