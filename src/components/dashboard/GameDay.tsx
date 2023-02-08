import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BorderContainer,
  FlexRow,
  StyledBoldText,
  StyledButton,
  StyledText,
} from '../styled';
import {Price, PriceContainer, TransactionContainer} from './styled';

interface GamePlayI {
  handleGetListApiCall: () => void;
  code: string;
}

const GameDay = (props: GamePlayI) => {
  const {handleGetListApiCall, code} = props;
  return (
    <BorderContainer style={styles.borderContainer}>
      <TransactionContainer>
        <StyledText game>Game of the day</StyledText>
        <PriceContainer style={styles.mtop}>
          {code.split('').map((value, index) => {
            return (
              <Price key={index}>
                <StyledBoldText style={styles.number} price>
                  {value}
                </StyledBoldText>
              </Price>
            );
          })}
        </PriceContainer>

        <StyledText style={[styles.center, styles.mtop]} gold>
          Win prizes worth ₹4000 or more.{' '}
        </StyledText>
        <StyledButton
          onPress={() => {
            handleGetListApiCall();
          }}
          style={styles.mtop}>
          <StyledText>Try your luck</StyledText>
        </StyledButton>
      </TransactionContainer>
      <FlexRow style={[styles.allTxn, styles.mtop]}>
        <StyledText gold style={styles.allTxnText}>
          View All Games
        </StyledText>
      </FlexRow>
      <View style={{height: 40}} />
    </BorderContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
  },
  transaction: {
    marginTop: 10,
    marginLeft: 7,
  },
  transactionRow: {
    width: '90%',
  },
  borderContainer: {
    backgroundColor: '#FBF7F5',
    marginBottom: 20,
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
  number: {
    fontSize: 60,
  },
  center: {
    textAlign: 'center',
  },
});

export default GameDay;
