/**
 * This function returns the highest and lowest numbers in an array of string numbers
 * @param {string array} numbers 
 * @returns largest and smallest nums in numbers array
 */
function highAndLow(numbers){
    numbers = numbers.split(' ').map(str => Number(str))
    return Math.max(...numbers) + ' ' + Math.min(...numbers)
  }