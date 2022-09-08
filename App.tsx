import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

import theme from './src/theme';
import { Routes } from './src/routes';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  useEffect(() => {
    //previse que a SplashScreen saia de tela
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    showSplashScreen();
  }, []);

  useEffect(() => {
    //quando as fontes carregarem, desmonta a splash
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      setAppIsReady(true);
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  //caso o app não tenha carregado
  if (!appIsReady) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
      <Routes />
    </ThemeProvider>
  );
}
