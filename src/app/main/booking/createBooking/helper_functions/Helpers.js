
export let diffWagePay = (diff) => {
    let dateDiff = diff;
    if (dateDiff <= 24) {
        return 99;
    } else if (dateDiff > 24 && dateDiff <= 48) {
        return 80;
    } else {
        return 30;
    }
};


export let diffDateCalculator = (date) => {
    let currentDate = new Date();
    let bookedDate = date['date'];
    let bookedTime = date['startTime'];
    let bookedDate_hour = parseInt(bookedTime.slice(0, 2));
    let bookedDate_min = parseInt(bookedTime.slice(3, 5));
    let newBookedDate = new Date(bookedDate.getFullYear(), bookedDate.getMonth(), bookedDate.getDate(), bookedDate_hour, bookedDate_min);
    let val = Math.abs(newBookedDate - currentDate);
    return Math.ceil(val / (1000 * 60 * 60 ));
};


export let workHours = (booking) => {
    let {startTime, endTime} = booking;

    startTime = startTime.replace(":", ".");
    endTime = endTime.replace(":", ".");

    if(startTime.charAt(3) === "3") {
        startTime = startTime.substring(0, 3) + '5';
    }
    if(endTime.charAt(3) === "3") {
        endTime = endTime.substring(0, 3) + '5';
    }
    startTime = parseFloat(startTime);
    endTime = parseFloat(endTime);

    // If endTime is less than startTime + 24 hours, and plus the rest with Math.abs
    if(endTime < startTime) {
        return (Math.abs(startTime - endTime) * 24);
    }
    // If endTime is bigger than starTime, then just do Math.abs
    else if(endTime > startTime) {
        return Math.abs(startTime - endTime);
    }
    else {
        return 1;
    }

};
