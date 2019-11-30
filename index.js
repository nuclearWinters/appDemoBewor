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
        <>
          <StatusBar barStyle="dark-content" hidden={true} />
          <View
            style={{
              paddingBottom: insets.bottom,
            }}>
            <App />
          </View>
        </>
      )}
    </SafeAreaConsumer>
  </SafeAreaProvider>
);
AppRegistry.registerComponent(appName, () => newApp);
