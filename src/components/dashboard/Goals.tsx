/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BorderContainer, FlexRow, HorizontalLine, StyledText} from '../styled';
import {Card, TransactionContainer, VerticalLine} from './styled';

const arrow = require('../icons/arrowr.png');

const Goals = () => {
  return (
    <BorderContainer style={styles.borderContainer}>
      <TransactionContainer>
        <StyledText blue>Andy’s Savings</StyledText>

        <FlexRow style={styles.mtop}>
          <StyledText goals>
            Saved a total of ₹6,480 this month and is close to achieving one
            goal
          </StyledText>
        </FlexRow>

        <Card>
          <FlexRow>
            <VerticalLine />
            <View>
              <StyledText goals>Playstation 5</StyledText>
              <StyledText style={styles.mtop} goals>
                ₹36,480 saved of ₹40,000 goal
              </StyledText>
            </View>
          </FlexRow>
        </Card>
      </TransactionContainer>
      <HorizontalLine />

      <FlexRow style={styles.allTxn}>
        <StyledText allTxn style={styles.allTxnText}>
          Add and View Goals
        </StyledText>
      </FlexRow>
    </BorderContainer>
  );
};

const styles = StyleSheet.create({
  borderContainer: {
    backgroundColor: '#F5F7FB',
  },
  allTxn: {
    backgroundColor: '#EAE1F2',
    opacity: 0.45,
    height: 63,
    padding: '19px',
  },
  allTxnText: {
    lineHeight: 63,
    marginLeft: 14,
  },
  mtop: {
    marginTop: 15,
  },
});

export default Goals;
