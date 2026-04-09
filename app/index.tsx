import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { dummySuccessApi } from '@/api';

export default function HomeScreen() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false);


  async function handleSubmit(){
    setSubmitDisabled(true);
    let result = await dummySuccessApi();
    setSubmitDisabled(false);
    router.replace({pathname: '/loginSuccessScreen', params: {result}})
  }

  return (
    <View style={styles.container}>
      <TextInput  placeholder='Username' onChangeText={setUsername} value={username}/>
      <TextInput  placeholder='Password' onChangeText={setPassword} value={password}/>
      <Button title='Submit' onPress={handleSubmit} disabled={submitDisabled}/>
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
