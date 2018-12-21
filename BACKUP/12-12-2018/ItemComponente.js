import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';



const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemtext: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default class ItemComponente extends Component {

    constructor(props) {
        super(props);
        this.state = {
          dataSource: '',
        };
       // LerDados();
      }

  static propTypes = {
      items: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
      <Button 
                onPress={() => this.onPresRanking()}
                  title="Ver Ranking"
              />

            <View >
                    <Text style={styles.itemtext}>{this.state.dataSource}</Text>
             </View>
      </View>
    );
  }

  async onPresRanking(){
    
    try{
        var a = []
        {this.props.items.map((item, index) => {
            a += 'Usuário ' + item.email + ' acertou ' + item.acertos + ' de 5 perguntas \n'
        })}  
        console.log(a);    
        this.setState( { dataSource: a });
     }
     catch (error) {
       console.log(error);
     } 
   }
   

}