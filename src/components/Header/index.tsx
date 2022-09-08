import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Title,
  GroupSelectButton
} from './styles';

type Props = {
  title: string
}

export function Header({ title }: Props) {

  const theme = useTheme();

  return (
    <Container>
      <GroupSelectButton>
        <Entypo name="chevron-left" size={30} color={theme.colors.white} />
      </GroupSelectButton>
      <Title> {title} </Title>
      <GroupSelectButton>
        <Entypo name="chevron-right" size={30} color={theme.colors.white} />
      </GroupSelectButton>
    </Container>
  );
}
