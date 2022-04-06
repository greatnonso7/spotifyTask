/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fonts } from 'assets/fonts';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { getBottomSpace, hp, wp } from 'shared/responsive-dimension';
import { colors } from 'styles/colors';

interface LongButtonProps {
  loading?: boolean;
  title?: string;
  titleStyle?: TextStyle;
  isNotBottom?: boolean;
  buttonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
}

const LongButton = ({
  loading,
  title,
  titleStyle,
  isNotBottom,
  containerStyle,
  buttonStyle,
  onPress,
  disabled,
}: LongButtonProps) => {
  return (
    <View style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled || loading}
        style={[styles.buttonStyle, buttonStyle]}>
        {loading ? (
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: hp(40) + getBottomSpace(),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: colors.appBlack,
    fontSize: hp(18),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: Fonts.AvenirNextBold,
  },
  buttonStyle: {
    height: hp(50),
    width: wp(327),
    backgroundColor: colors.green,
    borderRadius: hp(45),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default LongButton;
