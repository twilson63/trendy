import React from 'react'
import { Constants } from 'expo'
import { Link } from 'react-router-native'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import qs from 'querystring'
import { tail, replace, pathOr } from 'ramda'
import { connect } from 'react-redux'
import { Octicons } from '@expo/vector-icons'

const saveRepo = history => (dispatch, getState) => {
  const { db, repo } = getState()
  db
    .post(repo)
    .then(res => {
      if (res.ok) {
        history.push('/')
      }
    })
    .catch(err => console.log(err))
}

const getReadme = (url, title) => dispatch => fetch(url)
  .then(res => res.text())
  .then(
    readme => dispatch({ type: 'SET_REPO', payload: { url, title, readme } })
  )

class Show extends React.Component {
  componentDidMount () {
    const { url, title } = qs.parse(tail(this.props.location.search))
    const readmeUrl = replace(
      'https://github.com',
      'https://raw.githubusercontent.com',
      url
    ) +
      '/master/README.md'
    this.props.dispatch(getReadme(readmeUrl, title))
  }
  render () {
    return (
      <View cls='jcsb' style={{ paddingTop: Constants.statusBarHeight }}>
        <View cls='flx-row h3 bg-lightgray jcsb aic'>
          <Text cls='ml2 f4'>
            Repo
          </Text>
          <Link to='/'>
            <Text cls='mr3'>close</Text>
          </Link>
        </View>
        <View>
          <View cls='flx-row jcsb aic mh2'>
            <Text>{pathOr('', [ 'props', 'repo', 'title' ], this)}</Text>
            <TouchableOpacity
              onPress={() => this.props.dispatch(saveRepo(this.props.history))}
            >
              <Octicons name='bookmark' size={32} />
            </TouchableOpacity>
          </View>
          <ScrollView cls='ma2'>
            <Text>{pathOr('', [ 'props', 'repo', 'readme' ], this)}</Text>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Show))
