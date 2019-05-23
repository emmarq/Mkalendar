/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "./Avatar";
import Header from "./Header";

type Props = {};
export default class App extends Component<Props> {
  state = { tutor: { name: "Emmanuel Márquez" } };
  render() {
    return (
      <View style={styles.container}>
        <Header style={{ flex: 0 }} title={this.state.tutor.name} />
        <Avatar style={{ flex: 0 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});
