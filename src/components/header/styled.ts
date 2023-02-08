import styled from 'styled-components/native';
import {magenta, neutral} from '../../styles/color';
export const Container = styled.View`
  margin-top: 46;
`;

export const Icon = styled.Image`
  width: 39;
  height: 41;
`;

export const ProfileWrapper = styled.View`
  width: 101;
  height: 37;
  background: #430754;
  border-radius: 32;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const ProfileIcon = styled.Image`
  width: 29;
  height: 29;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export const Button = styled.TouchableOpacity`
  background: blue;
  border-radius: 3px;
  border: 2px solid;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  background: transparent;
  color: blue;
`;

export const BalanceWrapper = styled.View`
  background-color: ${neutral[100]};
  height: 118;
  padding-top: 16.25px;
  padding-left: 19.4px;
  padding-right: 19.4px;
`;

export const SavingWrapper = styled.View`
  background-color: ${magenta[800]};
  // opacity: 0.1;
  height: 100;
  padding-top: 13.6px;
  padding-left: 19.4px;
  padding-right: 19.4px;
`;

export const Scanner = styled.View`
  background-color: #650f5c;
  border-radius: 10.4776px;
  height: 56;
  width: 58%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Action = styled.View`
  background-color: #a655a8;
  border-radius: 10.4776px;
  height: 56;
  width: 19%;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const BorderContainer = styled.View`
  border-radius: 10.47px;
`;
