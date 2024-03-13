import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/homePage';
import ListFIles from './screens/listFIles';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
      <ListFIles/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});
