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
    marginBottom: height * 0.01,
    marginHorizontal: width * 0.03,
  },
  navButtonCompact: {
    flexWrap: 'wrap', 
    backgroundColor: '#faf3e0',
    paddingVertical: height * 0.02, 
    paddingHorizontal: width * 0.04, 
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '30%', 
    marginHorizontal: width * 0.01, 
  },
  navText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: width * 0.045, 
    textAlign: 'center', 
  },
});