import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

import {
  setLocale,
  loadTranslations,
  syncTranslationWithStore,
} from "react-redux-i18n";

import translations from '../lang/translations'

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale("en"));

export const persistor = persistStore(store)

export default { store, persistor }