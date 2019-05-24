import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableHighlight,
	Dimensions
} from "react-native";
import Month from "./Month";
import Schedule from "./Schedule";
import Icon from "react-native-vector-icons/Entypo";
const moment = require("moment");
const { width } = Dimensions.get("window");

type Props = {};
export default class Calendar extends Component<Props> {
	constructor(props) {
		super(props);
		const today = moment();
		this.state = {
			months: [today, moment(today).add(1, "months")],
			selectedMonth: 0,
			selectedWeek: null,
			selectedDay: null
		};
		this.viewabilityConfig = {
			waitForInteraction: true,
			viewAreaCoveragePercentThreshold: 50
		};
		this.calendar = React.createRef();
	}
	showDays = index => {
		this.setState({
			...this.state,
			selectedMonth: index,
			selectedWeek: null,
			selectedDay: null
		});
	};
	selectDay = (day, week) => {
		this.setState({ ...this.state, selectedDay: day, selectedWeek: week });
	};
	selectMonth = index => {
		this.calendar.current.scrollToIndex({ index: index });
		this.setState({ ...this.state, selectedMonth: index });
	};
	updateMonthOnView = ({ viewableItems, changed }) => {
		for (ch of changed) {
			if (ch.isViewable) {
				this.setState({
					...this.state,
					selectedMonth: ch.index
				});
				break;
			}
		}
	};
	monthKeyExtractor = (item, id) => {
		return item.format("MMMM YYYY");
	};
	render() {
		const monthSelected = this.state.months[this.state.selectedMonth];
		return (
			<View style={this.props.style}>
				<MonthHeader
					style={{ flex: 0 }}
					i={this.state.selectedMonth}
					name={monthSelected.format("MMMM [del] YYYY")}
					change={this.selectMonth}
					showDays={this.showDays}
					enableChange={!this.state.selectedDay}
				/>
				<WeekDays style={{ flex: 0 }} />
				{!this.state.selectedDay && (
					<FlatList
						style={{ flex: 1 }}
						ref={this.calendar}
						getItemLayout={(data, index) => ({
							length: width,
							offset: width * index,
							index
						})}
						initialScrollIndex={this.state.selectedMonth}
						viewabilityConfig={this.viewabilityConfig}
						pagingEnabled={true}
						horizontal={true}
						data={this.state.months}
						keyExtractor={this.monthKeyExtractor}
						renderItem={({ item }) => {
							return (
								<Month
									key={item.format("MMMM YYYY")}
									date={item}
									selectDay={this.selectDay}
								/>
							);
						}}
						onViewableItemsChanged={this.updateMonthOnView}
					/>
				)}
				{this.state.selectedDay && (
					<Schedule
						style={{ flex: 1 }}
						week={this.state.selectedWeek}
						day={this.state.selectedDay}
						selectDay={this.selectDay}
						reservedTime={this.props.reservedTime}
						reserve={this.props.reserve}
					/>
				)}
			</View>
		);
	}
}

const MonthHeader = ({ i, name, change, showDays, enableChange, style }) => {
	return (
		<View style={{ ...style, alignItems: "center", padding: 10 }}>
			{enableChange && i === 1 && (
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
			<TouchableHighlight
				activeOpacity={0.5}
				underlayColor="transparent"
				onPress={() => {
					showDays(i);
				}}
			>
				<Text
					style={{
						color: "#000000",
						fontWeight: "bold",
						fontSize: 18
					}}
				>
					{name}
				</Text>
			</TouchableHighlight>
			{enableChange && i === 0 && (
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

const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sáb"];

const WeekDays = ({ style }) => {
	return (
		<View style={{ ...style, flexDirection: "row", padding: 10 }}>
			{days.map(day => (
				<Text key={day} style={{ flex: 1, fontSize: 18 }}>
					{day}
				</Text>
			))}
		</View>
	);
};
