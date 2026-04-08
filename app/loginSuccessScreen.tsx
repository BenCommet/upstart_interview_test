import { StyleSheet, Text, View } from 'react-native';

export default function LoginSuccessScreen() {
  return (
    <View style={styles.container}>
      <Text>Success</Text>
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
