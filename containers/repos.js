import React from 'react'

import { View, Text, ListView } from 'react-native'
import Row from '../components/row'
import { wrap } from 'react-native-style-tachyons'
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })

const data = ds.cloneWithRows([
  { id: 1, name: 'Awesome Repo' },
  { id: 2, name: 'Cool Repo' }
])

const Repos = () => {
  return (
    <ListView
      cls="mt2"
      dataSource={data}
      renderRow={({ id, ...repo }) => {
        return <Row key={id} id={id} {...repo} />
      }}
    />
  )
}

export default wrap(Repos)
