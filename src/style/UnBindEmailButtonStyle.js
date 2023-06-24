import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    marginTop: 420,
    width: 300,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#5271FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#5271FF',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  buttonTextPressed: {
    color: 'white',
  }
});

export default styles;
