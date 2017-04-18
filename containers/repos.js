import React from 'react'

import { View, Text, ListView } from 'react-native'
import Row from '../components/row'
import { wrap } from 'react-native-style-tachyons'

const Repos = props => {
  return (
    <ListView
      cls='mt2'
      enableEmptySections
      dataSource={props.dataSource}
      renderRow={({ objectID, ...repo }) => {
        return <Row key={objectID} objectID={objectID} {...repo} />
      }}
    />
  )
}

export default wrap(Repos)
