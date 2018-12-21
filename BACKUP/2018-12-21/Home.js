import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import {signup} from './Firebase';

export default class Home extends React.Component {
  
  propsApp = "";

  constructor(props) {
    super(props);
    propsApp = props;
    this.state = {email: '', senha: '' };
  }
  
  static navigationOptions = {
    title: 'Login',
    
  };
  
  render() {
    return (
      
      <View style={styles.container}>        
        <View style={styles.boxRow} >
          <Text style={styles.text}>Nome</Text>         
        </View>
         
        <View style={styles.boxRow} >
          <Text style={styles.text}>E-mail</Text>
          <TextInput placeholder = "Informe seu e-mail" keyboardType = "email-address" returnKeyType = "next" style={styles.textInput} onChangeText={(email) => this.setState({email})}/>
        </View>

        <View style={styles.boxRow} >
          <Text style={styles.text}>Senha</Text>
          <TextInput placeholder = "Informe uma senha" returnKeyType = "go" style={styles.textInputSenha} secureTextEntry={true}  onChangeText={(senha) => this.setState({senha})}/>
        </View>

        <Button style={styles.button}
          onPress={this.onCriarUsuario}
          title="Logar"/>
        
      </View>      
    );
  }

  onCriarUsuario = () => {
    const { email, senha } = this.state
    console.log('Email: ' + email + ' Senha ' + senha);
    signup(email.toString().toLowerCase(), senha, propsApp); 
    //signup("emaial@emao.com", "senha1111111111", propsApp); 
  };
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
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
