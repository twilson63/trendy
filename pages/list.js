import React from 'react'

import { View, Text } from 'react-native'

import Header from '../containers/header'
import Repos from '../containers/repos'

import { connect } from 'react-redux'

const getTrendingRepos = dispatch => {
  return fetch(
    'https://runkit.io/twilson63/58f64c0ce5dc270012c6eaa6/branches/master'
  )
    .then(res => res.json())
    .then(repos => dispatch({ type: 'SET_REPOS', payload: repos }))
}

class List extends React.Component {
  componentDidMount () {
    this.props.dispatch(getTrendingRepos)
  }

  render () {
    return (
      <View>
        <Header />
        <Repos dataSource={this.props.dataSource} />
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(List)
