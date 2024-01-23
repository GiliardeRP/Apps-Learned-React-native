
import { Text, View } from 'react-native';

export default function App(){
  return(
    <View style={{
      flex: 1,
      backgroundColor: '#131016'
    }}>
      <Text style={{
        color:'white',
        fontWeight: 'blod',
        fontSize:24,
        marginTop: 48
      }}>
        Nome do Evento
        </Text>
      <Text style={{
        color:'#6B6B6B',
        fontSize: 16
      }}>
        Sexta, 4 de Novembro de 2024
      </Text>
    </View>  
  )
}