import React from 'react';
import { StyleSheet, Alert, Text, TextInput, View, TouchableOpacity  } from 'react-native';


export default class FirstScreen extends React.Component {

  static navigationOptions = {
    title: 'Calculadora científica',
  };

  constructor(props) {
    super(props);
    this.state = { myName: "" };
  }
 
  render() {
    console.log("render")
    return (
      <View style={styles.container}>
        <View  >
          <TextInput id='txtNumeros' style={styles.textInput} keyboardType = 'number-pad'/>
          <Text id='txtNumero' style={styles.textInput} />
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
              <Text style={styles.text} >1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
              <Text style={styles.text} >2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
              <Text style={styles.text} >3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
              <Text style={styles.text} >/</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
              <Text style={styles.text} >4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
              <Text style={styles.text} >5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
              <Text style={styles.text} >6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
              <Text style={styles.text} >*</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
            <Text style={styles.text} >7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
            <Text style={styles.text} >8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
            <Text style={styles.text} >9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
            <Text style={styles.text} >-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
            <Text style={styles.text} >0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
            <Text style={styles.text} >.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
            <Text style={styles.text} >=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero} >
            <Text style={styles.text} >+</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'steelblue'}} />
      </View>
    );
  }

  onPressNumero(){
    txtNumeros.text = '1213';
    Alert.alert('Button clicked!');
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

  text: {fontSize: 20,}

});