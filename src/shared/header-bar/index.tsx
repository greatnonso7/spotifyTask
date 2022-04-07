/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fonts } from 'assets/fonts';
import React from 'react';
import {
  View,
  Text,
  ImageProps,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { IconProps } from 'react-native-vector-icons/Icon';
import { deviceWidth, hp, wp } from 'shared/responsive-dimension';
import { colors } from 'styles/colors';

interface HeaderBarProps {
  hasBackButton?: boolean;
  leftIcon?: ImageProps;
  onPressLeftIcon?: () => void;
  tintColor?: string;
  leftIconStyle?: ViewStyle;
  headerTitle?: string;
  iconName?: IconProps;
  onPressRightIcon?: () => void;
  rightIcon?: boolean;
  headerRight?: boolean;
  backgroundColor?: string;
}

const HeaderBar = ({
  hasBackButton,
  leftIcon,
  onPressLeftIcon,
  tintColor,
  leftIconStyle,
  headerTitle,
  iconName,
  onPressRightIcon,
  rightIcon,
  headerRight,
  backgroundColor,
}: HeaderBarProps) => {
  const renderHeaderLeft = () => {
    if (hasBackButton) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.headerLeftIconContainer,
            leftIconStyle,
            { borderColor: tintColor },
          ]}
          onPress={onPressLeftIcon}>
          <IconEntypo
            name="chevron-thin-left"
            color={colors.white}
            size={hp(25)}
          />
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return (
        <View style={styles.headerTitleContainer}>
          <Text style={[styles.headerTitle, { color: tintColor }]}>
            {headerTitle}
          </Text>
        </View>
      );
    }
  };

  const renderHeaderRight = () => {
    if (rightIcon) {
      return (
        <TouchableOpacity
          style={styles.rightIconContainer}
          onPress={onPressRightIcon}>
          <IconEntypo name={iconName} size={hp(24)} color={colors.white} />
        </TouchableOpacity>
      );
    }
    if (headerRight) {
      return (
        <TouchableOpacity
          onPress={onPressRightIcon}
          style={styles.headerRightContainer}>
          <Text style={styles.rightStepText}>{headerRight}</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: backgroundColor || colors.appBlack },
      ]}>
      <View
        style={[
          styles.navBar,
          { backgroundColor: backgroundColor || colors.appBlack },
        ]}>
        {renderHeaderLeft()}
        {renderHeaderTitle()}
        {renderHeaderRight()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeftIconContainer: {
    position: 'absolute',
    left: wp(26),
  },
  headerTitleContainer: {
    position: 'absolute',
    left: deviceWidth * 0.35,
    borderColor: colors.white,
    alignSelf: 'center',
  },
  headerTitle: {
    fontSize: hp(20),
    fontFamily: Fonts.AvenirNextBold,
    textAlign: 'center',
  },
  rightIconContainer: {
    position: 'absolute',
    right: wp(26),
  },
  headerRightContainer: {
    position: 'absolute',
    right: wp(26),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightStepText: {
    color: colors.white,
    fontFamily: Fonts.AvenirNextBold,
    fontSize: hp(15),
  },
  headerContainer: {
    backgroundColor: colors.appBlack,
    width: deviceWidth,
  },
  navBar: {
    width: deviceWidth,
    backgroundColor: colors.appBlack,
    height: hp(44),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hp(20),
  },
});

export default HeaderBar;
