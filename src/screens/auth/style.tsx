import { Fonts } from 'assets/fonts';
import { StyleSheet } from 'react-native';
import { hp } from 'shared/responsive-dimension';
import { colors } from 'styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBlack,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(250),
  },
  headerText: {
    fontFamily: Fonts.AvenirNextBold,
    color: colors.white,
    paddingTop: hp(15),
    textAlign: 'center',
    fontSize: hp(24),
  },
  buttonStyle: {
    marginTop: hp(240),
  },
  titleStyle: {
    color: colors.white,
  },
  loginButtonStyle: {
    backgroundColor: 'transparent',
    marginTop: hp(10),
  },
});
