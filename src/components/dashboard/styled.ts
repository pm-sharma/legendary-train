import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
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

export const TransactionContainer = styled.View`
  padding: 17px 14px;
`;

export const MR10 = styled.View`
  margin-right: 10px;
`;

export const Card = styled.View`
  height: 96;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 19px;
  margin-top: 20px;
`;

export const VerticalLine = styled.View`
  height: 59;
  background-color: rgba(88, 105, 140, 0.9);
  opacity: 0.3;
  border-radius: 10px;
  width: 3;
  margin-right: 5px;
`;

export const PriceContainer = styled.View`
  border: 6px solid;
  border-color: #f5bda2;
  display: flex;
  flex-direction: row;
  border-radius: 19.4px;
  height: 152px;
  background-color: #e7cfb7;
  justify-content: space-around;
  padding: 17px;
`;

export const Price = styled.View`
  border: 6px solid;
  border-color: #da9b7c;
  border-radius: 19.4px;
  background-color: #e7cfb7;
  height: 107;
  justify-content: center;
  align-items: center;
  width: 64;
`;

export const SettingButton = styled.TouchableOpacity`
  background-color: #e5e5e5;
  border-radius: 27px;
  border: 0.8px solid;
  border-color: #f1f1f1;
  color: #8d8d8d;
  padding: 9.8px 9.8px;
  width: 190px,
  height: 400px,
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
  margin-top: -140px
`;
