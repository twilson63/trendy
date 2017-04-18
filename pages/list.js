import React from 'react'

import { View, Text } from 'react-native'

import Header from '../containers/header'
import Repos from '../containers/repos'

class List extends React.Component {
  componentDidMount () {
  }
  render () {
    return (
      <View>
        <Header />
        <Repos />
      </View>
    )
  }
}

export default List
