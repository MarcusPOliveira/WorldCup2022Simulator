import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.success};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  margin-top: 33px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
