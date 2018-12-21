import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';

export default class Calculadora extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  
  render() {
    console.log("render")
    return (
      <View style={styles.container}>        
        
        <View style={styles.boxRow} >
          <Text style={styles.text}>E-mail</Text>
          <TextInput style={styles.textInput} onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={styles.boxRow} >
          <Text style={styles.text}>Senha</Text>
          <TextInput style={styles.textInputSenha} secureTextEntry={true}  onChangeText={(senha) => this.setState({senha})}/>
        </View>

        <Button style={styles.button}
          onPress={this.onLogar}
          title="Logar"/>
        
      </View>
    );
  }


  onLogar(){
    Alert.alert("OK");
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

  textInput:{fontSize: 20, alignItems: 'stretch', height: 30, width: 200, borderWidth: 1  },

  textInputSenha:{fontSize: 20, alignItems: 'stretch', height: 30, width: 200, borderWidth: 1  },

  text: {fontSize: 20, height: 50, },
  
  boxRow: { flexDirection: 'row',  height: 40, width: 280, justifyContent: 'space-around', },
  
  botao: { flex: 1, justifyContent: 'space-around',  alignItems: 'center', borderWidth: 1, backgroundColor: '#DCDCDC', borderColor: '#F5F5F5'},

  

});
