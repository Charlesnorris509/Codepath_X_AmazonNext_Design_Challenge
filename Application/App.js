import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// import components
import MediaPlayer from './components/mediaPlayer';
import Controls from './components/controls';
import Navigation from './components/navigation';
import Library from './components/library';

// import feature views
import HelpModal from './features/help';
import SearchModal from './features/hum';

const { width, height } = Dimensions.get('window');



export default function App() {
  // welcome modal
  const [isModalVisible, setModalVisible] = useState(true); // welcome modal visibility
  const [simplifiedMode, setSimplifiedMode] = useState(false); // simplified content visibility
  const handleSimplifiedMode = (choice) => {
    setModalVisible(false); // close modal
    if (choice) setSimplifiedMode(true); // enable simplified mode if user presses "Yes"
  };
  

  // media player functionality
  const [playlist, setPlaylist] = useState([
    { title: 'I Love You So', artist: 'The Walters', cover: 'https://i.scdn.co/image/ab67616d0000b273acf9c94f73fede70cca51d5e' },
    { title: 'Ivy', artist: 'Frank Ocean', cover: 'https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526' },
    { title: 'Let It Happen', artist: 'Tame Impala', cover: 'https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79' },
    { title: 'Not Like Us', artist: 'Kendrick Lamar', cover: 'https://i.scdn.co/image/ab67616d0000b2731ea0c62b2339cbf493a999ad' },
    { title: 'See You Again', artist: 'Tyler, The Creator', cover: 'https://i.scdn.co/image/ab67616d0000b2738940ac99f49e44f59e6f7fb3' },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const selectSong = (index) => setCurrentSongIndex(index);
  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };
  const previousSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };


  const [isHelpVisible, setHelpVisible] = useState(false); // help modal visibility
  const [isSearchVisible, setSearchVisible] = useState(false); // search modal visibility

  

  // main app dashboard view
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* Welcome Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Welcome to <Text style={styles.spotifyModalLogo}>Spotify</Text>
            </Text>
            <Text style={styles.modalText}>
              Would you like to enable the simplified interface for easier use?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#1DB954' }]}
                onPress={() => handleSimplifiedMode(true)}
              >
                <Text style={styles.modalButtonText}>Yes, Please</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#b1b0b0' }]}
                onPress={() => handleSimplifiedMode(false)}
              >
                <Text style={styles.modalButtonText}>Maybe Later</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Help Modal */}
      <HelpModal visible={isHelpVisible} onClose={() => setHelpVisible(false)} />

      {/* Search Modal */}
      <SearchModal visible={isSearchVisible} onClose={() => setSearchVisible(false)} />

      {!isModalVisible && simplifiedMode && (
        <>
          <View style={[styles.header, styles.boxWithPadding]}>
            <View style={styles.logoContainer}>
              <Text style={styles.brand}>Spotify</Text>
              <Text style={styles.title}>Simplified Mode</Text>
            </View>
            <View style={styles.headerIcons}>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => setSearchVisible(true)}>
                  <FontAwesome name="search" size={32} color="#1DB954" />
                </TouchableOpacity>
                <Text style={styles.iconText}>Search</Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity>
                  <FontAwesome name="user" size={32} color="#1DB954" />
                </TouchableOpacity>
                <Text style={styles.iconText}>Account</Text>
              </View>
            </View>
          </View>


      {/* Components (see ./components directory) */}
      <MediaPlayer
        song={playlist[currentSongIndex]}
        onNext={nextSong}
        onPrevious={previousSong}
      />
      <Controls />
      <Navigation />
      <Library playlist={playlist} onSelectSong={selectSong} />
        </>
      )}


      {/* Help Button */}
      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => setHelpVisible(true)}
      >
        <FontAwesome name="question-circle" size={40} color="#1DB954" />
      </TouchableOpacity>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  spotifyModalLogo: {
    fontWeight: 'bold',
    marginVertical: 2,
    color: '#1DB954',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#969595',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
  },
  helpButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});


