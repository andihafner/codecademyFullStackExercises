<<<<<<< HEAD
/* ahCreditCardChecker.js, codecademy.com full-stack engineer career path exercise,
    andihafner.com 2022
    
    This code checks credit card numbers for their validity, based on the 
        --> https://en.wikipedia.org/wiki/Luhn_algorithm
    */
=======
/* ahCreditCardChecker.js, codecademy.com full-stack engineer career path exercise, ahc 2022 */
>>>>>>> 0de74b0b84f59fadfacebe947738ea6d1da76c19

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

/* The function 'validateCred()' implements the Luhn-Algorithm
<<<<<<< HEAD
=======
    --> https://en.wikipedia.org/wiki/Luhn_algorithm
>>>>>>> 0de74b0b84f59fadfacebe947738ea6d1da76c19
    It takes a card number an returns 'true' if it is a valid one.
    I developed the function from the German Wikipedia Description, which I found easier
    to understand, --> https://de.wikipedia.org/wiki/Luhn-Algorithmus
*/
const validateCred = cardNumber => {
    // If 'cardNumber' has an odd count of numbers, add a 0 in front of the Array
    if (cardNumber.length % 2) {
        cardNumber.unshift(0)
    };
    cardNumber.reverse();

    // If the second number multiplied by two is greater than 9, subtract 9 from the result
    const getSecondNumber = number => {
        let numberByTwo = number * 2;
        if (numberByTwo > 9) {
            numberByTwo -= 9
        };
        return numberByTwo;
    };

    let checkSum = 0;
    for (i = 0; i < (cardNumber.length / 2); i++) {
        let a = cardNumber[i * 2]
        let b = cardNumber[i * 2 + 1]
        b = getSecondNumber(b);
        checkSum += (a + b);
    }

    if (checkSum % 10 === 0) { return true };
    return false;
};

//console.log(validateCred(valid1));

<<<<<<< HEAD
 console.log(batch);
=======
// console.log(batch);
>>>>>>> 0de74b0b84f59fadfacebe947738ea6d1da76c19

batch.forEach((arr, index) => {
    console.log(index, validateCred(arr));
});
