import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { getMonthWeeks } from "../utils";
import { primaryColor } from "../globals";
const moment = require("moment");

type Props = {};
export default class Week extends Component<Props> {
	constructor(props) {
		super(props);
	}
	selectDay = date => {
		this.props.selectDay(date, this.props.week);
	};
	render() {
		const selectedDay =
			this.props.selectedDay &&
			this.props.selectedDay.format("YYYY-MM-DD");
		return (
			<View
				style={{
					...this.props.style,
					paddingBottom: 20,
					width: "100%",
					flexDirection: "row"
				}}
			>
				{this.props.week.days.map((day, i) => {
					let selected = false;
					if (selectedDay) {
						selected = day.format("YYYY-MM-DD") === selectedDay;
					}
					return (
						<Day
							key={i}
							date={day}
							selectDay={this.selectDay}
							selected={selected}
						/>
					);
				})}
			</View>
		);
	}
}

const Day = ({ date, selectDay, selected }) => {
	return (
		<TouchableHighlight
			style={{ flex: 1 }}
			activeOpacity={0.5}
			underlayColor="transparent"
			onPress={() => {
				if (date) selectDay(date);
			}}
		>
			<View style={selected ? styles.selectedDay : {}}>
				<Text
					style={
						date && (date.day() === 0 || date.day() === 6)
							? styles.weekend
							: styles.day
					}
				>
					{(date && pad(date.format("D"))) || "    "}
				</Text>
			</View>
		</TouchableHighlight>
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
		fontSize: 16
	},
	day: {
		fontSize: 16,
		color: "#000000",
		fontWeight: "bold"
	},
	selectedDay: {
		borderBottomColor: primaryColor,
		borderBottomWidth: 5
	}
});
