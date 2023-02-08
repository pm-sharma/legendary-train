import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {FlexRow, StyledText} from '../styled';
import {SettingButton} from './styled';

const setting = require('../icons/settings.png');
const footer = require('../icons/footer.png');

const Footer = () => {
  return (
    <ImageBackground resizeMode="cover" source={footer} style={styles.image}>
      <SettingButton>
        <FlexRow>
          <StyledText grey style={styles.text}>
            Patental Controls
          </StyledText>
          <Image style={styles.imgIcon} source={setting} />
        </FlexRow>
      </SettingButton>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    marginRight: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 100,
    width: '100%',
  },
  imgIcon: {
    height: 19,
    width: 19,
  },
});

export default Footer;
