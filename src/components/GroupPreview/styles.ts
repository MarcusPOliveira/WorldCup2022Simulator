import styled from 'styled-components/native';

export const Container = styled.View`
  width: 180px;
  height: 200px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
