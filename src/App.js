/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Home} from './views/home';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
