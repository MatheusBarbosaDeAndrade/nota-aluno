import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import styles from './style'
import Message from '../message/index'

export default function Form(){

  const [nota1, setNota1] = useState(null)
  const [nota2, setNota2] = useState(null)
  const [resultado, setResultado] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const [veredito, setVeredito] = useState('Clique em CALCULAR para ver a média do aluno')

  const calculoDeNota = () => {
    const numNota1 = parseFloat(nota1)
    const numNota2 = parseFloat(nota2)
    return setResultado(((numNota1 + numNota2)/2).toFixed(1))
  }

  const vereditoFinal = () => {
    if(nota1 && nota2){
      calculoDeNota()
      setNota1('')
      setNota2('')
      setVeredito('A Média do aluno é:')
      setTextButton('Calcular novamente')
    } else {
      setResultado(null)
      setTextButton('Calcular')
      setVeredito('Clique em CALCULAR para ver a média do aluno')
    }
  }


  return(
    <View style={styles.form}>
      <View>
        <Text style={styles.label}>Digite a PRIMEIRA nota do aluno</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={setNota1} value={nota1} placeholder='Ex.: 8.5'></TextInput>
      </View>

      <View>
        <Text style={styles.label}>Digite a SEGUNDA nota do aluno</Text>
        <TextInput style={styles.input} keyboardType='numeric' onChangeText={setNota2} value={nota2} placeholder='Ex.: 6.5'></TextInput>
      </View>

      <View>
        <TouchableOpacity 
        style={styles.btn}
        onPress={vereditoFinal}
        >
          <Text style={styles.btnText}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <Message veredito={veredito} nota={resultado}/>
    </View>
  )
}