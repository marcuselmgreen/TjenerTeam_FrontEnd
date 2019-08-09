
const vacationExtra = 0.125;

export const diffWagePay = (diff) => {
    let dateDiff = diff;
    if (dateDiff <= 24) {
        return 99;
    } else if (dateDiff > 24 && dateDiff <= 48) {
        return 80;
    } else {
        return 30;
    }
};


export const diffDateCalculator = (date) => {
    let currentDate = new Date();
    let bookedDate = date['date'];
    let bookedTime = date['startTime'];
    let bookedDate_hour = parseInt(bookedTime.slice(0, 2));
    let bookedDate_min = parseInt(bookedTime.slice(3, 5));
    let newBookedDate = new Date(bookedDate.getFullYear(), bookedDate.getMonth(), bookedDate.getDate(), bookedDate_hour, bookedDate_min);
    let val = Math.abs(newBookedDate - currentDate);
    return Math.ceil(val / (1000 * 60 * 60 ));
};


export const workHours = (booking) => {
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


export const checkPriceValue = (name, state, selectedTab, val) => {
    let param = [name, state, selectedTab, val];
    switch (name) {
        case 'staffType':
            return staffTypePrice(...param);

        case 'hourlyWage':
            return hourlyWagePrice(...param);

        case 'startTime':
            return timePrice(...param);

        case 'endTime':
            return timePrice(...param);

        case 'numberOfStaff':
            return numberOfStaffPrice(...param);

        default:
            return state;
    }
};

const setTotalPrice = (state, selectedTab) => {
    // SETS TOTAL PRICE
    return parseFloat(state[selectedTab]["wageTotal"]) * parseInt(state[selectedTab]["numberOfStaff"]).toFixed(2) * workHours(state[selectedTab]);
};

const timePrice = (name, state, selectedTab) => {
    let tempVal = setTotalPrice(state, selectedTab);
    state[selectedTab]['priceTotal'] = tempVal.toString();
    return state
};

const numberOfStaffPrice = (name, state, selectedTab) => {
    if(state[selectedTab]['numberOfStaff'] > 0) {
        let tempVal = parseFloat(state[selectedTab]['wageTotal']) * parseInt(state[selectedTab['numberOfStaff']]).toFixed(2)
        state[selectedTab]['priceTotal'] = tempVal.toString();
    } else {
        state[selectedTab]['hourlyWage'] = '0';
        state[selectedTab]['wageTotal'] = '0';
        state[selectedTab]['priceTotal'] = '0';
        return state;
    }
};

const hourlyWagePrice = (name, state, selectedTab, val) => {
    let tempVal = parseFloat(val);

    if(parseFloat(state[selectedTab][name]) < 1 || typeof tempVal !== 'number') {
        state[selectedTab]['priceTotal'] = '0';
        return state;
    } else {
        if (tempVal > 0) {
            // SETS VALUES FOR WAGETOTAL
            state[selectedTab]['wageTotal'] = tempVal + (tempVal * vacationExtra) + diffWagePay(diffDateCalculator(state[selectedTab]));
            // SETS TOTAL PRICE
            let val = setTotalPrice(state, selectedTab);
            state[selectedTab]['priceTotal'] = val.toString();
            return state;
        } else {
            state[selectedTab]['wageTotal'] = '0';
            state[selectedTab]['priceTotal'] = '0';
            return state
        }
    }
};

const staffTypePrice = (name, state, selectedTab, val) => {
    state[selectedTab]['label'] = val;
    return state;
};
