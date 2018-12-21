import React from 'react';
import { ListView, Text, View, Button,} from 'react-native';

import {readData, db} from './Firebase';
ds = null;

export default class Ranking extends React.Component {

    constructor(bbb) {
        super(bbb);
        ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['', '']),
        };
       // LerDados();
      }

    render(){
        return (
          <View>
            <Button 
                onPress={() => this.onPresRanking()}
                  title="Ver Ranking"
              />
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
              />
          </View>
          );
    }

    async onPresRanking(){
    
     /* 
     this.setState( {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      });
      */
     try{
           await db.ref('Dados/').orderByChild('acertos').on("child_added", function (snapshot) {
            
            console.log(snapshot.val().email + " Acertos " + snapshot.val().acertos);            
        });
      }
      catch (error) {
        console.log(error);
      } 
     //console.log("AAAAAA = " + a);
    }
    
}


//https://stackoverflow.com/questions/42027638/populate-reactnative-listview-with-firebase-data


