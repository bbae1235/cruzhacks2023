import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image } from 'react-native'; // Added platform

const ucscImage = require('./assets/UCSCGo.png');
///workspaces/cruzhacks2023/ucscgo/assets/UCSCGo.png
//<Image source={require('./img/workspaces/cruzhacks2023/ucscgo/assets/ucscgobackground2.0.png')} />

export default function App() {
  //console.log("App started"); //This is like a print statement to your terminal
  ///Pathway: /workspaces/cruzhacks2023/ucscgo/assets/ucscgobackground2.0.png
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ucscImage} style={styles.image} />
      </View>
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
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  //setFontSizeThree: {
    //fontSize: 25 // Define font size here in Pixels
  //},
});
