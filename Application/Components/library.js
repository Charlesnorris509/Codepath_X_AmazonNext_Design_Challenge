import { ScrollView, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

export default function Library() {
  return (
    <ScrollView style={styles.musicLibrary}>
        <Text style={[styles.libraryHeader, styles.boxWithPadding]}>Your Music Library</Text>
        <TouchableOpacity style={[styles.songItem, styles.boxWithPadding]}>
          <Text style={styles.songTitle}>I Love You So</Text>
          <Text style={styles.songArtist}>The Walters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.songItem, styles.boxWithPadding]}>
          <Text style={styles.songTitle}>Ivy</Text>
          <Text style={styles.songArtist}>Frank Ocean</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.songItem, styles.boxWithPadding]}>
          <Text style={styles.songTitle}>Let It Happen</Text>
          <Text style={styles.songArtist}>Tame Impala</Text>
        </TouchableOpacity>
        // more example songs to demonstrate scrolling
        <TouchableOpacity style={[styles.songItem, styles.boxWithPadding]}>
          <Text style={styles.songTitle}>Not Like Us</Text>
          <Text style={styles.songArtist}>Kendrick Lamar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.songItem, styles.boxWithPadding]}>
          <Text style={styles.songTitle}>See You Again</Text>
          <Text style={styles.songArtist}>Tyler, The Creator</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 musicLibrary: {
    marginVertical: height * 0.02,
  },
  libraryHeader: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: '95%',
  },
  songItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: height * 0.01,
    alignSelf: 'center',
    width: '90%',
  },
  songTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  songArtist: {
    fontSize: width * 0.035,
    color: 'gray',
  },
  boxWithPadding: {
    padding: height * 0.02,
  },
});