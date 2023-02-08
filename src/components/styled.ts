import styled from 'styled-components/native';
import {neutral} from '../styles/color';

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
`;

export const MLeftAuto = styled.View`
  margin-left: auto;
`;

export const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const BorderContainer = styled.View`
  border-radius: 10.47px;
`;

export const StyledText = styled.Text<ColorName>`
  font-size: 18px;
  font-weight: 600;
  color: ${props => getTextLink(props)};
`;

export const StyledBoldText = styled.Text<ColorName>`
  font-size: 30px;
  font-weight: 600;
  color: ${props => getTextLink(props)};
`;

export const Button = styled.TouchableOpacity`
  background-color: #cea4ce;
  border-radius: 83.2px;
  color: '#400142';
  padding: 6px 10px;
  color: '#400142';
`;

export const WhiteBoldText = styled.Text`
  color: ${neutral[100]};
  font-weight: bold;
`;

export const SmallIcon = styled.Image`
  height: 5.3;
  width: 10.2;
`;

export const Icon = styled.Image`
  width: 39;
  height: 41;
`;

export const HorizontalLine = styled.View`
  opacity: 0.08;
  border: 1px solid #000000;
  margin-top: 10;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: #ab604f;
  border-radius: 28px;
  height: 49;
  width: 166;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const getTextLink = (props: ColorName) => {
  switch (true) {
    case props.magenta:
      return '#650F5C';
    case props.lightMagenta:
      return '#650F5C';
    case props.lilac:
      return '#EAE1F2';
    case props.lightBlue:
      return '#D7ECF3';
    case props.lightYellow:
      return '#F4E7B6';
    case props.grey:
      return '#9B9B9B';
    case props.black:
      return '#252525';
    case props.money:
      return '#681A60';
    case props.subHeading:
      return '#681A60';
    case props.allTxn:
      return '#A655A8';
    case props.blue:
      return '#112854';
    case props.goals:
      return '#5682AB';
    case props.game:
      return '#631E00';
    case props.price:
      return '#631E00';
    case props.gold:
      return '#AB604F';
    case props.green:
      return '#00600A';
    default:
      return '#FFFFFF';
  }
};

export interface ColorName {
  magenta?: boolean;
  lilac?: boolean;
  lightMagenta?: boolean;
  lightBlue?: boolean;
  lightYellow?: boolean;
  white?: boolean;
  grey?: boolean;
  black?: boolean;
  money?: boolean;
  subHeading?: boolean;
  allTxn?: boolean;
  blue?: boolean;
  goals?: boolean;
  game?: boolean;
  price?: boolean;
  gold?: boolean;
  green?: boolean;
}
