import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	FlatList,
	TouchableHighlight
} from "react-native";
import { getMonthWeeks, periods } from "../utils";
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
		const formattedDay = this.props.day.format("YYYY-MM-DD");
		return (
			<View style={{ ...this.props.style, width: width, padding: 10 }}>
				<Week
					style={{ flex: 0 }}
					selectedDay={this.props.day}
					week={this.props.week}
					selectDay={this.props.selectDay}
				/>
				<DaySchedule
					style={{ flex: 1 }}
					day={formattedDay}
					timesReserved={this.props.reservedTime[formattedDay] || []}
					reserve={this.props.reserve}
				/>
			</View>
		);
	}
}

const DaySchedule = ({ reserve, day, timesReserved, style }) => {
	const data = Object.keys(periods)
		.map(i => parseInt(i))
		.sort((a, b) => {
			return a - b;
		});
	return (
		<View style={{ ...style, backgroundColor: primaryColor }}>
			<FlatList
				extraData={timesReserved.join()}
				data={data}
				keyExtractor={item => item + ""}
				renderItem={({ item }) => {
					const reserved = timesReserved.indexOf(item) !== -1;
					return (
						<TimeUnit
							day={day}
							time={item}
							reserved={reserved}
							reserve={reserve}
						/>
					);
				}}
			/>
		</View>
	);
};

const TimeUnit = ({ day, time, reserved, reserve }) => {
	return (
		<TouchableHighlight
			activeOpacity={0.5}
			underlayColor="transparent"
			onPress={() => {
				reserve(day, time);
			}}
		>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					padding: 10
				}}
			>
				<Text style={styles.text}>{periods[time]}</Text>
				<Text style={styles.text}>
					{reserved ? "Reservado" : "Reservar"}
				</Text>
			</View>
		</TouchableHighlight>
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
