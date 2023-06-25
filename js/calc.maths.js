function getCalc(type){
    switch (type) {
        /* -------------------- Integer Arithmetic -------------------- */
        case 'int-add':
            var int1 = randomInt(1, 100), int2 = randomInt(1, 100);
            var quest = `${int1} + ${int2}`;
            var ans = int1 + int2;
            break;
        case 'int-sub':
            var int1 = randomInt(2, 100), int2 = randomInt(1, int1);
            var quest = `${int1} &minus; ${int2}`;
            var ans = int1 - int2;
            break;
        case 'int-mult':
            var int1 = randomInt(1, 12), int2 = randomInt(1, 12);
            var quest = `${int1} &times; ${int2}`;
            var ans = int1 * int2;
            break;
        case 'int-div':
            var int1 = randomInt(1, 12), int2 = randomInt(1, 12);
            var quest = `${(int1 * int2)} &divide; ${int2}`;
            var ans = int1;
            break;
        case 'int-mult-2x2':
            var int1 = randomInt(10, 99), int2 = randomInt(10, 99);
            var quest = `${int1} &times; ${int2}`;
            var ans = int1 * int2;
            break;
        /* -------------------- Decimal Arithmetic -------------------- */
        case 'dec-add':
            var int1 = randomInt(0, 100), int2 = randomInt(0, 100);
            var dp1 = randomInt(1, 4), dp2 = randomInt(1, 4);
            var dec1 = randomInt((Math.pow(10, dp1 - 1)), (Math.pow(10, dp1)) - 1);
            var dec2 = randomInt((Math.pow(10, dp2 - 1)), (Math.pow(10, dp2)) - 1);
            var quest = `${int1}.${dec1} + ${int2}.${dec2}`;
            var ans = (parseFloat(int1 + "." + dec1) + parseFloat(int2 + "." + dec2)).toFixed(Math.max(dp1, dp2));
            break;
        case 'dec-sub':
            var int1 = randomInt(1, 99), int2 = randomInt(int1 + 1, 100);
            var dp1 = randomInt(1, 4), dp2 = randomInt(1, 4);
            var dec1 = randomInt((Math.pow(10, dp1 - 1)), (Math.pow(10, dp1)) - 1);
            var dec2 = randomInt((Math.pow(10, dp2 - 1)), (Math.pow(10, dp2)) - 1);
            var quest = `${int2}.${dec2} &minus; ${int1}.${dec1}`;
            var ans = (parseFloat(int2 + "." + dec2) - parseFloat(int1 + "." + dec1)).toFixed(Math.max(dp1, dp2));
            break;
        case 'dec-mult':
            var int1 = randomInt(0, 100), int2 = randomInt(0, 100);
            var dp1 = randomInt(1, 4), dp2 = randomInt(1, 4);
            var dec1 = randomInt((Math.pow(10, dp1 - 1)), (Math.pow(10, dp1)) - 1);
            var dec2 = randomInt((Math.pow(10, dp2 - 1)), (Math.pow(10, dp2)) - 1);
            var quest = `${int1}.${dec1} &times; ${int2}.${dec2}`;
            var ans = (parseFloat(int1 + "." + dec1) * parseFloat(int2 + "." + dec2)).toFixed(dp1 + dp2);
            break;
        case 'dec-div':
            var int1 = randomInt(0, 10), int2 = randomInt(0, 10);
            var dp1 = randomInt(1, 4);
            var dec1 = randomInt((Math.pow(10, dp1 - 1)), (Math.pow(10, dp1)) - 1);
            var ans = parseFloat(int1 + "." + dec1).toFixed(dp1);
            var quest = `${parseFloat(ans * int2).toFixed(dp1)} &divide; ${int2}`;
            break;
        /* -------------------- Negative Arithmetic -------------------- */
        case 'neg-add':
            var int1 = randomNeg(1, 100), int2 = randomNeg(1, 100);
            var quest = `${int1} + ${int2}`;
            var ans = int1 + int2;
            break;
        case 'neg-sub':
            var int1 = randomNeg(2, 100), int2 = randomNeg(1, int1);
            var quest = `${int1} &minus; ${int2}`;
            var ans = int1 - int2;
            break;
        case 'neg-mult':
            var int1 = randomNeg(1, 12), int2 = randomNeg(1, 12);
            var quest = `${int1} &times; ${int2}`;
            var ans = int1 * int2;
            break;
        case 'neg-div':
            var int1 = randomNeg(1, 12), int2 = randomNeg(1, 12);
            var quest = `${(int1 * int2)} &divide; ${int2}`;
            var ans = int1;
            break;
        /* -------------------- Percentages -------------------- */
        case 'perc-find-1':
            var int1 = randomInt(0, 3), min = 10, max = 1000;
            var perc = [2, 4, 10, 100], phrase = ["50%", "25%", "10%", "1%"];
            switch (int1){
                case 0: 
                    var int2 = randomInt((min / 2), (max / 2)) * 2;
                    break;
                case 1:
                    var int2 = randomInt((min / 4), (max / 4)) * 4;
                    break;
                case 2:
                    var int2 = randomInt((min / 10), (max / 10)) * 10;
                    break;
                case 3:
                    var int2 = randomInt((min / 100), (max / 100)) * 100;
                    break;
                default:
                    var int2 = randomInt(min, max);
                    break;
            }
            var quest = `${phrase[int1]} of ${int2}`;
            var ans = int2 / perc[int1];
            break;
        case 'perc-find-2':
            var perc = (randomInt(1, 19) * 5), min = 10, max = 200;
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var quest = `${perc}% of ${int1}`;
            break;
        case 'perc-find-3':
            var perc = randomInt(1, 99), min = 10, max = 200;
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var quest = `${perc}% of ${int1}`;
            break;
        case 'perc-inc':
            var perc = (randomInt(1, 19) * 5), min = 10, max = 200;
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var quest = `Increase ${int1} by ${perc}%`;
            var ans = int1 + ans;
            break;
        case 'perc-dec':
            var perc = (randomInt(1, 19) * 5), min = 10, max = 200;
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var quest = `Decrease ${int1} by ${perc}%`;
            var ans = int1 - ans;
            break;
        case 'perc-mult':
            var int1 = randomInt(1, 3), perc = randomInt(1, 99), mult = perc / 100;
            if(int1 == 1){
                var quest = `What multiplier would you use to<br>Decrease by ${perc}%`;
                var ans = (1 - mult).toFixed(2);
            }else if(int1 == 2){
                var quest = `What multiplier would you use to<br>Increase by ${perc}%`;
                var ans = (1 + mult).toFixed(2);
            }else{
                var quest = `What multiplier would you use to<br>Find ${perc}%`;
                var ans = mult;
            }
            break;
        case 'perc-simp-int':
            var perc = (randomInt(1, 4) * 5), min = 10, max = 200;
            var ans = randomInt(min/perc, max/perc) * perc;
            var int1 = ans * 100 / perc;
            var year = randomInt(2,5), ans = `£ ${int1 + (ans * year)}`;
            var quest = `£${int1} is invested and earns ${perc}% per year in simple interest.
                How much does it earn after ${year} years?`;
            break;
        case 'perc-comp-int':
            var perc = randomInt(1,10), year = randomInt(3,8);
            var int1 = randomInt(1,100) * 100;
            var quest = `£${int1} is invested and earns ${perc}% per annum in compound interest.
                How much does it earn after ${year} years?`;
            var ans = `£${(int1 * Math.pow((100 + perc)/100,year)).toFixed(2)}`;
            break;
        /* -------------------- Precision -------------------- */
        case 'round-dec':
            var places = randomInt(1, 5), digits = randomInt(places + 1, places + 5);
            var int = Math.pow(10, digits) - 1, num = randomInt(1, int), dec = randomInt(places + 1, digits + 1);
            var quest = `Round ${parseFloat(num / Math.pow(10, dec))}<br>to ${places} d.p.`;
            var ans = (math.round(num / Math.pow(10, dec), places)).toFixed(places);
            break;
        case 'round-sig':
            var places = randomInt(1, 5), digits = randomInt(places + 1, places + 5);
            var int = Math.pow(10, digits) - 1, num = randomInt(1, int);
            var quest = `Round ${parseInt(num)}<br>to ${places} s.f.`;
            var ans = parseFloat((num).toPrecision(places));
            break;
        case 'round-sig-dec':
            var places = randomInt(1, 5), digits = randomInt(places + 1, places + 5);
            var int = Math.pow(10, digits) - 1, num = randomInt(1, int), dec = randomInt(digits, digits + 5);
            var quest = `Round ${parseFloat(num / Math.pow(10, dec))}<br>to ${places} s.f.`;
            var ans = (num / Math.pow(10, dec)).toPrecision(places);
            break;
        case 'round-app-1':
            if(Math.random()<1/4){
                var int1 = randomInt(2,4), int2 = int1 + randomInt(-1,1);
                var int3 = randomInt(Math.pow(10,int1),Math.pow(10,int1+1)-1);
                var int4 = randomInt(Math.pow(10,int2),Math.pow(10,int2+1)-1);
                var quest = `Approximately, work out ${int3} + ${int4}.`;
                var ans = parseFloat(int3.toPrecision(1)) + parseFloat(int4.toPrecision(1));
            }else if(Math.random()<1/3){
                var int1 = randomInt(2,4), int2 = int1 + randomInt(-1,1);
                var int3 = randomInt(Math.pow(10,int1),Math.pow(10,int1+1)-1);
                var int4 = randomInt(Math.pow(10,int2),Math.pow(10,int2+1)-1);
                var quest = `Approximately, work out ${Math.max(int3,int4)} - ${Math.min(int3,int4)}.`;
                var ans = parseFloat(Math.max(int3,int4).toPrecision(1)) - parseFloat(Math.min(int3,int4).toPrecision(1));
            }else if(Math.random()<1/2){
                var int1 = randomInt(2,4), int2 = int1 + randomInt(-1,1);
                var int3 = randomInt(Math.pow(10,int1),Math.pow(10,int1+1)-1);
                var int4 = randomInt(Math.pow(10,int2),Math.pow(10,int2+1)-1);
                var quest = `Approximately, work out ${int3} &times; ${int4}.`;
                var ans = parseFloat(int3.toPrecision(1)) * parseFloat(int4.toPrecision(1));
            }else{
                var arr1 = {
                    1: randomInt(1,10),
                    2: randomInt(1,5),
                    3: randomInt(1,3),
                    4: randomIntExcl(1,5,[3,4]),
                    5: randomIntExcl(1,5,[3,4])
                }
                var int1 = randomInt(1,5), int2 = arr1[int1]; 
                var int3 = int1 * int2;
                var int4 = randomInt(2,5), int5 = randomInt(1,int4-1);
                var int6 = int3 * Math.pow(10,int4), int7 = int2 * Math.pow(10,int5);
                var int6 = int6 + randomInt((-1 * Math.floor((int6/2)/10)), Math.floor((int6/2)/10));
                var int7 = int7 + randomInt((-1 * Math.floor((int7/2)/10)), Math.floor((int7/2)/10));
                var quest = `Approximately, work ot ${int6} &divide; ${int7}.`;
                var ans = parseFloat(int6.toPrecision(1)) / parseFloat(int7.toPrecision(1));
            }
            break;
        /* -------------------- Fractions -------------------- */
        case 'frac-add':
            var den1 = randomInt(2, 15), num1 = randomInt(1, Math.floor(den1 / 2));
            var den2 = randomInt(2, 15), num2 = randomInt(1, Math.floor(den2 / 2));
            var ans1 = math.add(math.fraction(num1 + '/' + den1), math.fraction(num2 + '/' + den2));
            var quest = `<sup>${num1}</sup>&frasl;<sub>${den1}</sub> + <sup>${num2}</sup>&frasl;<sub>${den2}</sub>`;
            var ans = `<sup>${ans1['n']}</sup>&frasl;<sub>${ans1['d']}</sub>`;
            if(ans1['n'] == 1 && ans1['d'] == 1){ ans = 1; }
            if(ans1['n'] == 0){ ans = 0; }
            if(ans1['d'] == 1){ ans = ans1['n']; }
            break;
        case 'frac-sub':
            var den1 = randomInt(2, 15), num1 = randomInt(1, Math.floor(den1 / 2));
            var den2 = randomInt(2, 15), num2 = randomInt(1, Math.floor(den2 / 2));
            var ans1 = math.subtract(math.fraction(num1 + '/' + den1), math.fraction(num2 + '/' + den2));
            var quest = `<sup>${num1}</sup>&frasl;<sub>${den1}</sub> &minus; <sup>${num2}</sup>&frasl;<sub>${den2}</sub>`;
            var ans = `<sup>${ans1['n']}</sup>&frasl;<sub>${ans1['d']}</sub>`;
            if(ans1['n'] == 1 && ans1['d'] == 1){ ans = 1; }
            if(ans1['n'] == 0){ ans = 0; }
            if(ans1['d'] == 1){ ans = ans1['n']; }
            break;
        case 'frac-mult':
            var den1 = randomInt(2, 15), num1 = randomInt(1, Math.floor(den1 / 2));
            var den2 = randomInt(2, 15), num2 = randomInt(1, Math.floor(den2 / 2));
            var ans1 = math.multiply(math.fraction(num1 + '/' + den1), math.fraction(num2 + '/' + den2));
            var quest = `<sup>${num1}</sup>&frasl;<sub>${den1}</sub> &times; <sup>${num2}</sup>&frasl;<sub>${den2}</sub>`;
            var ans = `<sup>${ans1['n']}</sup>&frasl;<sub>${ans1['d']}</sub>`;
            if(ans1['n'] == 1 && ans1['d'] == 1){ ans = 1; }
            if(ans1['n'] == 0){ ans = 0; }
            if(ans1['d'] == 1){ ans = ans1['n']; }
            break;
        case 'frac-div':
            var den1 = randomInt(2, 15), num1 = randomInt(1, Math.floor(den1 / 2));
            var den2 = randomInt(2, 15), num2 = randomInt(1, Math.floor(den2 / 2));
            var ans1 = math.divide(math.fraction(num1 + '/' + den1), math.fraction(num2 + '/' + den2));
            var quest = `<sup>${num1}</sup>&frasl;<sub>${den1}</sub> &divide; <sup>${num2}</sup>&frasl;<sub>${den2}</sub>`;
            var ans = `<sup>${ans1['n']}</sup>&frasl;<sub>${ans1['d']}</sub>`;
            if(ans1['n'] == 1 && ans1['d'] == 1){ ans = 1; }
            if(ans1['n'] == 0){ ans = 0; }
            if(ans1['d'] == 1){ ans = ans1['n']; }
            break;
        case 'frac-simp':
            var int1 = randomInt(2, 10), num1 = randomInt(1, 10) * int1, den1 = randomInt(num1 + 1, 15) * int1;
            var ans1 = math.fraction(num1 + '/' + den1)
            var quest = `Simplify <sup>${num1}</sup>&frasl;<sub>${den1}</sub>`;
            var ans = `<sup>${ans1['n']}</sup>&frasl;<sub>${ans1['d']}</sub>`;
            break;
        case 'frac-amount':
            var den1 = randomInt(2,15), int1 = randomInt(2,10);
            var num1 = randomInt(1, den1-1 ), int2 = den1 * int1;
            var quest = `<sup>${num1}</sup>&frasl;<sub>${den1}</sub> of ${int2}`;
            var ans = (int2 / den1) * num1;
            break;
        /* -------------------- Order of Operations -------------------- */
        case 'ooo-add-sub':
            var int1 = randomInt(1,20), int2 = randomInt(1,20), int3 = randomInt(1,20);
            var form1 = [                
                [`${int1} + ${int2} &minus; ${int3}`, (int1 + int2) - int3],
                [`${int1} &minus; ${int2} + ${int3}`, (int1 - int2) + int3],
                [`(${int1} + ${int2}) &minus; ${int3}`, (int1 + int2) - int3],
                [`(${int1} &minus; ${int2}) + ${int3}`, (int1 - int2) + int3],
                [`${int1} + (${int2} &minus; ${int3})`, int1 + (int2 - int3)],
                [`${int1} &minus; (${int2} + ${int3})`, int1 - (int2 + int3)]
            ];
            var num = randomInt(0, form1.length-1);
            var quest = form1[num][0], ans = form1[num][1];
            break;
        case 'ooo-mult-div':
            var int1 = randomInt(1,10), int2 = randomInt(1,10), int3 = randomInt(1,10);
            var int4 = randomInt(2,5) * int1, int5 = randomInt(2,5) * int2 * int3;
            var form1 = [                
                [`${int4} &times; ${int2} &divide; ${int1}`, (int4 * int2) / int1],
                [`${int4} &divide; ${int1} &times; ${int3}`, (int4 / int1) * int3],
                [`(${int4} &times; ${int2}) &divide; ${int1}`, (int4 * int2) / int1],
                [`(${int4} &divide; ${int1}) &times; ${int2}`, (int4 / int1) * int2],
                [`${int2} &times; (${int4} &divide; ${int1})`, int2 * (int4 / int1)],
                [`${int5} &divide; (${int2} &times; ${int3})`, int5 / (int2 * int3)]
            ];
            var num = randomInt(0, form1.length-1);
            var quest = form1[num][0], ans = form1[num][1];
            break;
        /* -------------------- Algebra -------------------- */
        case 'alg-simp-1':
            var letters = "abcdefghjkmnpqrstuvwxyz", letter = letters.charAt(randomInt(0, letters.length-1));
            var int1 = randomInt(2,5), int2 = 0, ans = 0, quest = "";
            for (let i = 0; i < int1; i++) {
                int2 = randomNeg(1, 10);
                if(int2 == 1){ quest += ` + ${letter}`, ans += 1;
                }else if(int2 == -1){ quest += ` &minus; ${letter}`, ans += -1;
                }else if(int2 > 0){ quest += ` + ${int2}${letter}`, ans += int2;
                }else{ quest += ` ${int2}${letter}`, ans += int2;
                }                             
            }
            if(quest.charAt(1) == "+"){ quest = quest.slice(2); }
            ans += letter, quest = `Simplify<br>${quest}`;  
            break;
        case 'alg-simp-2':
            var letters = "abcdefghjkmnpqrstuvwxyz"
            var letter1 = letters.charAt(randomInt(0, letters.length-1));
            letters = letters.replace(letter1, "");
            var letter2 = letters.charAt(randomInt(0, letters.length-1));
            var int1 = randomInt(3,5), int2 = 0, ans1 = 0, ans2 = 0, quest = "";
            for (let i = 0; i < int1; i++) {
                int2 = randomNeg(1, 10), int3 = randomNeg(1, 2);
                if(int2 == 1){ 
                    if(int3 == 1){ quest += ` + ${letter1}`, ans1 += 1;
                    }else{ quest += ` + ${letter2}`, ans2 += 1;
                    }
                }else if(int2 == -1){ 
                    if(int3 == 1){ quest += ` &minus; ${letter1}`, ans1 += -1;
                    }else{ quest += ` &minus; ${letter2}`, ans2 += -1;
                    }
                }else if(int2 > 0){
                    if(int3 == 1){ quest += ` + ${int2}${letter1}`, ans1 += int2;
                    }else{ quest += ` + ${int2}${letter2}`, ans2 += int2;
                    }
                }else{
                    if(int3 == 1){ quest += ` ${int2}${letter1}`, ans1 += int2;
                    }else{ quest += ` ${int2}${letter2}`,ans2 += int2;
                    }
                }                             
            }
            if(quest.charAt(1) == "+"){ quest = quest.slice(2); }
            if(ans1 == 0){ ans1 = "";
            }else if(ans1 == 1){ ans1 = letter1;
            }else if(ans1 == -1){ ans1 = `-${letter1}`;
            }else if(ans1 > 0){ ans1 = ` +${ans1}${letter1}`;
            }else if(ans1 < 0){ ans1 = ` ${ans1}${letter1}`;
            }
            if(ans2 == 0){ ans2 = "";
            }else if(ans2 == 1){ ans2 = `+${letter2}`;
            }else if(ans2 == -1){ ans2 = `-${letter2}`;
            }else if(ans2 > 0){ ans2 = ` +${ans2}${letter2}`;
            }else if(ans2 < 0){ ans2 = ` ${ans2}${letter2}`;
            }
            var ans = ans1 + ans2;
            if(ans.charAt(1) == "+"){ ans = ans.slice(2); }
            quest = `Simplify<br>${quest}`;     
            break;
        case 'alg-sub':
            var letters = "abcdefghjkmnpqrstuvwxyz", letter = letters.charAt(randomInt(0, letters.length-1));
            var int1 = randomInt(2,10), int2 = randomNeg(1, 10), int3 = randomInt(1,10);
            if(int2 > 0){
                var quest = `Find ${int1}${letter} + ${int2} when ${letter} = ${int3}`;
            }else{
                var quest = `Find ${int1}${letter} ${int2} when ${letter} = ${int3}`;
            }
            var ans = (int1 * int3) + int2;
            break;
        case 'alg-solve-1':
            var letters = "abcdefghjkmnpqrstuvwxyz", letter = letters.charAt(randomInt(0, letters.length-1));
            var int1 = randomInt(2,10), int2 = randomInt(1,10), operation = randomInt(1,4), sub = randomInt(1,4);
            switch (operation) {
                case 1:
                    if(sub <= 2){ var quest = `Solve ${int1} + ${letter} = ${int1 + int2}`, ans = int2;
                    }else{ var quest = `Solve ${letter} + ${int1} = ${int2 + int1}`, ans = int2;
                    }
                    break;
                case 2:
                    if(sub <= 2){ var quest = `Solve ${int1} &minus; ${letter} = ${int1 - int2}`, ans = int2;
                    }else{ var quest = `Solve ${letter} &minus; ${int1} = ${int2 - int1}`, ans = int2;
                    }
                    break;
                case 3:
                    var quest = `Solve ${int1}${letter} = ${int1 * int2}`, ans = int2;
                    break;
                case 4:
                    if(sub == 1){ var quest = `Solve ${int1 * int2} &divide; ${letter} = ${int1}`, ans = int2;
                    }else if(sub == 2){ var quest = `Solve <sup>${int1 * int2}</sup>&frasl;<sub>${letter}</sub>  = ${int2}`,ans = int2;
                    }else if(sub == 3){ var quest = `Solve ${letter} &divide; ${int1} = ${int2}`,ans = int1 * int2;
                    }else{ var quest = `Solve <sup>${letter}</sup>&frasl;<sub>${int1}</sub>  = ${int2}`,ans = int1 * int2;
                    }
                    break;
                default:
                    break;
            }
            break;
        case 'alg-solve-2':
            var letters = "abcdefghjkmnpqrstuvwxyz", letter = letters.charAt(randomInt(0, letters.length-1));
            var int1 = randomInt(2,10), int2 = randomInt(1,10), int3 = randomInt(1,10);
            var operation = randomInt(1,6);
            switch (operation) {
                case 1:
                    var quest = `Solve ${int1}${letter} + ${int3} = ${(int1 * int2) + int3}`, ans = int2;
                    break;
                case 2:
                    var quest = `Solve ${int1}${letter} &minus; ${int3} = ${(int1 * int2) - int3}`, ans = int2;
                    break;
                case 3:
                    var quest = `Solve <sup>${letter}</sup>&frasl;<sub>${int1}</sub> + ${int3} = ${int2 + int3}`, ans = int1 * int2;
                    break;
                case 4:
                    var quest = `Solve <sup>${letter}</sup>&frasl;<sub>${int1}</sub> &minus; ${int3} = ${int2 - int3}`, ans = int1 * int2;
                    break;
                case 5:
                    var quest = `Solve <sup>${int1 * int2}</sup>&frasl;<sub>${letter}</sub> + ${int3} = ${int1 + int3}`, ans = int2;
                    break;
                case 6:
                    var quest = `Solve <sup>${int1 * int2}</sup>&frasl;<sub>${letter}</sub> &minus; ${int3} = ${int1 - int3}`, ans = int2;
                    break;
                default:
                    break;
            }
            break;
        case 'alg-exp':
            var letters = "abcdefghjkmnpqrstuvwxyz", letter = letters.charAt(randomInt(0, letters.length-1));
            var int1 = randomInt(2,10), int2 = randomInt(2,10), int3 = randomInt(1,10), operation = randomInt(1,2);
            if(operation == 1){ var quest = `Expand ${int1}(${int2}${letter} + ${int3})`, ans = `${int1 * int2}${letter} + ${int1 * int3}`;
            }else{ var quest = `Expand ${int1}(${int2}${letter} &minus; ${int3})`, ans = `${int1 * int2}${letter} - ${int1 * int3}`;
            }
            break;
        case 'alg-fact':
            var letters = "abcdefghjkmnpqrstuvwxyz", letter = letters.charAt(randomInt(0, letters.length-1));
            var int1 = randomInt(2,10), int2 = randomInt(2,10), int3 = randomInt(1,10), operation = randomInt(1,2);
            if(operation == 1){ 
                var quest = `Factorise ${int1 * int2}${letter} + ${int1 * int3}`;
                var gcd = math.gcd((int1 * int2), (int1 * int3));
                if((int1 * int2)/gcd == 1){
                    var ans = `${gcd}(${letter} + ${(int1 * int3)/gcd})`;
                }else{
                    var ans = `${gcd}(${(int1 * int2)/gcd}${letter} + ${(int1 * int3)/gcd})`;
                }
            }else{ 
                var quest = `Factorise ${int1 * int2}${letter} &minus; ${int1 * int3}`;
                var gcd = math.gcd((int1 * int2), (int1 * int3));
                if((int1 * int2)/gcd == 1){
                    var ans = `${gcd}(${letter} &minus; ${(int1 * int3)/gcd})`;
                }else{
                    var ans = `${gcd}(${(int1 * int2)/gcd}${letter} &minus; ${(int1 * int3)/gcd})`;
                }
            }
            break;
        /* -------------------- Sequences -------------------- */
        case 'seq-mult':
            var int1 = randomInt(2, 20);
            var quest = `What are the first 5 multiples of ${int1}`;
            var ans = `${int1 * 1}, ${int1 * 2}, ${int1 * 3}, ${int1 * 4}, ${int1 * 5}`;
            break;
        case 'seq-term':
            var int1 = randomInt(2, 12), int2 = randomInt(0, 20), pos1 = [0,1,2,3,4,5];
            var int3 = randomInt(0,5);
            pos1.splice(int3, 1);
            var int4 = pos1[randomInt(0,4)];
            var arr = [
                (int1 * 1) + int2,
                (int1 * 2) + int2,
                (int1 * 3) + int2,
                (int1 * 4) + int2,
                (int1 * 5) + int2,
                (int1 * 6) + int2,
            ];
            var ans = arr.toString();
            arr[int3] = "...", arr[int4] = "...";
            var quest = arr.toString();
            break;
        case 'seq-nth':
            var int1 = randomInt(2, 12), int2 = randomInt(0, 20);
            var arr = [
                (int1 * 1) + int2,
                (int1 * 2) + int2,
                (int1 * 3) + int2,
                (int1 * 4) + int2,
                (int1 * 5) + int2,
                (int1 * 6) + int2,
            ];
            var quest = `Find the n<sup class="margin-right">th</sup>  term of<br>${arr.join(', ')}`;
            var ans = `${int1}n + ${int2}`;
            break;
        /* -------------------- End -------------------- */
        default:
            var quest = 'More Questions Coming Soon';
            var ans = '-';
            break;
    }
    return [quest, ans];
}