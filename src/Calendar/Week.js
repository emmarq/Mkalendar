import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getMonthWeeks } from "../utils";
const moment = require("moment");

type Props = {};
export default class Week extends Component<Props> {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View
				style={{
					paddingBottom: 20,
					width: "100%",
					flexDirection: "row"
				}}
			>
				{this.props.days.map((day, i) => (
					<Day key={i} date={day} />
				))}
			</View>
		);
	}
}

const Day = ({ date }) => {
	return (
		<Text
			style={
				date && (date.day() === 0 || date.day() === 6)
					? styles.weekend
					: styles.day
			}
		>
			{(date && pad(date.format("D"))) || "    "}
		</Text>
	);
};

const pad = text => {
	if (text.length === 1) return "  " + text;
	return text;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF"
	},
	weekend: {
		flex: 1,
		fontSize: 16
	},
	day: {
		flex: 1,
		fontSize: 16,
		color: "#000000",
		fontWeight: "bold"
	}
});
