function getCalc(type){
    switch (type) {
        /* -------------------- Integer Arithmetic -------------------- */
        case 'int-add':
            var int1 = randomInt(1, 100);
            var int2 = randomInt(1, 100);
            var quest = int1 + " + " + int2;
            var ans = int1 + int2;
            break;
        case 'int-sub':
            var int1 = randomInt(2, 100);
            var int2 = randomInt(1, int1);
            var quest = int1 + " - " + int2;
            var ans = int1 - int2;
            break;
        case 'int-mult':
            var int1 = randomInt(1, 12);
            var int2 = randomInt(1, 12);
            var quest = int1 + " x " + int2;
            var ans = int1 * int2;
            break;
        case 'int-div':
            var int1 = randomInt(1, 12);
            var int2 = randomInt(1, 12);
            var quest = (int1 * int2) + " &divide; " + int2;
            var ans = int1;
            break;
        /* -------------------- Decimal Arithmetic -------------------- */
        case 'dec-add':
            var int1 = randomInt(0, 100);
            var int2 = randomInt(0, 100);
            var dp1 = randomInt(1, 4);
            var dp2 = randomInt(1, 4);
            var dec1 = randomInt((Math.pow(10, dp1 - 1)), (Math.pow(10, dp1)) - 1);
            var dec2 = randomInt((Math.pow(10, dp2 - 1)), (Math.pow(10, dp2)) - 1);
            var quest = int1 + "." + dec1 + " + " + int2 + "." + dec2;
            var ans = (parseFloat(int1 + "." + dec1) + parseFloat(int2 + "." + dec2)).toFixed(Math.max(dp1, dp2));
            break;
        case 'dec-sub':
            var int2 = randomInt(1, 99);
            var int1 = randomInt(int2 + 1, 100);
            var dp1 = randomInt(1, 4);
            var dp2 = randomInt(1, 4);
            var dec1 = randomInt((Math.pow(10, dp1 - 1)), (Math.pow(10, dp1)) - 1);
            var dec2 = randomInt((Math.pow(10, dp2 - 1)), (Math.pow(10, dp2)) - 1);
            var quest = int1 + "." + dec1 + " - " + int2 + "." + dec2;
            var ans = (parseFloat(int1 + "." + dec1) - parseFloat(int2 + "." + dec2)).toFixed(Math.max(dp1, dp2));
            break;
        case 'dec-mult':
            var int1 = randomInt(0, 100);
            var int2 = randomInt(0, 100);
            var dp1 = randomInt(1, 4);
            var dp2 = randomInt(1, 4);
            var dec1 = randomInt((Math.pow(10, dp1 - 1)), (Math.pow(10, dp1)) - 1);
            var dec2 = randomInt((Math.pow(10, dp2 - 1)), (Math.pow(10, dp2)) - 1);
            var quest = int1 + "." + dec1 + " x " + int2 + "." + dec2;
            var ans = (parseFloat(int1 + "." + dec1) * parseFloat(int2 + "." + dec2)).toFixed((dp1 * dp2) + 1);
            break;
        case 'dec-div':
            var int1 = randomInt(0, 10);
            var int2 = randomInt(0, 100);
            var dp1 = randomInt(1, 4);
            var dec1 = randomInt((Math.pow(10, dp1 - 1)), (Math.pow(10, dp1)) - 1);
            var ans = parseFloat(int1 + "." + dec1).toFixed(dp1);
            var quest = parseFloat(ans * int2).toFixed(dp1) + " &divide; " + int2;
            break;
        /* -------------------- Negative Arithmetic -------------------- */
        case 'neg-add':
            var int1 = randomNeg(1, 100);
            var int2 = randomNeg(1, 100);
            var quest = int1 + " + " + int2;
            var ans = int1 + int2;
            break;
        case 'neg-sub':
            var int1 = randomNeg(2, 100);
            var int2 = randomNeg(1, int1);
            var quest = int1 + " - " + int2;
            var ans = int1 - int2;
            break;
        case 'neg-mult':
            var int1 = randomNeg(1, 12);
            var int2 = randomNeg(1, 12);
            var quest = int1 + " x " + int2;
            var ans = int1 * int2;
            break;
        case 'neg-div':
            var int1 = randomNeg(1, 12);
            var int2 = randomNeg(1, 12);
            var quest = (int1 * int2) + " &divide; " + int2;
            var ans = int1;
            break;
        default:
            var quest = 'No Question Selected';
            var ans = '-';
            break;
    }
    return [quest, ans];
}