import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function MediaPlayer({ song, onNext, onPrevious }) {
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const animationValues = useRef([
    new Animated.Value(1),
    new Animated.Value(1),
    new Animated.Value(1),
  ]).current;

  // Function to start the line animation
  const startAnimation = () => {
    const animations = animationValues.map((anim, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: index === 1 ? 2 : 1.8,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ])
      )
    );
    animations.forEach((animation) => animation.start());
  };

  // Function to stop the line animation
  const stopAnimation = () => {
    animationValues.forEach((anim) => anim.stopAnimation());
  };

  // Toggle play/pause and animation
  const togglePlayPause = () => {
    setIsPlaying((prevState) => {
      const nextState = !prevState;
      if (nextState) startAnimation();
      else stopAnimation();
      return nextState;
    });
  };

  // Reset animation and start playing when the song changes
  useEffect(() => {
    stopAnimation();
    setIsPlaying(true); // Automatically play the song when it changes
    startAnimation();
  }, [song]);

  return (
    <View style={[styles.nowPlaying, styles.boxWithPadding]}>
      <Text style={styles.nowPlayingText}>Now Playing</Text>
      <Text style={styles.songTitle}>{song.title}</Text>
      <Text style={styles.songArtist}>{song.artist}</Text>
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => { stopAnimation(); onPrevious(); }}>
          <FontAwesome name="backward" size={50} color="#1DB954" />
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlayPause}>
          <FontAwesome
            name={isPlaying ? 'pause-circle' : 'play-circle'}
            size={65}
            color="#1DB954"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { stopAnimation(); onNext(); }}>
          <FontAwesome name="forward" size={50} color="#1DB954" />
        </TouchableOpacity>
      </View>

      {/* Animated lines for visualization */}
      <View style={styles.animationContainer}>
        {animationValues.map((anim, index) => (
          <Animated.View
            key={index}
            style={[
              styles.animationLine,
              index === 1 ? styles.middleLine : styles.sideLine,
              {
                transform: [{ scaleY: anim }],
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nowPlaying: {
    backgroundColor: '#faf3e0',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: height * 0.01,
    alignSelf: 'center',
    width: '90%',
  },
  nowPlayingText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  songTitle: {
    fontSize: width * 0.1,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  songArtist: {
    fontSize: width * 0.05,
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
  animationContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    right: 15,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 30,
    width: 30,
  },
  animationLine: {
    backgroundColor: 'rgba(29, 185, 84, 0.6)',
    borderRadius: 2,
    marginHorizontal: 0.5,
  },
  middleLine: {
    width: 5,
    height: '100%',
  },
  sideLine: {
    width: 4,
    height: '80%',
  },
});


