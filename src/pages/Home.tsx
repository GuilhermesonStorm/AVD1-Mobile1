import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, TouchableOpacityProps,  } from 'react-native'; 
import { Button } from '../components/Button';
import { Container, Title, Input, DeleteUserButton, DeleteButtonText } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DataTable } from 'react-native-paper';
import {Provider} from 'react-native-paper'

interface IUser {
  id: string;
  chave: string;
  escolaridade: string;
}

type ButtonProps = TouchableOpacityProps;

export function Home() {
  const [newEscolaridade, setNewEscolaridade] = useState('');
  const [newChave, setNewChave] = useState('');
  const [ users, setUsers ] = useState<IUser[]>([]);


  function handleAddNewRegister(){
    if(newEscolaridade === '') {
      alert('Favor, preecher o campo vazio.');
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      chave: newChave,
      escolaridade: newEscolaridade
    }

    setUsers([...users, data]);
    setNewChave('');
    setNewEscolaridade('');

  }

  function handleRemoveUser( id: string) {
    setUsers(users => users.filter(user => user.id !== id))
  }

  useEffect(() => {
    async function loadData() {
      const storagedData = await AsyncStorage.getItem('@Users:user');
      if(storagedData) {
        setUsers(JSON.parse(storagedData));
      }
    }
    loadData();
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@Users:user', JSON.stringify(users));
    }
    saveData();    
  }, [users])
  return (
    <>
    
    <Provider>
      <Container> 
        <Title>Hello! </Title>

        <Input 
        placeholder='Chave'
        placeholderTextColor='#dcdcdc'
        value={newChave}
        onChangeText={value => setNewChave(value)}
        />


        <Input 
        placeholder='Escolaridade'
        placeholderTextColor='#dcdcdc'
        value={newEscolaridade}
        onChangeText={value => setNewEscolaridade(value)}
        />

        <Button 
          title="Add"
          onPress={handleAddNewRegister}/>
      
        
        <Title>Registros cadastrados:</Title>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Chave</DataTable.Title>
            <DataTable.Title>Escolaridade</DataTable.Title>
            <DataTable.Title>Deletar</DataTable.Title>
          </DataTable.Header>

          {users.map(user => (
            <DataTable.Row key={user.id}>
              <DataTable.Cell>{user.chave}</DataTable.Cell>
              <DataTable.Cell>{user.escolaridade}</DataTable.Cell>
              <DataTable.Cell>
                <DeleteUserButton onPress={() => handleRemoveUser(user.id)}>
                  <DeleteButtonText>X</DeleteButtonText>
                </DeleteUserButton></DataTable.Cell>
            </DataTable.Row>

          ))}
          
        </DataTable>
        

      </Container> 

      </Provider>
      
    </>
  );
}