
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

        let end = endTime;
        let start = Math.abs(24.00 - startTime);
        // return (Math.abs(end - start));
        return start + end;
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

const removeCommas = (total) => {
    debugger;
    if(total.toString().includes(',')) {

        let parts = total.toString().split(',');

        if(parts[0].includes('.')) {
            let tempParts = parts[0].split('.');
            let tempPartsRes = tempParts[0] + tempParts[1];
            return tempPartsRes + '.' + parts[1];
        }

        return parts[0] + '.' + parts[1];

    } else if (total.toString().includes('.')) {
        let parts = total.toString().split('.');
        return parts[0] + parts[1];
    } else {
        return total;
    }
};

const setTotalPrice = (state, selectedTab) => {
    // SETS TOTAL PRICE
    let total = state[selectedTab]["wageTotal"];

    total = removeCommas(total);

    return parseFloat(total) * parseInt(state[selectedTab]["numberOfStaff"]).toFixed(2) * workHours(state[selectedTab]);
};

const timePrice = (name, state, selectedTab) => {
    state[selectedTab]['priceTotal'] = numberWithCommas(setTotalPrice(state, selectedTab));
    state[selectedTab]['hourlyWage'] = 0;
    state[selectedTab]['wageTotal'] = 0;
    state[selectedTab]['priceTotal'] = 0;
    return state
};

const numberOfStaffPrice = (name, state, selectedTab) => {
    let staff = parseInt(state[selectedTab]['numberOfStaff']);
    let hourlyWage = state[selectedTab]['hourlyWage'];
    let sTime = state[selectedTab]['startTime'];
    let eTime = state[selectedTab]['endTime'];

    if(staff > 0 && hourlyWage > 0 && (sTime !== '' && eTime !== '')) {
        let wageTotal = removeCommas(state[selectedTab]['hourlyWage']);

        let tempVal = (wageTotal * parseFloat(state[selectedTab]['numberOfStaff']).toFixed(2) * diffDateCalculator(state[selectedTab]));
        let total = removeCommas(tempVal);
        state[selectedTab]['priceTotal'] = numberWithCommas(total);
        return state;
    } else {
        state[selectedTab]['hourlyWage'] = 0;
        state[selectedTab]['wageTotal'] = 0;
        state[selectedTab]['priceTotal'] = 0;
        return state;
    }
};

const hourlyWagePrice = (name, state, selectedTab, val) => {
    let tempVal = parseFloat(val);
    let sTime = state[selectedTab]['startTime'];
    let eTime = state[selectedTab]['endTime'];

    if(tempVal < 1 || typeof tempVal !== 'number') {
        state[selectedTab]['priceTotal'] = 0;
        return state;
    } else {
        if (tempVal > 0 && (sTime !== '' && eTime !== '')) {
            // SETS VALUES FOR WAGETOTAL
            state[selectedTab]['wageTotal'] = numberWithCommas(tempVal + (tempVal * vacationExtra) + diffWagePay(diffDateCalculator(state[selectedTab])));
            // SETS TOTAL PRICE;
            state[selectedTab]['priceTotal'] = numberWithCommas( setTotalPrice(state, selectedTab));
            return state;
        } else {
            state[selectedTab]['wageTotal'] = 0;
            state[selectedTab]['priceTotal'] = 0;
            return state
        }
    }
};

const staffTypePrice = (name, state, selectedTab, val) => {
    state[selectedTab]['label'] = val;
    return state;
};


const numberWithCommas = (number) => {
    if(number.toString().includes('.')) {
        let parts = number.toString().split(".");

        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return parts[0] + ',' + parts[1].substring(0, 2);

    }
    else {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
};
