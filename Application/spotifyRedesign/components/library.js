import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function Library({ playlist, onSelectSong }) {
  return (
    <ScrollView style={styles.musicLibrary}>
      {playlist.map((song, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.songItem, styles.boxWithPadding]}
          onPress={() => onSelectSong(index)}
        >
          <Image source={{ uri: song.cover }} style={styles.songCover} />
          <View style={styles.textContainer}>
            <Text style={styles.songTitle}>{song.title}</Text>
            <Text style={styles.songArtist}>{song.artist}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  musicLibrary: {
    marginBottom: height * 0.02,
    backgroundColor: '#faf3e0',
    borderRadius: 10,
    paddingTop: height * 0.025,
    paddingHorizontal: width * 0.05,
    marginHorizontal: width * 0.05,
  },
  songItem: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    marginBottom: height * 0.025,
    alignSelf: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  songCover: {
    width: width * 0.15, 
    height: width * 0.15, 
    borderRadius: 10, 
    marginRight: width * 0.03, 
  },
  textContainer: {
    justifyContent: 'center',
    flexShrink: 1, 
  },
  songTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginVertical: 2,
    color: '#1DB954',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  songArtist: {
    fontSize: width * 0.035,
    color: 'gray',
  },
  boxWithPadding: {
    padding: height * 0.02,
  },
});




