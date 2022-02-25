/* _.js, codecademy.com full-stack engineer career path exercise,
    andihafner.com 2022
    
    The course exercises demand to re-implement some lodash methods.
    Some of the gathered methods are simpler variants of their lodash counterparts,
    to keep a low profile...
    
    */

let _ = {
    clamp(number, lower, upper) {
        return Math.min(Math.max(number, lower), upper);
    },
    inRange(number, startValue, endValue) {
        // If no end value is given
        if (endValue === undefined) {
            endValue = startValue;
            startValue = 0;
        }
        // If the start value is greater than the end value
        if (startValue > endValue) {
            let newEndValue = startValue;
            startValue = endValue;
            endValue = newEndValue;
        }
        if (startValue <= number && number < endValue) { return true }
        return false
    },
    words(string) {
        return string.split(' ');
    },
    pad(string, desiredStringLength) {
        const stringLength = string.length;
        if (desiredStringLength < stringLength) {return string}
        const totalSpacesCount = desiredStringLength - stringLength;
        const totalSpacesCountIsEven = !(desiredStringLength % 2);
        const halfSpacesCount = Math.floor(totalSpacesCount / 2);
        const stringPrefix = ' '.repeat(halfSpacesCount);
        let stringSuffix = stringPrefix;
        if (!totalSpacesCountIsEven) {stringSuffix += ' '}
        return `${stringPrefix}${string}${stringSuffix}`
    }
};

console.log(_.pad('hello', 8));

// Do not write or modify code below this line.
module.exports = _;