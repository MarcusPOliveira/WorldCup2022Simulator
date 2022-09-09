import styled, { css } from 'styled-components/native';

export type SelectColor = {
  isSelected: boolean;
}

export const Container = styled.View`
  width: 80%;
  height: 103px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Team1Wrapper = styled.TouchableOpacity<SelectColor>`
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  ${({ isSelected, theme }) => css`
    background-color: ${isSelected ? theme.colors.success : theme.colors.secondary};
    opacity: ${isSelected ? 0.4 : 1};
  `};
`;

export const Team2Wrapper = styled.TouchableOpacity<SelectColor>`
  flex: 0.5;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  ${({ isSelected, theme }) => css`
    background-color: ${isSelected ? theme.colors.success : theme.colors.secondary};
    opacity: ${isSelected ? 0.4 : 1};
  `};
`;

export const GroupReference = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: 14px;
`;

export const Flag = styled.Image`
  width: 35px;
  height: 35px;
  margin-left: 14px;
`;

export const Team = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-left: 14px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.3;
`;
