import { createTheme, lightColors, darkColors } from '@rneui/themed';
import { Platform } from 'react-native';
import { makeStyles } from '@rneui/themed';

//theme obj ref https://reactnativeelements.com/docs/customization/theme_object

//creates the hook useStyles() that needs to be exported
//put your styles here to be used on multiple pages
//import 'useStyles' from this file
const useStyles = makeStyles((theme, props) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.colors.grey3,
    width: props.fullWidth ? '100%' : 'auto',
  },
  txt: {
    color: theme.colors.primary,
  },
}));

//access with the useTheme() hook imported from '@rneui/themed'
const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
  darkColors: {
    primary: '#000',
    tertiary: '#124789',
    accent: '#908652',
    surface: '#0990763',
  },
  mode: 'light',
});

export { theme, useStyles };
