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
      <Button theme="primary" label="UCSC Study Rooms Button" routeName = "UCSC SR Name" />
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
    <Text theme="primary" style={[styles.setFontSizeThree]}>
    As a new student at UCSC, College Nine and John R. Lewis College is one of the many
    areas that you may visit at your time here! The college is home to the trail which 
    consists of the buddha shrine, painted barrels, tree nine, and much more! 
    ------------------------------------------ 
    Either you are looking forward to exploring/appreciating nature or you are looking to 
    take time for yourself, the trail is meant to give you a peaceful state of mind. We all
    need this sort of outlet at some point in our lives and something about nature gives our
    mind exactly what we need. 
    ------------------------------------------
    Well the big question is where can we find this trail? Assuming you don't know the layout
    of the college, the easiest route to get there is to locate College Nine Apartments. The 
    Apartments are located at the VERY back of the college, where you'll see Parking Lot 167
    and the entrance to the trail next to it! Be sure to bring some water, snacks, a fully 
    charged phone, and maybe a friend to tag along with you to enjoy this experience!
    </Text>
    </View>
    </View>
  );
}

function PORTERcomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary" style={[styles.setFontSizeThree]}>
     One our favorite student experiences is going to the Porter Caves & Meadows, in 
     which we believe everyone should go at least once! To get to the caves, you must 
     first reach the meadows. This includes a nice nature trail that UCSC students go
     and pass their time. Whether you're just exploring or having a picnic, the experience
     is very peaceful. Porter's Cave requires you to get yourself a bit dirty as it is very
     wet and cold. 
     ------------------------------------------
     Now, how would get there? First you'd need to get towards the meadows. The meadows are 
     located in the field next to Porter Dining Hall. You'll first head towards that area,
     to which you should be walking down a small slope to enter. Now getting to the cave 
     itself is a bit tricky but you'll need to go straight and turn a right near Empire
     Grade. You'll have to get there from a hill and climbing down. It is highly advised to
     bring along a friend and clothes you do not mind getting dirty as you start your journey!
    </Text>
    </View>
    </View>
  );
}

function OAKEScomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary" style={[styles.setFontSizeThree]}>
    If you're looking to start small with popular locations at UCSC then Oakes Meadows
    is for you! If you make your way to the general area of Oakes Cafe, you should see
    a bridge! But what about the bridge? Well, below you'll see what is called the Oakes
    Meadows. A beautiful area for one to relax or just enjoy being in another peaceful 
    area. Have you noticed that a lot of Santa Cruz tends to be peaceful? That's what we 
    love about! Like we stated before, there's not a lot to do here but you're able to 
    enjoy the area once in a while.
    ------------------------------------------
    There's a couple ways to get down there. One way is to head towards the direction of the 
    parking lot, to which you'll be at the same height level of the meadows. If you're feeling
    adventerous, you can go around and pass Oakes Lawn, to which you'll be at the same height 
    level of the meadows. Like always, enjoy yourself and bring along a friend to relax and 
    observe the deers!
    </Text>
    </View>
    </View>
  );
}

function SECRETcomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary" style={[styles.setFontSizeThree]}>
    Lastly, for now, we want to introduce to you a "secret area" that us students have 
    found. At night, some of us like to be adventerous and take a walk in the forest with
    your roommates. There's no offical name of the area, that we know of, but it's one of 
    most secretive areas to stargaze! The area is located near some stage where you can 
    either sit on or laydown to view the stars.    
    ------------------------------------------
    The only issue about this is that there's no specifc location to get to the stage. The 
    only real way to get to the area is to walk near the forsts of Ker Hall, which you can 
    locate on your phone! In the future, we will provide photo documentation of the area 
    along with specifics on how to get there! Til then, you can make it challenge on yourself
    to find the area or don't! It all depends on how you feel about but like we always say, bring
    a friend if you can!
    </Text>
    </View>
    </View>
  );
}

function STUDYROOMcomp( navigation ) {
  return (
    <View style={styles.container}>
    <View style={styles.footerContainer}>
      <View style={styles.space} />
      {/* Buttons within UCSC Landmarks */}
      <Button theme="primary" label="C9/JRL button" routeName = "C9C10Study Name" />
      <View style={styles.space} />
      <Button theme="primary" label="PorterKresge button" routeName = "PorterKresgeStudy Name" />
      <View style={styles.space} />
      <Button theme="primary" label="RCCOakes button" routeName = "RCCOakes Name" />
      <View style={styles.space} />
      <Button theme="primary" label="StevensonCowell" routeName = "StevensonCowell Name" />
      <View style={styles.space} />
      <Button theme="primary" label="CrownMerrill" routeName = "CrownMerrill Name" />
    </View>
    </View>
  );
}

function C9C10comp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary">UCSC GO!</Text>
    </View>
    </View>
  );
}

function PorterKresgecomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary">UCSC Go!</Text>
    </View>
    </View>
  );
}

function RCCOakescomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary">UCSC Go!</Text>
    </View>
    </View>
  );
}

function StevensonCowellcomp( navigation ){
  return(
    <View style={styles.container}>
    <View style={styles.footerContainer}>
    <Text theme="primary">UCSC Go!</Text>
    </View>
    </View>
  );
}

function CrownMerrillcomp( navigation ){
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
        options={{ title: 'Home'}} />

        <Stack.Screen
        name="UCSC SR Name"
        component={STUDYROOMcomp}
        options={{ title: 'UCSC Study Rooms'}} />

        <Stack.Screen
        name="C9C10Study Name"
        component={C9C10comp}
        options={{ title: 'College 9/JRL Study Rooms'}} />

        <Stack.Screen
        name="PorterKresgeStudy Name"
        component={PorterKresgecomp}
        options={{ title: 'Porter/Kresge Study Rooms'}} />

        <Stack.Screen
        name="RCCOakes Name"
        component={RCCOakescomp}
        options={{ title: 'RCC/Oakes Study Rooms'}} />
        
        <Stack.Screen
        name="StevensonCowell Name" 
        component={StevensonCowellcomp} 
        options={{ title: 'Stevenson/Cowell Study Rooms'}} />

        <Stack.Screen
        name="CrownMerrill Name" 
        component={CrownMerrillcomp} 
        options={{ title: 'Crown/Merrill Study Rooms'}} />
        
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
  },
  setFontSizeThree: {
    fontSize: 20 // Define font size here in Pixels
  },
})
