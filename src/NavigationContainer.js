import React, {Component} from 'react';
import {View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import TrailerScreen , {TRAILER_SCREEN_NAME} from './TrailerScreen';
import TrailersScreen , {TRAILERS_SCREEN_NAME} from './TrailersScreen';

const stackNavigatorConfig = {};

stackNavigatorConfig[TRAILER_SCREEN_NAME] = {
  screen: TrailerScreen,
};

stackNavigatorConfig[TRAILERS_SCREEN_NAME] = {
  screen: TrailersScreen,
};

const ApplicationNavigator = StackNavigator(stackNavigatorConfig, {
  initialRouteName: TRAILERS_SCREEN_NAME,
});

export default () => <ApplicationNavigator/>;