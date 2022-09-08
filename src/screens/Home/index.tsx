import React from 'react';
import { useNavigation } from '@react-navigation/native';

import logoPng from '../../assets/logo.png';
import {
  Container,
  Logo,
  Welcome,
  Title,
  Subtitle,
  Button
} from './styles';

export function Home() {

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('groupStage');
  }

  return (
    <Container>
      <Logo source={logoPng} />
      <Welcome>
        <Title>Bem vindo ao</Title>
        <Subtitle>Simulador da{'\n'}Copa do Mundo{'\n'}Qatar 2022</Subtitle>
      </Welcome>
      <Button onPress={handleStart} >
        <Subtitle>Começar</Subtitle>
      </Button>
    </Container>
  );
}
