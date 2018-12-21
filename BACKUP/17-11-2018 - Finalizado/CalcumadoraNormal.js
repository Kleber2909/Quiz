import React from 'react';
import { StyleSheet, Alert, Text, View, TouchableOpacity  } from 'react-native';

var numero1 = "";
var numero2 = "";
var operacao = "";
var txt = "";

export default class FirstScreen extends React.Component {

  static navigationOptions = {
    title: 'Calculadora normal',
  };

  constructor(props) {
    super(props);
    this.state = { myName: "" };
  }
 
  render() {
    console.log("render")
    return (
      <View style={styles.container}>
        <View>
          <Text id='txtNumero' style={styles.textInput} >{this.state.valorClicado} </Text>
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressLimpar.bind(this)} >
            <Text style={styles.text} >Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 1, "")} >
              <Text style={styles.text} >1</Text>              
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 2, "")} >
              <Text style={styles.text} >2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 3, "")} >
              <Text style={styles.text} >3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, "", "/")} >
              <Text style={styles.text} >/</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 4, "")} >
              <Text style={styles.text} >4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 5, "")} >
              <Text style={styles.text} >5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 6, "")} >
              <Text style={styles.text} >6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, "", "*")} >
              <Text style={styles.text} >*</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 7, "")} >
            <Text style={styles.text} >7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 8, "")} >
            <Text style={styles.text} >8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 9, "")} >
            <Text style={styles.text} >9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, "", "-")} >
            <Text style={styles.text} >-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.boxRow} >
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, 0, "")} >
            <Text style={styles.text} >0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, ".", "")} >
            <Text style={styles.text} >.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressResultado.bind(this)} >
            <Text style={styles.text} >=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.onPressNumero.bind(this, "", "+")} >
            <Text style={styles.text} >+</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'steelblue'}} />
      </View>
    );
  }

  onPressNumero(valor, oper){
    if(operacao == "")
      numero1 = numero1+""+valor
    else
    numero2 = numero2+""+valor
    console.log("Num 1 = " + numero1);
    console.log("Num 2 = " + numero2);

    if(operacao == "" && oper != "")
      operacao = oper;

    txt = txt + valor + oper;
    this.setState({      
      valorClicado: txt
    })
  }

  onPressLimpar(){
    numero1 = "";
    numero2 = "";
    operacao = "";
    txt = "";
    this.setState({      
      valorClicado: txt
    })
  }

  onPressResultado(){

    switch(operacao) {
      case "/":
        numero1 = parseFloat(numero1) / parseFloat(numero2);
        break;
      case "*":
        numero1 = parseFloat(numero1) * parseFloat(numero2);
        break;
      case "-":
        numero1 = parseFloat(numero1) - parseFloat(numero2);
        break;
      case "+":
        numero1 = parseFloat(numero1) + parseFloat(numero2);
        break;
      default:
        numero1 = 0.0
  }

    operacao = "";
    numero2 = "";
    txt = txt + "=" + numero1
    this.setState({      
      valorClicado: txt
    })
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