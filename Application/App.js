import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions, SafeAreaView, StatusBar } from 'react-native'; // react elements 
import { FontAwesome } from '@expo/vector-icons'; // icons

const { width, height } = Dimensions.get('window');

// importing components
import MediaPlayer from './components/mediaPlayer';
import Controls from './components/controls';
import Navigation from './components/navigation';
import Library from './components/library';



// main
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      // to avoid shadowing device noftications, time, battery, etc.
      <StatusBar barStyle="light-content" backgroundColor="black" />

      // main app inter face
      <View style={[styles.header, styles.boxWithPadding]}>
        <View style={styles.logoContainer}>
          <Text style={styles.brand}>Spotify</Text>
          <Text style={styles.title}>Simplified Mode</Text>
        </View>
        <View style={styles.headerIcons}>
          <View style={styles.iconContainer}>
            <FontAwesome name="search" size={32} color='#1DB954' style={styles.icon} />
            <Text style={styles.iconText}>Search</Text>
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={32} color='#1DB954' style={styles.icon} />
            <Text style={styles.iconText}>Account</Text>
          </View>
        </View>
      </View>

      // components with features (find in components directory)
      <MediaPlayer />
      <Controls />
      <Navigation />
      <Library />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    alignSelf: 'center',
    width: '95%',
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: width * 0.04,
  },
  brand: {
    color: '#1DB954',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconContainer: {
    margin: 10,
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    marginTop: 5, 
    fontSize: width * 0.03,
  },
});

