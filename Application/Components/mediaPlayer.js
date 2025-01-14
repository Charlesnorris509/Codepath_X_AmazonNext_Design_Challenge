import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

export default function MediaPlayer() {
  return (
    <View style={[styles.nowPlaying, styles.boxWithPadding]}>
      <Text style={styles.nowPlayingText}>Now Playing</Text>
      <Text style={styles.songTitle}>I Love You So</Text>
      <Text style={styles.songArtist}>The Walters</Text>
      <View style={styles.controls}>
        <TouchableOpacity>
          <FontAwesome name="backward" size={40} color='#1DB954' />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="play-circle" size={56} color='#1DB954' />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="forward" size={40} color='#1DB954' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nowPlaying: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: height * 0.01,
    alignSelf: 'center',
    width: '90%',
  },
  nowPlayingText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: 5,
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
  controls: {
    flexDirection: 'row',
    marginTop: height * 0.01,
    justifyContent: 'space-between',
    width: '60%',
  },
    boxWithPadding: {
    padding: height * 0.02,
  },
});

