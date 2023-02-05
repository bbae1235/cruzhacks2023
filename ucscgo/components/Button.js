import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Button({ label, theme }) {
    const navigation = useNavigation()
    if (theme === "primary") {
        return (
          <View
          style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18}]}
          >
            <Pressable
              style={[styles.button, { backgroundColor: "#fff" }]}
              onPress={() => navigation.navigate('UCSC Landmarks name')}
            >
              <FontAwesome
                //name=""
                size={16}
                color="#25292e"
                style={styles.buttonIcon}
              />
              <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
            </Pressable>
        </View>
        );
    }
    if (theme == "secondary") {
      return (
        <View
        style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18}]}
        >
          <Pressable
            style={[styles.button, { backgroundColor: "#fff" }]}
            onPress={() => navigation.navigate('UCSC Study Rooms')}
          >
            <FontAwesome
              //name=""
              size={16}
              color="#25292e"
              style={styles.buttonIcon}
            />
            <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
          </Pressable>
      </View>
      );
    }

    return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You have pressed the button')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
  //Alert is called by pressable when onPress happens
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
