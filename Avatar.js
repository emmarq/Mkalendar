import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

type Props = {};
export default class Avatar extends Component<Props> {
	render() {
		return (
			<View
				style={{
					alignItems: "center",
					padding: 10
				}}
			>
				<Image
					style={{
						width: 100,
						height: 100,
						borderRadius: 100,
						borderColor: "#24c0b0",
						borderWidth: 3
					}}
					source={{
						uri:
							"https://facebook.github.io/react-native/docs/assets/favicon.png"
					}}
				/>
			</View>
		);
	}
}
