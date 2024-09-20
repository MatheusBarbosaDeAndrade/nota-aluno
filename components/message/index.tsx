import { Text, View } from 'react-native';
import styles from './style';

interface MessageProps {
  veredito: string;
  nota: number;
}

export default function Message({ veredito, nota }: MessageProps) {
  return (
    <View>
      <Text style={styles.resultText}>{veredito}</Text>
      <Text style={styles.resultText}>{nota}</Text>
    </View>
  );
}
