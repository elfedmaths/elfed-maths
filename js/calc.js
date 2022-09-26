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
            var ans = (parseFloat(int1 + "." + dec1) * parseFloat(int2 + "." + dec2)).toFixed(dp1 + dp2);
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
        /* -------------------- Percentages -------------------- */
        case 'perc-find-1':
            var int1 = randomInt(0, 2);
            var perc = [2, 10, 100];
            var phrase = ["50%", "10%", "1%"];
            var min = 10;
            var max = 1000;
            switch (int1){
                case 0: 
                    var int2 = randomInt((min / 2), (max / 2)) * 2;
                    break;
                case 1:
                    var int2 = randomInt((min / 10), (max / 10)) * 10;
                    break;
                case 2:
                    var int2 = randomInt((min / 100), (max / 100)) * 100;
                    break;
                default:
                    var int2 = randomInt(min, max);
                    break;
            }
            var quest = phrase[int1] + " of " + int2;
            var ans = int2 / perc[int1];
            break;
        case 'perc-find-2':
            var perc = (randomInt(1, 19) * 5);
            var mult = perc / 100;
            var min = 10;
            var max = 200;
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var quest = perc + "% of " + int1;
            break;
        case 'perc-find-3':
            var perc = randomInt(1, 99);
            var mult = perc / 100;
            var min = 10;
            var max = 200;
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var quest = perc + "% of " + int1; 
            break;
        case 'perc-inc':
            var min = 10;
            var max = 200;
            var perc = (randomInt(1, 19) * 5);
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var quest = "Increase " + int1 + " by " + perc + "%";
            var ans = int1 + ans;
            break;
        case 'perc-dec':
            var min = 10;
            var max = 200;
            var perc = (randomInt(1, 19) * 5);
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var quest = "Decrease " + int1 + " by " + perc + "%";
            var ans = int1 - ans;
            break;
        case 'perc-mult':
            var int1 = randomInt(1, 3);
            var perc = randomInt(1, 99);
            var mult = perc / 100;
            if(int1 == 1){
                var quest = "Decrease by " + perc + "%";
                var ans = (1 - mult).toFixed(2);
            }else if(int1 == 2){
                var quest = "Increase by " + perc + "%";
                var ans = (1 + mult).toFixed(2);
            }else{
                var quest = "Find " + perc + "%";
                var ans = mult;
            }
            break;
        /* -------------------- Precision -------------------- */
        case 'round-dec':
            var places = randomInt(1, 5);
            var digits = randomInt(places + 1, places + 5);
            var int = Math.pow(10, digits) - 1;
            var num = randomInt(1, int);
            var dec = randomInt(places + 1, digits + 1);
            var quest = "Round " + parseFloat(num / Math.pow(10, dec)) + "<br>to " + places + " d.p.";
            var ans = (math.round(num / Math.pow(10, dec), places)).toFixed(places);
            break;
        case 'round-sig':
            var places = randomInt(1, 5);
            var digits = randomInt(places + 1, places + 5);
            var int = Math.pow(10, digits) - 1;
            var num = randomInt(1, int);
            var quest = "Round " + parseInt(num) + "<br>to " + places + " s.f.";
            var ans = parseFloat((num).toPrecision(places));
            break;
        case 'round-sig-dec':
            var places = randomInt(1, 5);
            var digits = randomInt(places + 1, places + 5);
            var int = Math.pow(10, digits) - 1;
            var num = randomInt(1, int);
            var dec = randomInt(digits, digits + 5);
            var quest = "Round " + parseFloat(num / Math.pow(10, dec)) + "<br>to " + places + " s.f.";
            var ans = (num / Math.pow(10, dec)).toPrecision(places);
            break;
        /* -------------------- Fractions -------------------- */
        case 'frac-add':
            var den1 = randomInt(2, 15);
            var num1 = randomInt(1, Math.floor(den1 / 2));
            var den2 = randomInt(2, 15);
            var num2 = randomInt(1, Math.floor(den2 / 2));
            var ans1 = math.add(math.fraction(num1 + '/' + den1), math.fraction(num2 + '/' + den2));
            var quest = "<sup>" + num1 + "</sup>&frasl;<sub>" + den1 + "</sub> + <sup>" + num2 + "</sup>&frasl;<sub>" + den2 + "</sub>";
            var ans = "<sup>" + ans1['n'] + "</sup>&frasl;<sub>" + ans1['d'] + "</sub>";
            if(ans1['n'] == 1 && ans1['d'] == 1){
                ans = 1;
            }
            if(ans1['n'] == 0){
                ans = 0;
            }
            if(ans1['d'] == 1){
                ans = ans1['n'];
            }
            break;
        case 'frac-sub':
            var den1 = randomInt(2, 15);
            var num1 = randomInt(1, Math.floor(den1 / 2));
            var den2 = randomInt(2, 15);
            var num2 = randomInt(1, Math.floor(den2 / 2));
            var ans1 = math.subtract(math.fraction(num1 + '/' + den1), math.fraction(num2 + '/' + den2));
            var quest = "<sup>" + num1 + "</sup>&frasl;<sub>" + den1 + "</sub> - <sup>" + num2 + "</sup>&frasl;<sub>" + den2 + "</sub>";
            var ans = "<sup>" + ans1['n'] + "</sup>&frasl;<sub>" + ans1['d'] + "</sub>";
            if(ans1['n'] == 1 && ans1['d'] == 1){
                ans = 1;
            }
            if(ans1['n'] == 0){
                ans = 0;
            }
            if(ans1['d'] == 1){
                ans = ans1['n'];
            }
            break;
        case 'frac-mult':
            var den1 = randomInt(2, 15);
            var num1 = randomInt(1, Math.floor(den1 / 2));
            var den2 = randomInt(2, 15);
            var num2 = randomInt(1, Math.floor(den2 / 2));
            var ans1 = math.multiply(math.fraction(num1 + '/' + den1), math.fraction(num2 + '/' + den2));
            var quest = "<sup>" + num1 + "</sup>&frasl;<sub>" + den1 + "</sub> x <sup>" + num2 + "</sup>&frasl;<sub>" + den2 + "</sub>";
            var ans = "<sup>" + ans1['n'] + "</sup>&frasl;<sub>" + ans1['d'] + "</sub>";
            if(ans1['n'] == 1 && ans1['d'] == 1){
                ans = 1;
            }
            if(ans1['n'] == 0){
                ans = 0;
            }
            if(ans1['d'] == 1){
                ans = ans1['n'];
            }
            break;
        case 'frac-div':
            var den1 = randomInt(2, 15);
            var num1 = randomInt(1, Math.floor(den1 / 2));
            var den2 = randomInt(2, 15);
            var num2 = randomInt(1, Math.floor(den2 / 2));
            var ans1 = math.divide(math.fraction(num1 + '/' + den1), math.fraction(num2 + '/' + den2));
            var quest = "<sup>" + num1 + "</sup>&frasl;<sub>" + den1 + "</sub> &divide; <sup>" + num2 + "</sup>&frasl;<sub>" + den2 + "</sub>";
            var ans = "<sup>" + ans1['n'] + "</sup>&frasl;<sub>" + ans1['d'] + "</sub>";
            if(ans1['n'] == 1 && ans1['d'] == 1){
                ans = 1;
            }
            if(ans1['n'] == 0){
                ans = 0;
            }
            if(ans1['d'] == 1){
                ans = ans1['n'];
            }
            break;
        case 'frac-simp':
            var int1 = randomInt(2, 10);
            var num1 = randomInt(1, 10) * int1;
            var den1 = randomInt(num1 + 1, 15) * int1;
            var ans1 = math.fraction(num1 + '/' + den1)
            var quest = "Simplify <sup>" + num1 + "</sup>&frasl;<sub>" + den1 + "</sub>";
            var ans = "<sup>" + ans1['n'] + "</sup>&frasl;<sub>" + ans1['d'] + "</sub>";
            break;
        case 'frac-amount':
            var quest = "";
            var ans = "";
            break;
        /* -------------------- Order of Operations -------------------- */
        case 'bodmas':
            var quest = "";
            var ans = "";
            break;
        /* -------------------- Algebra -------------------- */
        case 'alg-simp-1':
            var quest = "";
            var ans = "";
            break;
        case 'alg-simp-2':
            var quest = "";
            var ans = "";
            break;
        case 'alg-sub':
            var quest = "";
            var ans = "";
            break;
        case 'alg-solve-1':
            var quest = "";
            var ans = "";
            break;
        case 'alg-solve-2':
            var quest = "";
            var ans = "";
            break;
        case 'alg-exp':
            var quest = "";
            var ans = "";
            break;
        case 'alg-fact':
            var quest = "";
            var ans = "";
            break;
        /* -------------------- Sequences -------------------- */
        case 'seq-mult':
            var quest = "";
            var ans = "";
            break;
        case 'seq-term':
            var quest = "";
            var ans = "";
            break;
        case 'seq-nth':
            var quest = "";
            var ans = "";
            break;
        /* -------------------- End -------------------- */
        default:
            var quest = 'More Questions Coming Soon';
            var ans = '-';
            break;
    }
    return [quest, ans];
}