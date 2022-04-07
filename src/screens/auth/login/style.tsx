import { StyleSheet } from 'react-native';
import { hp, wp } from 'shared/responsive-dimension';
import { colors } from 'styles/colors';

export const styles = StyleSheet.create({
  formContainer: {
    marginTop: hp(20),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonStyle: {
    width: wp(102),
    height: hp(49),
    marginTop: hp(20),
    backgroundColor: colors.white,
  },
});
