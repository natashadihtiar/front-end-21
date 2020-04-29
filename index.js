/*eslint-disable no-param-reassign*/
const findReverseNumber = num => {
    num = num + '';
    num = +num.split('').reverse().join('');
    return num;
};

const findPalindrom = number => {
    if(findReverseNumber(number) === number) return number;

    return findPalindrom(findReverseNumber(number) + number);
};
const n = 15;
const res = findPalindrom(n);
console.log(res);


