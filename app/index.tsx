import { SafeAreaView, StyleSheet } from 'react-native'
import Title from '../components/title/index'
import Form from '../components/form/index'

export default function App(){
  return(
    <SafeAreaView style={styles.background}>
      <Title />
      <Form />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background:{
    backgroundColor: '#0f0f0f',
    flex: 1,
    justifyContent: 'center'
  }
})