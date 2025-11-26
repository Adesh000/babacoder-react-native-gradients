import { View, StyleSheet } from 'react-native';
import { RadialGradient } from '@babacoder/react-native-gradients';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.gradientContainer}>
        <RadialGradient
          style={styles.gradient}
          colors={['#ff0000', '#00ff00', '#0000ff']}
          center={['50%', '50%']}
          radius={['50%', '50%']}
          stops={[0, 0.7, 1]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientContainer: {
    width: 300,
    height: 200,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
});
