import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Team1Wrapper,
  Team2Wrapper,
  GroupReference,
  Flag,
  Team,
  Separator,
} from './styles';

type Props = TouchableOpacityProps & {
  groupReference: string;
  flag: string;
  team: string;
  isSelected: boolean;
}

export function ConfrontationCard({ groupReference, flag, team, isSelected = false, ...rest }: Props) {
  return (
    <Container>
      <Team1Wrapper>
        <GroupReference>{groupReference}</GroupReference>
        <Flag source={flag} />
        <Team>{team}</Team>
      </Team1Wrapper>
      <Separator />
      <Team2Wrapper>
        <GroupReference>2B</GroupReference>
        <Flag />
        <Team>Estados Unidos</Team>
      </Team2Wrapper>
    </Container>
  );
}
