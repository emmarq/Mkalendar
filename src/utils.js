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

export const periods = (function() {
	const p = {};
	let id = 0;
	for (let i = 0; i < 13; i++) {
		p[id] = `${i}:00 AM`;
		id++;
		p[id] = `${i}:30 AM`;
		id++;
	}
	for (let i = 1; i < 13; i++) {
		p[id] = `${i}:00 PM`;
		id++;
		p[id] = `${i}:30 PM`;
		id++;
	}
	return p;
})();
