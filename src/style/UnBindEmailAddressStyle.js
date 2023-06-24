import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    label: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 'bold',
    },
    emailContainer: {
      marginTop: 10,
    },
    emailText: {
      textAlign: 'center',
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
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    input: {
      width: 250,
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    submitButton: {
      backgroundColor: '#5271FF',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    submitButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default styles;

  const textStyle = StyleSheet.create({
    text: {
      marginTop: 20,
      fontSize: 18,
      alignItems: 'center',
    },
  });
  
  export { textStyle };