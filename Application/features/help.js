import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HelpModal({ visible, onClose }) {
  const [content, setContent] = useState("How can we help?");

  const handleOption1 = () => setContent("** Here's how to find your music... **");
  const handleOption2 = () => setContent("** Here's what you can do next... **");
  const handleOption3 = () => setContent("** Troubleshooting sound issues... **");
  const handleOption4 = () =>
    setContent(
      "The Memory Vault allows you to easily access your favorite and past-listened songs, minimizing the struggle of recalling favorite songs!"
    );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Help Center</Text>
          <Text style={styles.modalText}>{content}</Text>

          {/* Option Buttons */}
          <TouchableOpacity style={styles.optionButton} onPress={handleOption1}>
            <Text style={styles.optionButtonText}>I can't find my music</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleOption2}>
            <Text style={styles.optionButtonText}>I'm not sure what to do</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleOption3}>
            <Text style={styles.optionButtonText}>I don't hear anything</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleOption4}>
            <Text style={styles.optionButtonText}>What is the Memory Vault?</Text>
          </TouchableOpacity>

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
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#1DB954',
    marginBottom: 20,
  },
  modalText: {
    fontSize: width * 0.04,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1DB954',
  },
  optionButtonText: {
    color: '#1DB954',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#1DB954',
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
