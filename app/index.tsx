import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  function handleSubmit(){
    router.replace('/loginSuccessScreen')
  }

  return (
    <View style={styles.container}>
      <TextInput  placeholder='Username' onChangeText={setUsername} value={username}/>
      <TextInput  placeholder='Password' onChangeText={setPassword} value={password}/>
      <Button title='submit' onPress={handleSubmit}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
