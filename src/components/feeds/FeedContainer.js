import React, { Component } from 'react'
import {ScrollView, Text, StyleSheet, FlatList, View } from 'react-native'
import { Spinner } from 'native-base'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { getFeeds } from '../../actions/feeds'
import FeedList from './FeedList'
import Tabs from '../common/Tabs'

const newsType = [{ id:1, name:'worldnews'},
              { id:2, name:'sports'},
              { id:3, name:'gaming'}]

class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    }
  }

 componentDidMount(){
    const indexSubRaddit = this.state.selected
    const subRaddit = newsType[indexSubRaddit].name
    this.props.getFeeds(subRaddit)
  }

  handleOnPress = indexTab => {
    this.setState({selected : indexTab})
    const indexSubRaddit = indexTab
    const subRaddit = newsType[indexSubRaddit].name
    this.props.getFeeds(subRaddit)
  }

  handleOnRefresh = (e) => {
    this.setState({refreshing: true})
    const indexSubRaddit = indexTab
    const subRaddit = newsType[indexSubRaddit].name
    this.props.getFeeds(subRaddit)
  }

  render(){
    const { feeds, invalid, request } = this.props
    return(
      <View style={styles.container}>
        <Tabs  newsType={newsType} onSelected={this.handleOnPress} selected={this.state.selected} />
        { request ? <Spinner style={StyleSheet.snipper}/>
        :  (invalid ? <View><Text>Load data fail.</Text></View> : <View><FeedList feeds={feeds} /></View>) }
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  snipper: {
    flex: 1,
    alignItems:'center'
  },
})

function mapStateToProps(state){
  return {
    feeds:state.feeds.feeds,
    invalid:state.feeds.didInvalidate,
    request:state.feeds.requesting
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getFeeds:getFeeds
  },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FeedContainer)