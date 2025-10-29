const sumAll = function (int1, int2) {
    if (int1 < 0 || int2 < 0) return 'ERROR';
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return 'ERROR';

    const start = Math.min(int1, int2);
    const end = Math.max(int1, int2);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
