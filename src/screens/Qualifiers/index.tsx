import React from 'react';

import { Header } from '../../components/Header';
import { ConfrontationCard } from '../../components/ConfrontationCard';
import {
  Container
} from './styles';

export function Qualifiers() {
  return (
    <Container>
      <Header title='Oitavas' />
      <ConfrontationCard />
    </Container>
  );
}
