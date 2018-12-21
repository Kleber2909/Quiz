import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

export default class Calculadora extends React.Component {
  static navigationOptions = {
    title: 'Calculadora',
  };
  
  render() {
    console.log("render")
    return (
      <View style={styles.container}>        
        <View  >
          <Text style={styles.text}>Escolha um tipo de Calculadora</Text>
          
        <Button style={styles.button}
          onPress={() => this.props.navigation.navigate('CalcNormal')}
          title="Calculadora Normal"/>
        
          <Text style={{height: 30}}></Text>
        
        <Button style={styles.button}
          onPress={() => this.props.navigation.navigate('CalCientifica')}
          title="Calculadora Científica"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    
    flex: 1, 
  },

  textInput:{fontSize: 20, margin: 15, alignItems: 'stretch', height: 30, width: 290, borderWidth: 1  },

  boxRow: { flexDirection: 'row', backgroundColor: 'skyblue', height: 40, width: 300, justifyContent: 'space-around', },
  
  botao: { flex: 1, justifyContent: 'space-around',  alignItems: 'center', borderWidth: 1, backgroundColor: '#DCDCDC', borderColor: '#F5F5F5'},

  text: {fontSize: 20, height: 60}

});
