/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Header from "./Header";
import Avatar from "./Avatar";
import Calendar from "./Calendar/Calendar";
import { periods } from "./utils";

type Props = {};
export default class App extends Component<Props> {
  state = { tutor: { name: "Emmanuel Márquez" }, reservedTime: {} };
  reserve = (day, time) => {
    this.setState(state => {
      const nextState = { ...this.state };
      nextState.reservedTime[day] = nextState.reservedTime[day] || [];
      const index = nextState.reservedTime[day].indexOf(time);
      if (index !== -1) {
        nextState.reservedTime[day].splice(index, 1);
      } else {
        // inserting with order should simplify the validation
        nextState.reservedTime[day].push(time);
      }
      return nextState;
    });
  };
  continue = () => {
    Alert.alert("Error", "No ha escogido su horario de reserva.");
  };
  textFooter = () => {
    let hours = 0;
    let text = "Toca el día y las horas para empezar";
    for (let rt in this.state.reservedTime) {
      if (this.state.reservedTime[rt].length === 1) {
        return "No se puede reservar menos de una hora";
      } else if (this.state.reservedTime[rt].length > 1) {
        for (let h of this.state.reservedTime[rt]) {
          hours++;
          if (!existContigous(h, this.state.reservedTime[rt])) {
            return "No puede haber huecos en la reserva";
          }
        }
        text = `${hours / 2} horas reservadas`;
      }
    }
    return text;
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          style={{ flex: 0 }}
          title={this.state.tutor.name}
          continue={this.continue}
        />
        <Avatar style={{ flex: 0 }} />
        <Calendar
          style={{ flex: 1 }}
          reserve={this.reserve}
          reservedTime={this.state.reservedTime}
        />
        <View style={{ flex: 0 }}>
          <Text>{this.textFooter()}</Text>
        </View>
      </View>
    );
  }
}

const existContigous = (x, array) => {
  return array.indexOf(x - 1) !== -1 || array.indexOf(x + 1) !== -1;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: "100%"
  }
});
