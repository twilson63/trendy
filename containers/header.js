import React from 'react'
import { Constants } from 'expo'
import { Octicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'

import { wrap } from 'react-native-style-tachyons'

const Header = () => {
  return (
    <View
      cls='flx-row h3 bg-lightgray jcsb aic'
      style={{ paddingTop: Constants.statusBarHeight }}
    >
      <TouchableOpacity>
        <Octicons name='mark-github' cls='f3 ml2' />
      </TouchableOpacity>
      <Text cls='black f4'>Github Trends</Text>
      <Link to="/settings">
      <Octicons name='gear' cls='f3 mr2' />
      </Link>
    </View>
  )
}

export default wrap(Header)
