import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ItemComponent from './ItemComponente';

import { db } from './Firebase';

let itemsRef = db.ref('/Dados');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#B6A6BB',
    }
  })

export default class ListRanking extends Component {

    static navigationOptions = {
        title: 'ListRanking',
      };

    state = {
        items: []
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
                {
                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
        )
    }
}