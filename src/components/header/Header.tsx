import React from 'react';
import {View} from 'react-native';
import {FlexRow, MLeftAuto} from '../styled';
import {Container, Icon, ProfileWrapper, ProfileIcon} from './styled';
import {WhiteBoldText, SmallIcon} from '../styled';
import Balance from './Balance';
const logo = require('../icons/logo.png');
const profile = require('../icons/profile.png');
const down = require('../icons/down.png');

const Header = () => {
  return (
    <Container>
      <FlexRow>
        <View>
          <Icon source={logo} />
        </View>
        <MLeftAuto>
          <ProfileWrapper>
            <ProfileIcon source={profile} />
            <WhiteBoldText>Andy</WhiteBoldText>
            <SmallIcon source={down} />
          </ProfileWrapper>
        </MLeftAuto>
      </FlexRow>
      <Balance />
    </Container>
  );
};

export default Header;
