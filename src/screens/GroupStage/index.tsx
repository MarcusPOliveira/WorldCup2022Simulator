import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { GroupPreview } from '../../components/GroupPreview';
import { Button } from '../../components/Button';
import {
  Container,
  GroupExibition,
  Content,
  GroupInLine,
  Separator,
  Instruction,
} from './styles';

export function GroupStage() {

  const navigation = useNavigation();

  function handleNextStep() {
    navigation.navigate('qualifiers');
  }

  return (
    <Container>
      <Header title='Grupo G' />
      <GroupExibition>
        <GroupPreview />
      </GroupExibition>
      <Content>
        <GroupInLine>

        </GroupInLine>
        <Separator />
        <Instruction>Clique na bandeira para{'\n'}selecionar a ordem do grupo</Instruction>
        {/* 
          lista com cards da posição da seleção no grupo
        */}
        <Button title='Fase Eliminatória' iconName='arrowright' onPress={handleNextStep} />
      </Content>
    </Container>
  );
}