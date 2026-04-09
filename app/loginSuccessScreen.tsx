import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function LoginSuccessScreen() {
  const result = useLocalSearchParams<{ result: string }>()
  return (
    <View style={styles.container}>
      <Text>{result.result}</Text>
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
