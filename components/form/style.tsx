import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  form:{
    flex: 1,
    margin: 'auto',
    alignItems: 'center',
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 5,
    color: '#fff'
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2b24d',
    color: '#e2b24d',
    padding: 20,
  },
  btn:{
    backgroundColor: '#fff', 
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  btnText:{
    fontWeight: 'bold',
  }
})

export default styles