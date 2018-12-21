import React from 'react';
import { StyleSheet, Button, Alert, FlatList, ListView, Image, Text, View, TouchableOpacity  } from 'react-native';
import {gravar} from './Firebase';
import ItemComponente from './ItemComponente';
import { db } from './Firebase';

let itemsRef = db.ref('/Dados').orderByChild('acertos');
email = "";

export default class Resultado extends React.Component {

  static navigationOptions = {
    title: 'Resultado',
  };

  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const acertos = navigation.getParam('acertos', '0');
    email = navigation.getParam('email', '');
    gravar(email, acertos);
    this.state = {items: [], acertos: "Você acertou " + acertos +" perguntas de 5" };
  }

  componentDidMount() {
    itemsRef.on('value', (snapshot) => {
        let data = snapshot.val();
        let items = Object.values(data);
        this.setState({items});
     });
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.boxRow}>
          
            <Text style={styles.text}>{this.state.acertos}</Text>
            
            <ItemComponente items={this.state.items} />
        </View>   
      </View>
    );
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

  boxRow: { flex: 1, margin: 15,  },
  
  text: {fontSize: 16,  margin: 15,}

});