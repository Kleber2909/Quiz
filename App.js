import React from 'react';
import Perguntas from './Perguntas';
import Resultado from './Resultado';
import Home from './Home';

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
}, {
  initialRouteName: "Home"
});
