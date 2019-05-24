import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { primaryColor } from "./globals";
type Props = {};
export default class Avatar extends Component<Props> {
	render() {
		return (
			<View
				style={{
					...this.props.style,
					alignItems: "center",
					padding: 10
				}}
			>
				<Image
					style={{
						width: 100,
						height: 100,
						borderRadius: 100,
						borderColor: primaryColor,
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
