import React from 'react';
import { StyleSheet, Button, ScrollView, Alert, Image, Text, View, TouchableHighlight, TouchableOpacity  } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var idPergunta = 0;
var gabarito = ["1", "3", "1", "4", "0"];
var acerto = [0, 0, 0, 0, 0];
var selecionado = "-1";
var radio_props; 
email = "";

export default class Perguntas extends React.Component {

  static navigationOptions = {
    title: 'Quiz sobre peixes',
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    email = navigation.getParam('email', '');
    this.state = {uri: require('./img/img0.jpg'), 
                  pergunta: 'Esse é um quiz sobre peixes, clik em iniciar para testar seus conhecimentos!', 
                  txtBotao: "Iniciar"
                };
  }
 
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

        <Image
          source={this.state.uri}
          style={styles.logoStyle}
        />

        <View style={styles.box}>
          
          <Text style={styles.text} >{this.state.pergunta}</Text>

          <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={(value) => {this.onPressRadio(value)}}
          />
        
        <View style={styles.boxRow}>
          <Button 
            onPress={() => this.onPressProximo(false)}
            title={this.state.txtBotao}
          />

          <Button 
            onPress={() => this.onPressReinicar()}
            title="Reiniciar quiz"
          />
          </View>
        </View>        
      </View>
      </ScrollView>
    );
  }

  onPressReinicar(){
    this.onPressProximo(true);
  }

  onPressRadio(value){
    this.selecionado = value;
    if(idPergunta <= 5 )
    {
      console.log('idPergunta = ' + idPergunta + ' Selecionado = ' + this.selecionado + '  Resposta certa  = ' + gabarito[idPergunta-1] + ' E-mail = ' + email);
    
      if(gabarito[idPergunta-1] == parseInt(this.selecionado))
        acerto[idPergunta-1] = 1;
      else
        acerto[idPergunta-1] = 0;
  
        console.log('acertos ' + acerto[idPergunta-1]);
    }
  }
  
  onPressProximo(reiniciar){
    
    if(reiniciar == true){
      idPergunta = 1;
      this.selecionado = "-1"
      acertos = [-1, -1, -1, -1, -1];
    }
    else
      idPergunta++;
          
    
    switch(idPergunta) {
      case 1:
      {
        this.setState( { txtBotao: 'Proxima pergunta' });
        this.setState( { uri: require('./img/img1.jpg') });
        this.setState({pergunta: 'O maior peixe de água doce é o Pirarucu. Qual o peso aproximado que um peixe dessa espécie pode alcançar?'});
        radio_props = [
          {label: '365 Kg', value: 0 },
          {label: '200 Kg', value: 1 },
          {label: '150 Kg', value: 2 },
          {label: '400 Kg', value: 3 },
          {label: '500 Kg', value: 4 },
        ]
        break;
      }
      case 2:
      {
        this.setState( { txtBotao: 'Proxima pergunta' });
        this.setState( { uri: require('./img/img2.jpg') });
        this.setState({pergunta: 'Qual é o peixe mais rápido do mundo?'});
        radio_props = [
          {label: 'Carpa', value: 0 },
          {label: 'Dânio Tigre', value: 1 },
          {label: 'Perca Sol', value: 2 },
          {label: 'Agulhão-vela', value: 3 },
          {label: 'Notrópis', value: 4 },
        ]
        break;
      }
      case 3:
      {
        this.setState( { txtBotao: 'Proxima pergunta' });
        this.setState( { uri: require('./img/img3.jpg') });
        this.setState({pergunta: 'Na biologia marinha, qual o nome que se dá ao ecossistema situado nas regiões mais profundas dos oceanos?'});
        radio_props = [
          {label: 'Mesopelática', value: 0 },
          {label: 'Batipelásica', value: 1 },
          {label: 'Abissopelágica', value: 2 },
          {label: 'Hadopelágica', value: 3 },
          {label: 'Nordeste', value: 4 },
        ]
        break;
      }
      case 4:
      {
        this.setState( { txtBotao: 'Proxima pergunta' });
        this.setState( { uri: require('./img/img4.jpg') });
        this.setState({pergunta: 'Qual é o único peixe que mantém relações sexuais por prazer?'});
        radio_props = [
          {label: 'Tubarão-Tigre', value: 0 },
          {label: 'Dourado', value: 1 },
          {label: 'Piranha', value: 2 },
          {label: 'Peixe-cirurgião', value: 3 },
          {label: 'Golfinho', value: 4 },
        ]
        break;
      }
      case 5:
      {
        this.setState( { txtBotao: 'Proxima pergunta' });
        this.setState( { uri: require('./img/img5.jpg') });
        this.setState({pergunta: 'Qual desses peixes podem viver em água doce e salgada?'});
        radio_props = [
          {label: 'Enguia', value: 0 },
          {label: 'Peixe-boi', value: 1 },
          {label: 'Polvo', value: 2 },
          {label: 'Neon', value: 3 },
          {label: 'Beta', value: 4 },
        ]
        break;
      } 

    }

    if(idPergunta > 5)
    {
      total = 0;
      for (i = 0; i < acerto.length; i++)
      {
        console.log("acerto[" + i + "] = " + acerto[i])
        if(acerto[i] == 1)
          total++;
      }
      this.props.navigation.navigate('Resultado', { acertos: total, email: email });
    }
    
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    
    flex: 1, 
  },

  logoStyle: {width: 250, height: 200},
  
  boxRow: { flex: 1, margin: 15, flexDirection: 'row', height: 40, width: 300, justifyContent: 'space-around', },
  
  box: { flex: 1, margin: 15,  },
  
  text: {fontSize: 16,  margin: 15,}

});
