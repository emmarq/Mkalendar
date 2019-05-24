import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { primaryColor } from "./globals";

type Props = {};
export default class Header extends Component<Props> {
	render() {
		return (
			<View
				style={{
					...this.props.style,
					alignItems: "center",
					padding: 15,
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
				<TouchableHighlight
					activeOpacity={0.5}
					underlayColor="transparent"
					onPress={this.props.continue}
					style={{
						position: "absolute",
						right: 0,
						paddingTop: 15
					}}
				>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<Text
							style={{ color: primaryColor, fontWeight: "bold" }}
						>
							Continuar
						</Text>
						<Icon
							name="chevron-thin-right"
							size={30}
							color={primaryColor}
						/>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
