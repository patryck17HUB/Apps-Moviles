import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import TextComponent from './components/TextXomponents';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tituloContainer}>
        <Text style={styles.title}> Mi biografía </Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('./assets/images/Geralt.jpg')} />
        </View>
      </View>
      <ScrollView>
        <TextComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6D6D6',
    marginTop: 30,
  },
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginRight: 20,
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex',
  },

});

export default App;