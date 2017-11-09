import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import FeedContainer from '../feeds/FeedContainer'
import PostContainer from '../posts/PostContainer'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "feedContainer" component = {FeedContainer} title = "Feed" initial = {true} />
         <Scene key = "postContainer" component = {PostContainer} title = "Post" />
      </Scene>
   </Router>
)
export default Routes