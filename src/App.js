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

type Props = {};
export default class App extends Component<Props> {
  state = { tutor: { name: "Emmanuel Márquez" }, timeReserved: [] };
  reserve = time => {};
  continue = () => {
    Alert.alert("Error", "No ha escogido su horario de reserva.");
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
        <Calendar style={{ flex: 1 }} reserve={this.reserve} />
        <View style={{ flex: 0 }}>
          <Text>Toca el día y las horas para empezar</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: "100%"
  }
});
