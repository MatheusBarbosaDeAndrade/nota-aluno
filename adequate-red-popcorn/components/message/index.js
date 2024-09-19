import { Text, View } from 'react-native'
import styles from './style'

export default function Message({ veredito, nota }){
  return(
    <View>
      <Text style={styles.resultText}>{ veredito }</Text>
      <Text style={styles.resultText}>{ nota }</Text>
    </View>
  )
}