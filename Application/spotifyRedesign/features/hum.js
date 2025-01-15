import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  Animated,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function SearchModal({ visible, onClose }) {
  const [isTextSearch, setTextSearch] = useState(false); // toggle between hum and text search
  const pulseAnimation = useRef(new Animated.Value(1)).current; // animation for pulsing effect

  // start pulsing animation
  useEffect(() => {
    if (visible && !isTextSearch) {
      const pulse = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnimation, {
            toValue: 1.5,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnimation, {
            toValue: 1, 
            duration: 700,
            useNativeDriver: true,
          }),
        ])
      );
      pulse.start();

      return () => {
        pulse.stop(); 
        pulseAnimation.setValue(1); 
      };
    }
  }, [visible, isTextSearch]); 

  const handleTextSearch = () => {
    setTextSearch(true);
  };

  const handleBackToHum = () => {
    setTextSearch(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {!isTextSearch ? (
            <>
              {/* Humming Search Mock */}
              <Text style={styles.modalTitle}>Humming Search</Text>
              <View style={styles.humContainer}>
                {/* Animated pulsing circle around the microphone */}
                <Animated.View
                  style={[
                    styles.pulseCircle,
                    {
                      transform: [{ scale: pulseAnimation }],
                    },
                  ]}
                />
                <View style={styles.microphoneContainer}>
                  <FontAwesome name="microphone" size={70} color="#1DB954" />
                </View>
              </View>
              <Text style={styles.humText}>Hum the song you are looking for...</Text>

              {/* Switch to Text Search */}
              <TouchableOpacity
                style={styles.switchButton}
                onPress={handleTextSearch}
              >
                <Text style={styles.switchButtonText}>Search with Text</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* Text Search Mock */}
              <Text style={styles.modalTitle}>Text Search</Text>
              <Text style={styles.humText}>Type the song you are looking for...</Text>
              <TouchableOpacity
                style={styles.switchButton}
                onPress={handleBackToHum}
              >
                <Text style={styles.switchButtonText}>Back to Humming Search</Text>
              </TouchableOpacity>
            </>
          )}

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: '#faf3e0',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#1DB954',
    marginBottom: 20,
  },
  humContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  pulseCircle: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#1DB954',
    opacity: 0.3,
  },
  microphoneContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 140,
  },
  humText: {
    fontSize: width * 0.04,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  switchButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  switchButtonText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

