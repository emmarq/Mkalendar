import { getMonthWeeks } from "../utils";
const moment = require("moment");

it("builds an month representation as array of weeks", () => {
	const mayWeeks = getMonthWeeks(moment("2019-05-24"));
	expect(mayWeeks.length).toBe(5);

	const juneWeeks = getMonthWeeks(moment("2019-06-24"));
	expect(juneWeeks.length).toBe(6);

	const feb2015Weeks = getMonthWeeks(moment("2015-02-10"));
	expect(feb2015Weeks.length).toBe(4);
});
