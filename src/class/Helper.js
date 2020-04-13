export default class Helper {
    static getMonthName(index) {
        let monthName = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return monthName[index];
    }

    static stripTags(string) {
        return string.replace(/<\/?[^>]+(>|$)/g, "");
    }
}