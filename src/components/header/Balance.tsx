import React from 'react';
import {StyleSheet, View} from 'react-native';
import Circle from '../common/circle';
import {
  Button,
  FlexRow,
  MLeftAuto,
  StyledBoldText,
  StyledText,
} from '../styled';
import {Action, BalanceWrapper, Icon, SavingWrapper, Scanner} from './styled';

const eye = require('../icons/eye.png');
const scanner = require('../icons/scan.png');
const arrow = require('../icons/arrow.png');
const menu = require('../icons/menu.png');

const Balance = () => {
  return (
    <>
      <View style={styles.container}>
        <BalanceWrapper style={styles.borderTop}>
          <FlexRow>
            <View>
              <StyledText style={{fontFamily: 'Arial'}} grey>
                Balance
              </StyledText>
            </View>
            <MLeftAuto>
              <Circle bgColor="#9B97B6">
                <Icon style={{height: 16, width: 22}} source={eye} />
              </Circle>
            </MLeftAuto>
          </FlexRow>
          <StyledBoldText black>₹12,000</StyledBoldText>
        </BalanceWrapper>
        <SavingWrapper style={styles.borderBottom}>
          <FlexRow>
            <View>
              <StyledText subHeading>Savings</StyledText>
            </View>
          </FlexRow>
          <FlexRow style={styles.mtop}>
            <StyledBoldText money>₹12,000</StyledBoldText>
            <MLeftAuto>
              <Button>
                <StyledText subHeading>Save More</StyledText>
              </Button>
            </MLeftAuto>
          </FlexRow>
        </SavingWrapper>
      </View>
      <FlexRow style={{justifyContent: 'space-between', marginTop: 21}}>
        <Scanner>
          <FlexRow>
            <StyledText style={{lineHeight: 40, marginRight: 10}} white>
              Scan Code
            </StyledText>
            <Circle bgColor="#A655A8">
              <Icon style={{height: 13, width: 14}} source={scanner} />
            </Circle>
          </FlexRow>
        </Scanner>
        <Action>
          <Icon style={{height: 12, width: 12}} source={arrow} />
        </Action>
        <Action>
          <Icon style={{height: 6, width: 24}} source={menu} />
        </Action>
      </FlexRow>
    </>
  );
};

const styles = StyleSheet.create({
  mtop: {
    marginTop: 10,
  },
  borderTop: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  borderBottom: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  container: {
    marginTop: 20,
  },
});

export default Balance;
