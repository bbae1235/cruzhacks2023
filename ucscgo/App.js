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
      <Button theme="primary" label="UCSC Landmarks Button" routeName = "UCSC Landmarks Name" />
      <View style={styles.space} />
      <Button theme="primary" label="UCSC Study Rooms Button" routeName = "UCSC Study Rooms Name" />
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
      <Button theme="primary" label="C9/JRL Hiking Trail button" routeName = "HikingTrail Name" />
      <View style={styles.space} />
      <Button theme="primary" label="Porter Caves/Meadows button" routeName = "Porter Name" />
      <View style={styles.space} />
      <Button theme="primary" label="Oakes Meadows button" routeName = "Oakes Name" />
      <View style={styles.space} />
      <Button theme="primary" label="Secret Area/Stage... button" routeName = "Secret Name" />
    </View>
    </View>
  );
}

function CNJR( navigation ) {
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary ">UCSC Go!</Text>
    </View>
    </View>
  );
}

//C9/C10 component
function HIKEcomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary">UCSC Go!</Text>
    </View>
    </View>
  );
}

function PORTERcomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary">UCSC Go!</Text>
    </View>
    </View>
  );
}

function OAKEScomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary">UCSC Go!</Text>
    </View>
    </View>
  );
}

function SECRETcomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary">UCSC Go!</Text>
    </View>
    </View>
  );
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
        name="UCSC Landmarks Name" 
        component={SCLandMarkcomp} 
        options={{ title: 'UCSC Landmarks'}} />
        {/* This is for landmarks */}

        <Stack.Screen
        name="HikingTrail Name"
        component={HIKEcomp}
        options={{ title: 'HikingTrail'}} />
        
      
        <Stack.Screen
        name="Porter Name"
        component={PORTERcomp}
        options={{ title: 'Porter Caves/Meadows'}} />

        <Stack.Screen
        name="Oakes Name"
        component={OAKEScomp}
        options={{ title: 'Oakes Meadows'}} />

        <Stack.Screen
        name="Secret Name"
        component={SECRETcomp}
        options={{ title: 'Secret Area/Stage...'}} />
      


      </Stack.Navigator>
    </NavigationContainer>
  );
  }
{/*      
    <NavigationContainer>
      <StackLandmark.Navigator initialRouteName="Landmark">
        <StackLandmark.Screen
        name="Landmark"
        component={SCLandMarkcomp}
        options={{ title: 'Landmark Overview'}} />
        <StackLandmark.Screen

        name="HikingTrail"
        component={HIKEcomp}
        options={{ title: 'HikingTrail name'}} />
        
      </StackLandmark.Navigator>
    </NavigationContainer> */}


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
