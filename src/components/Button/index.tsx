import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Title,
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  iconName: React.ComponentProps<typeof AntDesign>['name'];
}

export function Button({ title, iconName, ...rest }: Props) {

  const theme = useTheme();

  return (
    <Container {...rest}>
      <Title> {title} </Title>
      <AntDesign name={iconName} size={30} color={theme.colors.white} />
    </Container>
  );
}
