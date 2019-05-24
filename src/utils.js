const moment = require("moment");

export const getMonthWeeks = date => {
	const monthNumber = date.month();
	// primer domingo del mes
	const momentCursor = moment(date)
		.date(1)
		.day(0);
	const weeks = [];
	do {
		const week = { id: `${monthNumber}-${weeks.length}`, days: [] };
		for (let i = 0; i < 7; i++) {
			week.days.push(
				momentCursor.month() === monthNumber
					? moment(momentCursor)
					: null
			);
			momentCursor.add(1, "days");
		}
		weeks.push(week);
	} while (momentCursor.month() === monthNumber);

	return weeks;
};
