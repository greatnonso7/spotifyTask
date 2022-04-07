import { Fonts } from 'assets/fonts';
import React, { forwardRef } from 'react';
import {
  View,
  Text,
  TextInputProps as RNTextInputProps,
  TextInput as RNTextInput,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { hp, wp } from 'shared/responsive-dimension';
import { colors } from 'styles/colors';

interface FormTextInputProps extends RNTextInputProps {
  label?: string;
  value?: string;
  containerStyle?: ViewStyle;
  textInputContainerStyle?: ViewStyle;
  isPassword?: boolean;
  show?: boolean;
  showPassword?: () => void;
}

const FormTextInput = forwardRef<RNTextInput, FormTextInputProps>(
  (
    {
      label,
      value,
      containerStyle,
      isPassword,
      showPassword,
      textInputContainerStyle,
      show,
      ...props
    },
    ref,
  ) => {
    return (
      <View>
        <Text style={styles.labelText}>{label}</Text>
        <RNTextInput
          style={[styles.textInput, textInputContainerStyle]}
          value={value}
          selectionColor={colors.green}
          secureTextEntry={show}
          {...{ ref }}
          {...props}
          focusable={true}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={showPassword}
            style={styles.showPasswordContainer}>
            <Icon
              name={show ? 'eye-off' : 'eye'}
              color={colors.white}
              size={hp(20)}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({

  labelText: {
    fontSize: hp(20),
    fontFamily: Fonts.AvenirNextBold,
    color: colors.white,
    paddingBottom: hp(10),
  },
  textInput: {
    height: hp(50),
    width: wp(335),
    borderRadius: hp(5),
    paddingLeft: hp(18),
    fontFamily: Fonts.AvenirNextRegular,
    color: colors.white,
    fontSize: hp(20),
    backgroundColor: colors.textInput,
    marginBottom: hp(25),
  },
  showPasswordContainer: {
    position: 'absolute',
    right: wp(20),
    bottom: hp(40),
  },
});

export default FormTextInput;
