import React from 'react';
import Perguntas from './Perguntas';
import Resultado from './Resultado';
import Home from './Home';
import NovoUsuario from './NovoUsuario';
import ListRanking from './ListRanking';

import { createStackNavigator } from "react-navigation"
export default class App extends React.Component {

  render() {
    return (
     <RootStack/>
    );
  }

}

const RootStack = createStackNavigator({
  Home: Home,
  Perguntas: Perguntas,
  Resultado: Resultado,
  NovoUsuario: NovoUsuario,
  ListRanking: ListRanking,
}, {
  initialRouteName: "ListRanking"
});
