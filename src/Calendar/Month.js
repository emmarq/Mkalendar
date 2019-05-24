import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { getMonthWeeks } from "../utils";
import Week from "./Week";
const moment = require("moment");
const { width } = Dimensions.get("window");

type Props = {};
export default class Month extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = { weeks: [] };
	}
	componentDidMount = () => {
		this.setState({ weeks: getMonthWeeks(this.props.date) });
	};

	render() {
		return (
			<View style={{ width: width, padding: 10 }}>
				{this.state.weeks.map(week => {
					return <Week key={week.id} id={week.id} days={week.days} />;
				})}
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
