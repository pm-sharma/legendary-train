/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface CircleI {
  children: React.ReactNode;
  bgColor: string;
  height?: number;
  width?: number;
}

const Circle = (props: CircleI) => {
  const {children, bgColor, height, width} = props;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: `${bgColor}`,
          height: height ? height : 43,
          width: width ? width : 43,
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: 43,
    borderRadius: 77.7,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
    alignItems: 'center',
  },
});

export default Circle;
