import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

type Props = {};
export default class Header extends Component<Props> {
	render() {
		return (
			<View
				style={{
					alignItems: "center",
					padding: 10,
					borderBottomWidth: 0.5,
					borderBottomColor: "#ccc"
				}}
			>
				<Text
					style={{
						fontWeight: "bold",
						fontSize: 20,
						color: "#000000"
					}}
				>
					{this.props.title}
				</Text>
			</View>
		);
	}
}
