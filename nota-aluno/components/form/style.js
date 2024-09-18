import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  form:{
    flex: 1,
    margin: '0 auto',
    alignItems: 'center',
    gap: '30px',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    color: '#fff'
  },
  input: {
    outline: 'none',
    border: '1px #e2b24d solid',
    color: '#e2b24d',
    padding: 20,
  },
  btn:{
    backgroundColor: '#fff', 
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    margin: '0 auto',
  },
  btnText:{
    fontWeight: 'bold',
  }
})

export default styles