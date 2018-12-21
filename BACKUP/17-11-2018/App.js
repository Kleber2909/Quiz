import React from 'react';
import CalcumadoraNormal from './CalcumadoraNormal';
import CalcumadoraCientifica from './CalculadoraCientifica';
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
  CalcNormal: CalcumadoraNormal,
  CalCientifica: CalcumadoraCientifica
}, {
  initialRouteName: "Home"
});
