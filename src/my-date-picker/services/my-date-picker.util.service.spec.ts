import { UtilService } from "./my-date-picker.util.service";

describe("MyDatePicker util", () => {
    const util = new UtilService();
    it("getDateFromWeekNumber", () => {
        // 1/1/2017 = Sunday
        let date = util.getDateFromWeekNumber(1, 2017);
        expect(date.year).toBe(2017);
        expect(date.month).toBe(1);
        expect(date.day).toBe(5); // Thursday
        // 2016: w52 => 26/12/2016
        date = util.getDateFromWeekNumber(52, 2016);
        expect(date.year).toBe(2016);
        expect(date.month).toBe(12);
        expect(date.day).toBe(29); // Thursday
        // 1/1/2011 = Saturday
        date = util.getDateFromWeekNumber(1, 2011);
        expect(date.year).toBe(2011);
        expect(date.month).toBe(1);
        expect(date.day).toBe(6); // Thursday
        // 2010: w52 => 27/12/2010
        date = util.getDateFromWeekNumber(52, 2010);
        expect(date.year).toBe(2010);
        expect(date.month).toBe(12);
        expect(date.day).toBe(30); // Thursday
        // 1/1/2016 = Friday
        date = util.getDateFromWeekNumber(1, 2016);
        expect(date.year).toBe(2016);
        expect(date.month).toBe(1);
        expect(date.day).toBe(7); // Thursday
        // 2015: w53 => 28/12/2015
        date = util.getDateFromWeekNumber(53, 2015);
        expect(date.year).toBe(2015);
        expect(date.month).toBe(12);
        expect(date.day).toBe(31); // Thursday
        // 2015: w52 => 21/12/2015
        date = util.getDateFromWeekNumber(52, 2015);
        expect(date.year).toBe(2015);
        expect(date.month).toBe(12);
        expect(date.day).toBe(24); // Thursday
        // 1/1/2015 = Thursday
        date = util.getDateFromWeekNumber(1, 2015);
        expect(date.year).toBe(2015);
        expect(date.month).toBe(1);
        expect(date.day).toBe(1); // Thursday
        // 2014: w52 => 22/12/2014
        date = util.getDateFromWeekNumber(52, 2014);
        expect(date.year).toBe(2014);
        expect(date.month).toBe(12);
        expect(date.day).toBe(25); // Thursday
        // 1/1/2014 = Wednesday
        date = util.getDateFromWeekNumber(1, 2014);
        expect(date.year).toBe(2014);
        expect(date.month).toBe(1);
        expect(date.day).toBe(2); // Thursday
        // 2013: w52 => 23/12/2013
        date = util.getDateFromWeekNumber(52, 2013);
        expect(date.year).toBe(2013);
        expect(date.month).toBe(12);
        expect(date.day).toBe(26); // Thursday
        // 1/1/2013 = Tuesday
        date = util.getDateFromWeekNumber(1, 2013);
        expect(date.year).toBe(2013);
        expect(date.month).toBe(1);
        expect(date.day).toBe(3); // Thursday
        // 2012: w52 => 24/12/2012
        date = util.getDateFromWeekNumber(52, 2012);
        expect(date.year).toBe(2012);
        expect(date.month).toBe(12);
        expect(date.day).toBe(27); // Thursday
        // 1/1/2007 = Monday
        date = util.getDateFromWeekNumber(1, 2007);
        expect(date.year).toBe(2007);
        expect(date.month).toBe(1);
        expect(date.day).toBe(4); // Thursday
        // 2006: w52 => 25/12/2006
        date = util.getDateFromWeekNumber(52, 2006);
        expect(date.year).toBe(2006);
        expect(date.month).toBe(12);
        expect(date.day).toBe(28); // Thursday
    });
});
