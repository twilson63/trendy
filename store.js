import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ListView } from 'react-native'
import PouchDB from 'pouchdb-react-native'

const db = new PouchDB('trendy')
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
    repo: (state = '', action) => {
      switch (action.type) {
        case 'SET_REPO':
          console.log(action.payload)
          return action.payload
        default:
          return state
      }
    },
    bookmarkDs: (state=ds.cloneWithRows([]), action) => {
      switch (action.type) {
        case 'SET_BOOKMARKS':
          return ds.cloneWithRows(action.payload)
        default:
          return state
      }
    },
    db: (state = null, action) => {
      switch (action.type) {
        case 'SET_DB':
          return action.payload
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)

store.dispatch({ type: 'SET_DB', payload: db })

export default store
