import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ListView } from 'react-native'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })

const store = createStore(
  combineReducers({
    repos: (state = [], action) => {
      switch (action.type) {
        case 'SET_REPOS':
          return action.payload
        default:
          return state
      }
    },
    dataSource: (state = ds.cloneWithRows([]), action) => {
      switch (action.type) {
        case 'SET_REPOS':
          return ds.cloneWithRows(action.payload)
        default:
          return state
      }
    },
    settings: () => null,
    settingsDs: () => null,
    readme: (state = '', action) => {
      switch (action.type) {
        case 'SET_README':
          return action.payload
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)

export default store
