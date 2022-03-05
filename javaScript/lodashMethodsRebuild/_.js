/* _.js, codecademy.com full stack engineer career path exercise,
    andihafner.com 2022
    
    The course exercises demand to re-implement some lodash methods.
    Some of the gathered methods are simpler variants of their lodash counterparts,
    to keep a low profile...
    
    */

let _ = {
    clamp(number, lower, upper) {

        /* The clamp method returns the nearest value of a given number
            which fits in a given range. */

        return Math.min(Math.max(number, lower), upper);
    },
    inRange(number, startValue, endValue) {

        /* The inRange method Checks if a number is between a start and up to,
            but not including, an end value. */

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
        return startValue <= number && number < endValue ? true : false;
    },
    words(string) {

        /* The words method takes in a string an returns an array with
            each word as an own element, using space chars as delimiter */

        return string.split(' ');
    },
    pad(string, desiredStringLength) {

        /* The pad method expands a given string to the desired
            length by filling in spaces.
            
           If the string is already longer than the desired new length,
            the string leaves untouched. */

        const stringLength = string.length;
        // Return string unmodified if its length already exceeds
        if (desiredStringLength < stringLength) {
            return string
        }
        const totalSpacesCount = desiredStringLength - stringLength;
        const totalSpacesCountIsEven = !(desiredStringLength % 2);
        const halfSpacesCount = Math.floor(totalSpacesCount / 2);
        const stringPrefix = ' '.repeat(halfSpacesCount);
        let stringSuffix = stringPrefix;
        // Add additional space character at the end if needed
        if (!totalSpacesCountIsEven) {
            stringSuffix += ' '
        }
        return `${stringPrefix}${string}${stringSuffix}`
    },
    has(object, key) {

        /* The has method checks a given object for the existence of
            a given key. */

        return (object[key] != undefined ? true : false)
    },
    invert(object) {

        /* The invert method returns a given object with swapped
            key: value pairs. */

        const invertedObject = {};
        let originalKey = '';
        for (let [key, value] of Object.entries(object)) {
            originalKey = key;
            key = value;
            value = originalKey;
            invertedObject[key] = value;
        }
        return invertedObject;
    },
    findKey(object, predicateFunction) {

        /* The findKey method returns the key of the first value which matches
            the predicateFunction (a function, which returns true of false).

        Example for a predicateFunction: value => value > 15 */

        for (const [key, value] of Object.entries(object)) {
            if (predicateFunction(value)) {
                return key
            }
        }
        return undefined
    },
    drop(array, deleteCount) {

        /* The drop method returns a given array with deleteCount
            elements dropped from the beginning. */

        // If deleteCount is not given, assume deleteCount = 1
        if (deleteCount === undefined) {
            deleteCount = 1
        }

        array.splice(0, deleteCount);
        return array;
    },
    dropWhile(array, predicate) {

        /* The drop method drops elements from the beginning of an 
            array until the predicate function returns falsy
            
           Example for a predicateFunction: value => value < 3 */

        const dropNumber = array.findIndex((element, index) => {
            return !(predicate(element, index, array))
        });
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size) {

        /* The chunk method Creates an array of elements split
            into groups the length of size. */

        const splittedArray = subArray = [];
        let counter = -1;
        let newElement;

        for (let pos = 0; pos < array.length / size; pos++) {
            subArray = [];
            for (let subPos = 0; subPos < size; subPos++) {
                counter++;
                newElement = array[counter];
                if (newElement != undefined) {
                    subArray.push(newElement)
                }
            }
            splittedArray.push(subArray);
        }
        return splittedArray;
    }
};

const array = [1, 2, 3, 4, 5, 6, 7];
const size = 3;

console.log(_.chunk(array, size));

// Do not write or modify code below this line.
module.exports = _;