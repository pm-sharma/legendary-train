/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Circle from '../common/circle';
import {
  BorderContainer,
  FlexRow,
  HorizontalLine,
  Icon,
  MLeftAuto,
  StyledText,
} from '../styled';
import {MR10, TransactionContainer} from './styled';

const food = require('../icons/food.png');
const store = require('../icons/store.png');
const star = require('../icons/star.png');

const Transactions = () => {
  return (
    <BorderContainer style={styles.borderContainer}>
      <TransactionContainer>
        <StyledText money>Recent transactions</StyledText>
        <FlexRow style={styles.transaction}>
          <MR10>
            <Circle bgColor="#EDE0FF" height={50} width={50}>
              <Icon style={{height: 22, width: 22}} source={food} />
            </Circle>
          </MR10>
          <View>
            <FlexRow style={styles.transactionRow}>
              <StyledText black>Food & Drinks</StyledText>
              <MLeftAuto>
                <StyledText black>-₹50</StyledText>
              </MLeftAuto>
            </FlexRow>
            <StyledText style={styles.text} grey>
              02:30 pm
            </StyledText>
          </View>
        </FlexRow>
        <HorizontalLine />

        <FlexRow style={styles.transaction}>
          <MR10>
            <Circle bgColor="#D7ECF3" height={50} width={50}>
              <Icon style={{height: 22, width: 22}} source={store} />
            </Circle>
          </MR10>
          <View>
            <FlexRow style={styles.transactionRow}>
              <StyledText black>Store Sale</StyledText>
              <MLeftAuto>
                <StyledText black>-₹140</StyledText>
              </MLeftAuto>
            </FlexRow>
            <StyledText style={styles.text} grey>
              Jun - 02:30 PM
            </StyledText>
          </View>
        </FlexRow>
        <HorizontalLine />

        <FlexRow style={styles.transaction}>
          <MR10>
            <Circle bgColor="#F4E7B6" height={50} width={50}>
              <Icon style={{height: 22, width: 22}} source={star} />
            </Circle>
          </MR10>
          <View>
            <FlexRow style={styles.transactionRow}>
              <StyledText black>Money Credit</StyledText>
              <MLeftAuto>
                <StyledText green>-₹50</StyledText>
              </MLeftAuto>
            </FlexRow>
            <StyledText style={styles.text} grey>
              02:30 pm
            </StyledText>
          </View>
        </FlexRow>
      </TransactionContainer>
      <HorizontalLine />

      <FlexRow style={styles.allTxn}>
        <StyledText allTxn style={styles.allTxnText}>
          All Transactions
        </StyledText>
      </FlexRow>
    </BorderContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
  },
  transaction: {
    marginTop: 15,
    marginLeft: 7,
  },
  transactionRow: {
    width: '90%',
  },
  borderContainer: {
    backgroundColor: '#F8F5FB',
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
});

export default Transactions;
