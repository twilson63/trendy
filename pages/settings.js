import React from 'react'
import { Constants } from 'expo'
import { View, Text, ListView, Switch } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { Link } from 'react-router-native'
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })

const data = ds.cloneWithRows([
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Clojure' }
])

const Row = wrap(props => {
  return (
    <View cls='bb flx-row jcsb aic pv2'>
      <Text cls='f4 pv2 ml3'>{props.name}</Text>
      <Switch cls='mr3' />
    </View>
  )
})

class Settings extends React.Component {
  componentDidMount () {
  }
  render () {
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        <View cls='flx-row h3 bg-lightgray jcsb aic'>
          <Text cls='ml2 f4'>Settings</Text>
          <Link to='/'>
            <Text cls='mr3'>close</Text>
          </Link>
        </View>
        <ListView
          cls='mt3'
          dataSource={data}
          renderRow={({ id, ...item }) => {
            return <Row key={id} id={id} {...item} />
          }}
        />
      </View>
    )
  }
}

export default wrap(Settings)
