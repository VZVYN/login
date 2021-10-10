import {combineReducers} from 'redux'
import { appReducer } from './appReducer'
import { reducer as reduxFormReducer } from 'redux-form';
export const rootReducer = combineReducers({

    app:appReducer,
    form: reduxFormReducer,
    
  })
  