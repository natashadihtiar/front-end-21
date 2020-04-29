/*eslint-disable no-param-reassign*/
const findReverseNumber = n => {
    n = n + '';
    n = +n.split('').reverse().join('');
    return n;
};

const findPalindrom = number => {
    if(findReverseNumber(number) === number) return number;

    return findPalindrom(findReverseNumber(number) + number);
};
const resNum = 15;
const res = findPalindrom(resNum);
console.log(res);


