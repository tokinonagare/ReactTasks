import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 667,
    // width: 375,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    backgroundColor: '#0000000f',
    alignItems: 'center',
  },
});

const textStyle = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 18,
    alignItems: 'center',
  },
});

export { styles, textStyle };
