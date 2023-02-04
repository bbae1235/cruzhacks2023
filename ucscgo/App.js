import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image } from 'react-native'; // Added platform

//These are the components
import ImageViewer from './components/ImageViewer'; //homescreen image
//import Button from './components/Button';

//const ucscImage = require('./assets/UCSCGo.png');
const placeholderImage = require('./assets/UCSCGo.png');


{/* This is the beginning of the App function */}
export default function App() {
{/* console.log("App started"); //This is like a print statement to your terminal */}
{/* Pathway: /workspaces/cruzhacks2023/ucscgo/assets/ucscgobackground2.0.png */}
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} /> 
      </View> 
      {/*<View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} /> 
      </View>*/}
      <StatusBar style = "auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 0,
    minHeight: 100,
    // Changes padding of the top, white space above
    paddingTop: 58,
    //blue
    backgroundColor: '#003c6c',
    //horizontal
    alignItems: 'center',
    // Top-Bottom
    justifyContent: 'flex-start',
  },
})
