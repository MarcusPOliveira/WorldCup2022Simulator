import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  TeamWrapper,
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
      <TeamWrapper isSelected>
        <GroupReference>{groupReference}</GroupReference>
        <Flag source={flag} />
        <Team>{team}</Team>
      </TeamWrapper>
      <Separator />
      <TeamWrapper>
        <GroupReference>2B</GroupReference>
        <Flag />
        <Team>Estados Unidos</Team>
      </TeamWrapper>
    </Container>
  );
}
