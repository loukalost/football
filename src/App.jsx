/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import MainNavigator from './navigation/MainNavigator'
import { NotifierWrapper } from 'react-native-notifier'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BootSplash from 'react-native-bootsplash'
import LoadingScreen from './screens/LoadingScreen'
import { Colors } from './styles/Colors'

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...Colors
  }
}

const linking = {
  prefixes: [
    'www.football.app',
    'football.app',
    'https://football.app',
    'http://football.app',
    'https://www.football.app',
    'http://www.football.app',
    'football://',
    'https://football://',
    'http://football://'
  ],
  config: {
    screens: {
      Auth: 'auth',
      FOOTBALLAuth: 'football-auth',
      FOOTBALLAuthReturn: 'football-auth-return',
      FOOTBALLAuthCallback: {
        path: 'football-auth-callback'
      }
    }
  }
}

function App () {
  return (
    <GestureHandlerRootView>
      <NotifierWrapper>
        <NavigationContainer
          linking={linking}
          fallback={<LoadingScreen />}
          theme={myTheme}
          onReady={() => {
            BootSplash.hide({ fade: true })
          }}
        >
          <MainNavigator />
        </NavigationContainer>
      </NotifierWrapper>
    </GestureHandlerRootView>
  )
}

export default App
