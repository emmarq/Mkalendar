import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import { getMonthWeeks } from "../utils";
import Week from "./Week";
import { primaryColor } from "../globals";
const moment = require("moment");
const { width } = Dimensions.get("window");

type Props = {};
export default class Schedule extends Component<Props> {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={{ ...this.props.style, width: width, padding: 10 }}>
				<Week
					style={{ flex: 0 }}
					week={this.props.week}
					selectDay={this.props.selectDay}
				/>
				<DaySchedule
					style={{ flex: 1 }}
					day={this.props.day}
					timesReserved={[]}
					reserve={this.props.reserved}
				/>
			</View>
		);
	}
}

const periods = (function() {
	const p = [];
	for (let i = 0; i < 13; i++) {
		p.push(`${i}:00 AM`);
		p.push(`${i}:30 AM`);
	}
	for (let i = 1; i < 13; i++) {
		p.push(`${i}:00 PM`);
		p.push(`${i}:30 PM`);
	}
	return p;
})();

const DaySchedule = ({ reserve, timesReserved, style }) => {
	return (
		<View style={{ ...style, backgroundColor: primaryColor }}>
			<FlatList
				data={periods}
				keyExtractor={item => item}
				renderItem={({ item }) => {
					const reserved = timesReserved.indexOf(item) !== -1;
					return (
						<TimeUnit
							time={item}
							reserved={false}
							reserve={reserve}
						/>
					);
				}}
			/>
		</View>
	);
};

const TimeUnit = ({ time, reserved }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				padding: 10
			}}
		>
			<Text style={styles.text}>{time}</Text>
			<Text style={styles.text}>
				{reserved ? "Reservado" : "Reservar"}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF"
	},
	text: {
		color: "white",
		fontSize: 15
	}
});
