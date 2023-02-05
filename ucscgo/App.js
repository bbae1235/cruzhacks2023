import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image } from 'react-native'; // Added platform

//This is from react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



//These are the components
import ImageViewer from './components/ImageViewer'; //homescreen image
import Button from './components/Button';

//This is the HomeScreen "component"
function HomeScreencomp({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} /> 
      </View>
      {/*app name*/}
    <View style={styles.title}>
      <Text style={[styles.setFontSizeFour, styles.setColorYellow]}>UCSC Go!</Text>
      <StatusBar style="auto" />
    </View>
      {/*Buttons*/}
      <View style={styles.footerContainer}>
      <View style={styles.space} />
      <Button theme="primary" label="UCSC Landmarks Button" />
      <View style={styles.space} />
      <Button theme="secondary" label="UCSC Study Rooms Button" />
      <View style={styles.space} />
      </View>
  
      <StatusBar style = "auto" />
    </View>
  );
}

//This is the Santa Cruz Landmarks component
function SCLandMarkcomp( navigation ) {
  return (
    <View style={styles.container}>
    <View style={styles.footerContainer}>
      <View style={styles.space} />
      {/* Buttons within UCSC Landmarks */}
      <Button theme="primary" label="C9/JRL Hiking Trail" />
      <View style={styles.space} />
      <Button theme="primary" label="Porter Caves/Meadows" />
      <View style={styles.space} />
      <Button theme="primary" label="Oakes Meadows" />
      <View style={styles.space} />
      <Button theme="primary" label="Secret Area/Stage..." />
      </View>
      </View>
  );
}

//C9/C10 component
function HIKEcomp( navigation ){
  return (
    <View style={styles.container}>
    <View style={styles.footerContainer}></View>
    <Text>UCSC Go!</Text>
    </View>
  );
}

//Study Rooms component
function StudyRoomscomp( navigation ) {
  return (
    <View style={styles.footerContainer}>
      {/* Buttons within UCSC Study Rooms */}
      <Button theme="Study Rooms" label="C9/JRL College" />
      <Button theme="Study Rooms" label="Crown/Merrill" />
      <Button theme="Study Rooms" label="Cowell/Stevenson" />
      <Button theme="Study Rooms" label="Porter/Kresge" />
      <Button theme="Study Rooms" label="Rachel Carson/Oakes" />
    </View>
  )
}

//const ucscImage = require('./assets/UCSCGo.png');
const placeholderImage = require('./assets/UCSCGo.png');

//The Native Stack Navigator variable
const Stack = createNativeStackNavigator();


{/* This is the beginning of the App function */}
export default function App() {
{/* console.log("App started"); //This is like a print statement to your terminal */}
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        /* Name is used to navigate
          and Component is the component it'll render */
        name="Home"
        component={HomeScreencomp}
        options={{ title: 'Overview'}} />
        <Stack.Screen
      
        name="UCSC Landmarks name" 
        component={SCLandMarkcomp} 
        options={{ title: 'UCSC Landmarks'}} />
        {/* This is for landmarks */}
        <Stack.Screen
        name="UCSC Study Rooms" 
        component={StudyRoomscomp} 
        options={{ title: 'UCSC StudyRooms'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
{/*      
<Stack.Navigator initialRouteName="UCSC Landmarks">
<Stack.Screen 
name="C9/JRL Hiking Trail" 
component={HIKE} 
options={{ title: 'College 9/ JRL Trails'}} />
</Stack.Navigator> */}


{/*This is for Study Rooms */}
{/*
<Stack.Navigator initialRouteName="Home">
<Stack.Screen
name="Study Rooms" 
component={StudyRooms} 
options={{ title: 'UCSC Study Rooms'}} />
</Stack.Navigator>
*/}

const styles = StyleSheet.create({
  //container for whole screen
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
  //container for buttons
  footerContainer: {
    // Button POS
    flex: 2, 
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  setFontSizeFour: {
    fontSize: 30 // Define font size here in Pixels
  },
  setColorYellow :{
    color: '#FFFF00'
  },
  setColorBlack :{
    color: '#000000'
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  SCLandMark: {
    backgroundColor: '#003c6c'
  }
})
