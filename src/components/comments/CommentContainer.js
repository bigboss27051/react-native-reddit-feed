//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getComments } from '../../actions/comments'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CommentList from './CommentList'
import { Spinner } from 'native-base'


// create a component
class CommentContainer extends Component {

  componentDidMount(){
    console.log('props', this.props);
    const subComments = this.props.subComments
    this.props.getComments(subComments)
  }  

  render() {
    const { comments, invalid, request } = this.props
    return (
      <View>
        {
          request ? <Spinner />
          : (invalid ? <Text>Load data fail.</Text> :  <CommentList comments={comments} /> )
        }
      </View>
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

function mapStateToProps(state){
  console.log('c', state);
  return {
    comments:state.comments.comments,
    invalid:state.comments.didInvalidate,
    request:state.comments.requesting
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getComments:getComments
  },dispatch)
}

//make this component available to the app
export default connect(mapStateToProps,mapDispatchToProps)(CommentContainer)
