import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';


export default class ItemComponente extends Component {

    constructor(props) {
        super(props);
        this.state = { dataSource: '', };
      }

  static propTypes = {
      items: PropTypes.array.isRequired
  };

  render() {
    return (
        <View style={styles.boxRow}>
            <Button 
                onPress={() => this.onPresRanking()}
                title="Ver Ranking"
            />

            <View >
                <Text style={styles.text}>{this.state.dataSource}</Text>
            </View>
        </View>
    );
  }

  async onPresRanking(){
    
    try{
        var a = []
        this.props.items.map((item) => {
            a += 'Usuário: ' + item.email + ' \nAcertou: ' + item.acertos + ' de 5 perguntas! \n'
        })
        console.log(a);    
        this.setState( { dataSource: a});
     }
     catch (error) {
       console.log(error);
     } 
   }
   

}

const styles = StyleSheet.create({
  
    boxRow: { flex: 1, margin: 15,  },
    
    text: {fontSize: 16,  margin: 15,}
  
  });