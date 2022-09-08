import styled from 'styled-components/native';

export const Container = styled.View`
  height: 15%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const GroupSelectButton = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
