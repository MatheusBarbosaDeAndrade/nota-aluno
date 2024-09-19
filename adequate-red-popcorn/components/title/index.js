import { View, Text } from 'react-native'
import styles from './style'

export default function Title(){
  return(
    <View>
      <Text style={styles.title}>Calculadora de Notas</Text>
    </View>
  )
}