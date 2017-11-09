import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Spinner } from 'native-base'
import { getPosts } from '../../actions/posts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Post from './Post'


// create a component
class PostContainer extends Component {

  componentDidMount(){
    const name = this.props.data
    this.props.getPosts(name)
  }

  render() {
    const { posts, invalid, request } = this.props
    console.log('post',posts)
    return (
      <View>
        {
          request ? <Spinner /> 
          : (invalid ? <Text>Load data fail.</Text> : <Post posts={posts} />)
        }
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    posts:state.posts.posts,
    invalid:state.posts.didInvalidate,
    request:state.posts.requesting
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getPosts:getPosts
  },dispatch)
}

//make this component available to the app
export default connect(mapStateToProps,mapDispatchToProps)(PostContainer);
