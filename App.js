import React from 'react';
import { SafeAreaView, StyleSheet,View,} from 'react-native';
import Imagem from './src/components/title';
import Form from './src/components/forms';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'column',
          height: 100,
          padding: 20,
          justifyContent: 'center',
          width: 300,
          alignItems: 'center',
        }}>

        <Imagem/>

        <Form/>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    marginBottom: 20,
    borderWidth: 1,
    padding: 20,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center'
  },
});


export default App;
