import React, {
  Component
} from 'react'

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Platform,
} from 'react-native'

// create a component
const Tabs = ({ newsType, onSelected, selected }) => {
  return (
    <View style={styles.tabbarView}>
        {newsType.map((item,i)=>
            <TouchableOpacity 
              key={i} 
              style={styles.iconView}
              onPress={() => onSelected(i)}
              >
              { selected === i ? <Text style={styles.textActive}>{item.name}</Text> : <Text>{item.name}</Text> }
            </TouchableOpacity>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  tabbarView: {
      top:0,
      right:0,
      left:0,
      height:50,
      opacity:1,
      backgroundColor:'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white',
      alignItems:'flex-end',
      alignContent:'flex-end',
  },
  iconView: {
      flex: 1,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
  },
  hidden: {
      height: 0,
  },
  textActive: {
    color:'red'
  }
})

export default Tabs
