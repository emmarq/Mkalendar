import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
const moment = require("moment");

type Props = {};
export default class App extends Component<Props> {
	constructor(props) {
		super(props);
		const today = moment();
		this.state = {
			months: [today, moment(today).add(1, "months")],
			selected: 0
		};
	}
	monthKeyExtractor = (item, id) => {
		return item.format("MMMM YYYY");
	};
	selectMonth = index => {
		this.setState({ ...this.state, selected: index });
	};
	render() {
		const monthSelected = this.state.months[this.state.selected];
		return (
			<View style={styles.container}>
				<MonthHeader
					i={this.state.selected}
					name={monthSelected.format("MMMM [del] YYYY")}
					change={this.selectMonth}
				/>
				<WeekDays />
			</View>
		);
	}
}

const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"];

const WeekDays = () => {
	return (
		<View style={{ flexDirection: "row", padding: 10 }}>
			{days.map(day => (
				<Text key={day} style={{ flex: 1, fontSize: 18 }}>
					{day}
				</Text>
			))}
		</View>
	);
};

const MonthHeader = ({ i, name, change }) => {
	return (
		<View style={{ alignItems: "center", padding: 10 }}>
			{i === 1 && (
				<TouchableHighlight
					style={{ position: "absolute", left: 0, padding: 10 }}
					activeOpacity={0.5}
					underlayColor="transparent"
					onPress={() => {
						change(0);
					}}
				>
					<Icon name="chevron-thin-left" size={20} color="#ccc" />
				</TouchableHighlight>
			)}
			<Text
				style={{ color: "#000000", fontWeight: "bold", fontSize: 18 }}
			>
				{name}
			</Text>
			{i === 0 && (
				<TouchableHighlight
					style={{ position: "absolute", right: 0, padding: 10 }}
					activeOpacity={0.5}
					underlayColor="transparent"
					onPress={() => {
						change(1);
					}}
				>
					<Icon name="chevron-thin-right" size={20} color="#ccc" />
				</TouchableHighlight>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF"
	}
});
