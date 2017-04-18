import React from 'react'
import { Constants } from 'expo'
import { Link } from 'react-router-native'
import { View, Text, ScrollView } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import qs from 'querystring'
import { tail, replace } from 'ramda'
import { connect } from 'react-redux'

const getReadme = url => dispatch => fetch(url)
  .then(res => res.text())
  .then(readme => dispatch({ type: 'SET_README', payload: readme }))

class Show extends React.Component {
  componentDidMount () {
    const { url } = qs.parse(tail(this.props.location.search))
    const readmeUrl = replace(
      'https://github.com',
      'https://raw.githubusercontent.com',
      url
    ) +
      '/master/README.md'
    this.props.dispatch(getReadme(readmeUrl))
  }
  render () {
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        <View cls='flx-row h3 bg-lightgray jcsb aic'>
          <Text cls='ml2 f4'>Repo</Text>
          <Link to='/'>
            <Text cls='mr3'>close</Text>
          </Link>
        </View>
        <ScrollView cls='ma2'>
          <Text>{this.props.readme}</Text>
        </ScrollView>
      </View>
    )
  }
}

const connector = connect(state => state)

export default connector(wrap(Show))
