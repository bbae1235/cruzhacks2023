import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.setFontSizeThree}>Welcome to UCSC Go!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76ba76',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setFontSizeThree: {
    fontSize: 25 // Define font size here in Pixels
  },
});
