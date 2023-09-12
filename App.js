import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, styles.red]}>
        <Text>Square 1</Text>
      </View>
      <View style={[styles.square, styles.green]}>
        <Text>Square 2</Text>
      </View>
      <View style={[styles.square, styles.blue]}>
        <Text>Square 3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  square: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    backgroundColor: '#eb4034',
  },
  green: {
    backgroundColor: '#34eb8c',
  },
  blue: {
    backgroundColor: '#34b4eb',
  },
});
