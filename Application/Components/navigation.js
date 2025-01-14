import { View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

export default function Navigation() {
  return (
    <View style={styles.quickNavigationCompact}>
      <TouchableOpacity style={styles.navButtonCompact}>
        <Text style={styles.navText}>Memory Vault</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButtonCompact}>
        <Text style={styles.navText}>Tutorial</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButtonCompact}>
        <Text style={styles.navText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  quickNavigationCompact: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: height * 0.01,
  },
  navButtonCompact: {
    backgroundColor: 'white',
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.05,
    borderRadius: 10,
  },
  navText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
});