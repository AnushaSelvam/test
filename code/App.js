import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import { compose, createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';

import RootRouter from './src/components/RootRouter';
Text.defaultProps.allowFontScaling=false;
export default class App extends React.Component {
  
  render() {
    const store = createStore(reducers, undefined,compose(applyMiddleware(ReduxThunk)));
   
    return (
      <Provider store={store}>
          <RootRouter/>
      </Provider>
    );
  }
}