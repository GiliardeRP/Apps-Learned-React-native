
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';

import { styles } from './styles';

import { Participant } from '../../components/Participant'; 

export const config = 'StyleShee';

export default function Home(){

  const participants = ['Rodrigo', 'Vine', 'Diego', 'Biro', 'kinguinho', 'ana', 'liza', 'pedro', 'mike', 'isa', 'joao', 'blac'];

  function handleParticipantAdd(){
      if(participants.includes("Rodrigo")){
        return Alert.alert("Participante Existe", " Já existe um participante na lista com este nome!")
        //return Alert.alert("VOCÊ CAIU NA PEGADINHA DO AMOR!!", "Saiba que Giliarde te ama muitom gatinha !!!!!")
      }
  }

  function handleParticipantRemove(name: string){
    Alert.alert("Remover",`Deseja remover o participante ${name}`, [
      {
        text:'Sim',
        onPress: ()=> Alert.alert("Deletado!")
      },
      {
        text:'Não',
        style:'cancel'
      }
    ]);
}

  return(
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do Evento
        </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2024
      </Text>

    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        //placeholder='APERTE O BOTÃO DE `+`'
        placeholderTextColor='#6B6B6B'
        
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>

    </View>

    <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant 
        key={item} 
        name={item} 
        onRemove={() => handleParticipantRemove(item)}
      />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>Ninguém chegou no role ainda, add ai!!!</Text>
      )}

    />
    



    </View>  
  )
}