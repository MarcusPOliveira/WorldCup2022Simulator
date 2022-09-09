import styled from 'styled-components/native';

export const Container = styled.View`
  width: 180px;
  height: 200px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const TeamWrapper = styled.View`
  flex-direction: row;
`;

export const Flag = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Team = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
