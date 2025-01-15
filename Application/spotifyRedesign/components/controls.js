import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

export default function Controls() {
  return (
    <View style={styles.volumeControl}>
      <TouchableOpacity>
        <FontAwesome name="minus" size={width * 0.15} color='#1DB954' />
      </TouchableOpacity>
      <FontAwesome name="volume-up" size={width * 0.15} color='#1DB954' style={styles.volumeIcon} />
      <TouchableOpacity>
        <FontAwesome name="plus" size={width * 0.15} color='#1DB954' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 volumeControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  volumeIcon: {
    marginHorizontal: width * 0.02,
  },
});