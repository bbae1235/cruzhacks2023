import { Platform, StyleSheet, Text, View, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <Image source={placeholderImageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
    //container: {
      //flex: 1,
      //backgroundColor: '#fdc700',
      //alignItems: 'center',
      //justifyContent: 'center',
    //},
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
    image: {
      width: 340,
      height: 280,
      borderRadius: 15,
      //Yellow
      backgroundColor: '#fdc700',
      alignItems: 'flex-start',
      justifyContent: 'top',
      paddingTop: 58,
    },
  });