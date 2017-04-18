import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'
import { NativeRouter, Route, Switch } from 'react-router-native'

NativeTachyons.build({ rem: 16 }, StyleSheet)

import List from './pages/list'
import Settings from './pages/settings'
import Show from './pages/show'

export default class App extends React.Component {
  render () {
    return (
      <NativeRouter>
        <View>
          <Route exact path='/' component={List} />
          <Switch>
            <Route path='/settings' component={Settings} />
            <Route path='/:id' component={Show} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}
