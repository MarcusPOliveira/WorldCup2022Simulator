import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { GroupStage } from '../screens/GroupStage';
import { Qualifiers } from '../screens/Qualifiers';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="home"
    >
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='groupStage'
        component={GroupStage}
      />
      <Screen
        name='qualifiers'
        component={Qualifiers}
      />
    </Navigator>
  )
}
