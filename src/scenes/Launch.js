/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *    - Preloading any specified app content
 *    - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Alert,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes } from '../theme/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  launchImage: {
    width: AppSizes.screen.width,
    height: AppSizes.screen.height,
  },
});

/* Component ==================================================================== */
export default class Launch extends Component {
  componentDidMount = () => {
    // Show status bar on app launch
    StatusBar.setHidden(false, true);
  };

  render = () => (
    <View style={[AppStyles.container, AppStyles.containerCentered]}>
      <ActivityIndicator
        animating
        size={'large'}
        color={'#C1C5C8'}
      />
    </View>
  );
}
