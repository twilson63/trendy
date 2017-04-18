import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NativeTachyons from 'react-native-style-tachyons'
import { NativeRouter, Route, Switch } from 'react-router-native'
import { Provider } from 'react-redux'
import store from './store'

NativeTachyons.build({ rem: 16 }, StyleSheet)

import Bookmarks from './pages/bookmarks'

import List from './pages/list'
import Settings from './pages/settings'
import Show from './pages/show'

class App extends React.Component {
  render () {
    return (
      <NativeRouter>
        <View>
          <Route exact path='/' component={List} />
          <Switch>
            <Route path='/bookmarks' component={Bookmarks} />
            <Route path='/show' component={Show} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
