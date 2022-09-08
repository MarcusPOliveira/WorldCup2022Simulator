import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const GroupExibition = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
`;

export const GroupInLine = styled.View`
  width: 100%;
  height: 20%;
`;

export const Separator = styled.View`
  width: 90%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.3;
`;

export const Instruction = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  opacity: 0.6;
  margin-top: 10px;
`;
