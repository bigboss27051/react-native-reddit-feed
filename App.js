import React, { Component } from 'react'
import { View } from 'react-native'
import FeedList from './src/components/feeds/FeedList'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './src/reducers/index'
import HeaderBar from './src/components/common/HeaderBar'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base'
import Routes from './src/components/routes/Routes'

const middleware = applyMiddleware(thunk)
const store = createStore(reducers,middleware)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}


