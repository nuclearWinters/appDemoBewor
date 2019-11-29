/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  SafeAreaProvider,
  SafeAreaConsumer,
} from 'react-native-safe-area-context';
import React from 'react';
import {View, StatusBar} from 'react-native';

let newApp = () => (
  <SafeAreaProvider>
    <SafeAreaConsumer>
      {insets => (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
          <StatusBar barStyle="dark-content" hidden={true} />
          <App />
        </View>
      )}
    </SafeAreaConsumer>
  </SafeAreaProvider>
);
AppRegistry.registerComponent(appName, () => newApp);
