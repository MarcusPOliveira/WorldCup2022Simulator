import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.Image`
  width: 343px;
  height: 300px;
`;

export const Welcome = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 10px;
`;

