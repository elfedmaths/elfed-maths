var quest, ans;

function getCalcNum(type){
    switch (type) {
        /* ---------- Numeracy Foundation ---------- */
        case 'nf1': /* ----- Factors & Multiples ----- */
            var int1 = randomInt(3,8), int2 = randomIntExcl(3,8, int1);
            var arr1 = [`a multiple of ${int1}`,`divisible by ${int1}`,`has a factor of ${int1}`,`is in the ${int1} times table`];
            var arr2 = [`a multiple of ${int2}`,`divisible by ${int2}`,`has a factor of ${int2}`,`is in the ${int2} times table`];
            var int3 = randomInt(0,arr1.length-1), int4 = randomIntExcl(0,arr1.length-1, int3);
            quest = `NOCALC Give an example of a number that is ${arr1[int3]} and ${arr2[int4]}.`;
            ans = math.lcm(int1,int2) + ", " + 2*math.lcm(int1,int2) + ", " + 3*math.lcm(int1,int2) + ", ...";
            break;
        case 'nf2': /* ----- Convert Words & Digits ----- */
            var int1 = parseInt(randomInt(1,99) + "" + randomInt(0,99)+ "" + randomInt(1,9)), str1 = convertNum(int1);
            if(Math.random()<1/2){
                quest = `NOCALC Write ${str1} in digits.`;
                ans = int1;
            }else{
                quest = `NOCALC Write ${int1} in words.`;
                ans = str1;
            }
            break;
        case 'nf3': /* ----- Frarctions Of Amounts (Units) ----- */
            if(Math.random()<1/2){            
                var fracs = [
                    ['half', 1, 2],
                    ['a third', 1, 3],
                    ['a quarter', 1, 4],
                    ['a fifth', 1, 5],
                    ['a tenth', 1, 10]
                ];
                var int1 = randomInt(0,fracs.length-1), int2 = randomInt(1,10) * 10;
                quest = `NOCALC Calculate ${fracs[int1][0]} of ${fracs[int1][2] * int2}.`;
                ans = int2;
            }else{
                var int1 = randomInt(2,10), int2 = int1 * randomInt(1,9) * 10;
                quest = `CALC Calculate <sup>1</sup>&frasl;<sub>${int1}</sub> of £${(int2/10).toFixed(2)}.`;
                ans = '£' + ((int2/int1)/10).toFixed(2);
            }
            break;
        case 'nf4': /* ----- Addition incl. Decimals ----- */
            var int1 = randomInt(0,2), int2 = parseFloat((randomInt(9,999)/(10^int1)).toFixed(int1));
            var int3 = randomInt(0,2), int4 = parseFloat((randomInt(9,999)/(10^int3)).toFixed(int3));
            var int5 = randomInt(0,2), int6 = parseFloat((randomInt(9,999)/(10^int5)).toFixed(int5));
            if(Math.random()<1/3){
                quest = `NOCALC Find the total distance of ${int2}m, ${int4}m, and ${int6}m.`;
                ans = parseFloat((int2 + int4 + int6).toFixed(Math.max(int1,int3,int5))) + "m";
            }else if(Math.random()<1/2){
                quest = `NOCALC What is the total cost of £${int2.toFixed(2)}, £${int4.toFixed(2)}, and £${int6.toFixed(2)}.`;
                ans = "£" + (int2 + int4 + int6).toFixed(2);
            }else{
                quest = `NOCALC Find the sum of ${int2}kg, ${int4}kg, and ${int6}kg.`;
                ans = parseFloat((int2 + int4 + int6).toFixed(Math.max(int1,int3,int5))) + "kg";
            }
            break;
        case 'nf5': /* ----- Subtraction incl. Decimals & Negatives ----- */
            if(Math.random()<1/2){
                var int1 = randomInt(999,9999), int2 = randomInt(99,int1 - 100);
                quest = `CALC Find the difference between £${(int1/100).toFixed(2)} and £${(int2/100).toFixed(2)}.`;
                ans = '£' + ((int1-int2)/100).toFixed(2);
            }else{
                var int1 = randomIntExcl(-20,20,0), int2 = randomIntExcl(-20,20,[0,int1]);
                quest = `NOCALC What is the temperature change between ${int1}&deg; and ${int2}&deg;?`;
                ans = Math.abs(int1 - int2) + '&deg;';
            }
            break;
        case 'nf6': /* ----- Time Difference ----- */
            var int1 = randomIntExcl(1,18,12), int2 = 10 * randomInt(1,5);
            var int3 = randomInt(2,5), int4 = 10 * randomInt(1,5);
            let d = new Date();
                d.setHours(int1);
                d.setMinutes(int2);
            quest = `NOCALC What time is is ${int3} hours and ${int4} minutes after ${d.toLocaleTimeString('en-GB', { hour12: true, hour: 'numeric', minute: 'numeric' })}?`
                d.setHours(d.getHours() + int3);
                d.setMinutes(d.getMinutes() + int4);
            ans = d.toLocaleTimeString('en-GB', { hour12: true, hour: 'numeric', minute: 'numeric' });
            break;
        case 'nf7': /* ----- Percentage of Amounts (50,25,10,20) ----- */
            var arr1 = [10,20,25,50];
            var int1 = arr1[randomInt(0,arr1.length-1)], int2 = (100/int1) * randomInt(4,10);
            quest = `NOCALC Calculate ${int1}% of £${int2}.`;
            ans = '£' + (int1 * int2 / 100);
            break;
        case 'nf8': /* ----- Multiplying incl. Decimals ----- */
            var int1 = randomInt(1,9), int2 = randomInt(0,99), int3 = randomInt(3,9);
            var arr1 =['calculators','books','rulers','pens','hats','flowers','flags'];
            quest = `CALC How much does ${int3} ${arr1[randomInt(0,arr1.length-1)]} cost when they are £${(int1 + (int2 / 100)).toFixed(2)} each?`;
            ans = '£' + ((int3 * (int1 + (int2 / 100)))).toFixed(2);
            break;
        case 'nf9': /* ----- Division with Remainders ----- */
            var int1 = randomInt(9,99), int2 = Math.ceil(((int1 * randomInt(3,10)) + randomInt(1,int1-1))/10);
            var arr1 =['calculators','books','rulers','pens','hats','flowers','flags'];
            if(Math.random()<1/2){
                if(int2%(int1/10) == 0) int2 += 1;
                quest = `CALC If ${arr1[randomInt(0,arr1.length-1)]} cost £${(int1/10).toFixed(2)} each. How many can be bought with £${int2}?`;
                ans = Math.floor(int2/(int1/10));
            }else{
                var var1 = arr1[randomInt(0,arr1.length-1)];
                if(int2%Math.ceil(int1/10) == 0) int2 += 1;
                quest = `CALC A box can fit ${Math.ceil(int1/10)} ${var1}. How many boxes are needed for ${int2} ${var1}?`;
                ans = Math.ceil(int2/Math.ceil(int1/10));
            }
            break;
        case 'nf10': /* ----- Averages with 5 Numbers ----- */
            var int1 = randomInt(1,10), int2 = randomInt(1,10), int3 = randomInt(1,10), int4 = randomInt(1,10);
            var int5 = (Math.ceil((int1+int2+int3+int4)/5)*5) - (int1+int2+int3+int4);
            var arr1 = [
                ['mean', math.mean(int1,int2,int3,int4,int5)],
                ['median', math.median(int1,int2,int3,int4,int5)],
                ['mode', math.mode(int1,int2,int3,int4,int5)],
                ['range', Math.max(int1,int2,int3,int4,int5) - Math.min(int1,int2,int3,int4,int5)]
            ]
            if(arr1[2][1].length > 2){
                arr1[2][1] = 'no mode';
            }else if(arr1[2][1].length == 2){
                arr1[2][1] = arr1[2][1][0] + ' and ' + arr1[2][1][1];
            }else{
                arr1[2][1] = arr1[2][1][0];
            }
            var int0 = randomInt(0,arr1.length-1);
            quest = `NOCALC Calculate the ${arr1[int0][0]} of ${int1}, ${int2}, ${int3}, ${int4}, and ${int5}.`;
            ans = arr1[int0][1];
            break;
        case 'nf11': /* ----- Simplify Fractions & Ratios ----- */
            var int1 = randomInt(5,20), int2 = int1 * randomInt(1,9), int3 = int1 * randomInt(int2 + 1, 12);
            if(Math.random()<1/2){
                quest = `CALC Simplify <sup>${int2}</sup>/<sub>${int3}</sub> fully.`;
                ans = `<sup>${int2/math.gcd(int2,int3)}</sup>/<sub>${int3/math.gcd(int2,int3)}</sub>`;
            }else{
                quest = `CALC Simplify the ratio ${int2} : ${int3} fully.`;
                ans = `${int2/math.gcd(int2,int3)} : ${int3/math.gcd(int2,int3)}`;
            }
            break;
        case 'nf12': /* ----- Area of Rectangles & Triangles ----- */
            var int1 = randomInt(5,20), int2 = 2 * randomInt(2,10);
            if(Math.random()<1/2){
                quest = `CALC Work out the area of a rectangle with a base of ${int1}cm and a height of ${int2}cm.`;
                ans = int1 * int2 + 'cm<sup>2</sup>';
            }else{
                quest = `CALC Work out the area of a triangle with a base of ${int1}cm and a height of ${int2}cm.`;
                ans = int1 * int2 / 2 + 'cm<sup>2</sup>';
            }
            break;

        /* ---------- Numeracy Intermediate I ---------- */       
        case 'nif1': /* ----- Fractions of Amounts ----- */
            if(Math.random()<1/2){            
                var fracs = [
                    ['a third', 1, 3],
                    ['two thirds', 2, 3],
                    ['a quarter', 1, 4],
                    ['three quarters', 3, 4],
                    ['a fifth', 1, 5],
                    ['two fifths', 2, 5],
                    ['three fifths', 3, 5],
                    ['four fifths', 4, 5],
                    ['a tenth', 1, 10],
                    ['three tenths', 3, 10],
                    ['seven tenths', 7, 10],
                    ['nine tenths', 9, 10]
                ];
                var int1 = randomInt(0,fracs.length-1), int2 = randomInt(5,20);
                quest = `NOCALC Calculate ${fracs[int1][0]} of ${fracs[int1][2] * int2}.`;
                ans = int2 * fracs[int1][1];
            }else{
                var int1 = randomInt(2,8), int2 = randomInt(int1 + 1,10), int3 = int2 * randomInt(3,15) * 10;
                int1 = int1/math.gcd(int1,int2);
                int2 = int2/math.gcd(int1,int2);
                quest = `CALC Calculate <sup>${int1}</sup>&frasl;<sub>${int2}</sub> of £${(int3/10).toFixed(2)}.`;
                ans = '£' + (((int3/int2)*int1)/10).toFixed(2);
            }
            break;
        case 'nif2': /* ----- Percentage of Amounts (x5) ----- */
            var int1 = 5 * randomInt(1,7), int2 = 50 * randomInt(4,10);
            quest = `NOCALC Calculate ${int1}% of £${int2}.`;
            ans = '£' + (int1 * int2 / 100).toFixed(2);
            break;
        case 'nif3': /* ----- Amounts as Percentages ----- */
            var int1 = 10 * randomInt(1,8), int2 = 10 * randomInt(1,20);
            quest = `NOCALC Calculate £${int1*int2/100} as a percentage of £${int2}.`;
            ans = int1 + '%';
            break;
        case 'nif4': /* ----- Simplify Fractions & Ratios ----- */
            var int1 = randomInt(5,20), int2 = int1 * randomInt(1,9), int3 = int1 * randomInt(int2 + 1, 12);
            if(Math.random()<1/2){
                quest = `CALC Simplify <sup>${int2}</sup>/<sub>${int3}</sub> fully.`;
                ans = `<sup>${int2/math.gcd(int2,int3)}</sup>/<sub>${int3/math.gcd(int2,int3)}</sub>`;
            }else{
                quest = `CALC Simplify the ratio ${int2} : ${int3} fully.`;
                ans = `${int2/math.gcd(int2,int3)} : ${int3/math.gcd(int2,int3)}`;
            }
            break;
        case 'nif5': /* ----- Averages with 6 Numbers ----- */
            var int1 = randomInt(1,12), int2 = randomInt(1,12), int3 = randomInt(1,12);
            var int4 = randomInt(1,12), int5 = randomInt(1,12);
            var int6 = (Math.ceil((int1+int2+int3+int4+int5)/6)*6) - (int1+int2+int3+int4+int5);
            var arr1 = [
                ['mean', math.mean(int1,int2,int3,int4,int5,int6)],
                ['median', math.median(int1,int2,int3,int4,int5,int6)],
                ['mode', math.mode(int1,int2,int3,int4,int5,int6)],
                ['range', Math.max(int1,int2,int3,int4,int5,int6) - Math.min(int1,int2,int3,int4,int5,int6)]
            ]
            if(arr1[2][1].length > 2){
                arr1[2][1] = 'no mode';
            }else if(arr1[2][1].length == 2){
                arr1[2][1] = arr1[2][1][0] + ' and ' + arr1[2][1][1];
            }else{
                arr1[2][1] = arr1[2][1][0];
            }
            var int0 = randomInt(0,arr1.length-1);
            quest = `NOCALC Calculate the ${arr1[int0][0]} of ${int1}, ${int2}, ${int3}, ${int4}, ${int5}, and ${int6}.`;
            ans = arr1[int0][1];
            break;
        case 'nif6': /* ----- Division with Remainders ----- */
            var int1 = randomIntExcl(9,99,10), int2 = randomInt((int1+1)/10,50);
            var arr1 =['calculators','books','rulers','pens','hats','flowers'];
            if(Math.random()<1/2){
                if(int2%(int1/10) == 0) int2 += 1;
                quest = `CALC If ${arr1[randomInt(0,arr1.length-1)]} cost £${(int1/10).toFixed(2)} each. How many can be bought with £${int2}?`;
                ans = Math.floor(int2/(int1/10));
            }else{
                var var1 = arr1[randomInt(0,arr1.length-1)];
                if(int2%Math.ceil(int1/10) == 0) int2 += 1;
                quest = `CALC A box can fit ${Math.ceil(int1/10)} ${var1}. How many boxes are needed for ${int2} ${var1}?`;
                ans = Math.ceil(int2/Math.ceil(int1/10));
            }
            break;
        case 'nif7': /* ----- Sharing in a Ratio ----- */
            var int1 = randomInt(1,5), int2 = randomIntExcl(1,5,int1), int3 = randomInt(5,15), int4 = (int1+int2) * int3;
            if(Math.random()<1/2){
                quest = `NOCALC Share £${int4} in the ratio ${int1}:${int2}.`;
            }else{
                quest = `NOCALC Divide £${int4} in the ratio ${int1}:${int2}.`;
            }
            ans =  `£${int1*int3} : £${int2*int3}`;
            break;
        case 'nif8': /* ----- Solving Equations (2-Step) ----- */
            var int1 = randomInt(1,9) * 10, int2 = randomInt(4,12), int3 = randomInt(int2+2,15);
            quest = `NOCALC ${int3} books weigh the same as ${int2} books plus a ${(int3-int2)*int1}kg weight.
                How much does each book weigh?`;
            ans = int1 + 'kg';
            break;
        case 'nif9': /* ----- Pythagoras (Long) ----- */
            var int1 = parseFloat(randomInt(10,99)/10), int2 = parseFloat(randomInt(10,99)/10);
            quest = `CALC A ladder reaches ${int1}m up a wall. The foot of the ladder is ${int2}m from the wall.
                What is the length of the ladder to 3 s.f.`;
            ans = (Math.sqrt(Math.pow(int1,2) + Math.pow(int2,2))).toPrecision(3) + 'm';
            break;
        case 'nif10': /* ----- Time Difference ----- */
            var int1 = randomIntExcl(1,18,12), int2 = 10 * randomInt(1,5);
            var int3 = randomInt(2,5), int4 = 10 * randomInt(1,5);
            let d1 = new Date();
                d1.setHours(int1);
                d1.setMinutes(int2);
            quest = `NOCALC What time is is ${int3} hours and ${int4} minutes after ${d1.toLocaleTimeString('en-GB', { hour12: true, hour: 'numeric', minute: 'numeric' })}?`
                d1.setHours(d1.getHours() + int3);
                d1.setMinutes(d1.getMinutes() + int4);
            ans = d1.toLocaleTimeString('en-GB', { hour12: true, hour: 'numeric', minute: 'numeric' });
            break;

        /* ---------- Numeracy Intermediate II ---------- */
        case 'nih1': /* ----- Fractions of Amounts incl. Increase/Decrease ----- */
            if(Math.random()<1/3){        
                var int1 = randomInt(2,8), int2 = randomInt(int1 + 1,10), int3 = int2 * randomInt(111,999);
                int1 = int1/math.gcd(int1,int2);
                int2 = int2/math.gcd(int1,int2);
                quest = `CALC Calculate <sup>${int1}</sup>&frasl;<sub>${int2}</sub> of £${(int3/100).toFixed(2)}.`;
                ans = '£' + (((int3/int2)*int1)/100).toFixed(2);
            }else if(Math.random()<1/2){
                var int1 = randomInt(1,8), int2 = randomInt(int1 + 1,10), int3 = int2 * randomInt(1,9) * 10;
                int1 = int1/math.gcd(int1,int2);
                int2 = int2/math.gcd(int1,int2);  
                quest = `CALC Work out what £${(int3/10).toFixed(2)} is during a <sup>${int1}</sup>&frasl;<sub>${int2}</sub> off sale.`;
                ans = '£' + ((int3 - ((int3/int2)*int1))/10).toFixed(2);
            }else{
                var int1 = randomInt(1,8), int2 = randomInt(int1 + 1,10), int3 = int2 * randomInt(1,9) * 10;
                int1 = int1/math.gcd(int1,int2);
                int2 = int2/math.gcd(int1,int2);  
                quest = `CALC What is £${(int3/10).toFixed(2)} when increased by <sup>${int1}</sup>&frasl;<sub>${int2}</sub>?`;
                ans = '£' + ((int3 + ((int3/int2)*int1))/10).toFixed(2);
            }
            break;
        case 'nih2': /* ----- Percentage Increase/Decrease (x5) ----- */
            var int1 = 5 * randomInt(1,7), int2 = 50 * randomInt(4,10);
            if(Math.random()<1/2){
                quest = `NOCALC Increase £${int2} by ${int1}%.`;
                ans = '£' + (int2 + (int1 * int2 / 100)).toFixed(2);
            }else{
                quest = `NOCALC Decrease £${int2} by ${int1}%.`;
                ans = '£' + (int2 - (int1 * int2 / 100)).toFixed(2);
            }
            break;
        case 'nih3': /* ----- Amounts as Percentages ----- */
            var int1 = 5 * randomInt(1,8), int2 = 5 * randomInt(1,20);
            quest = `NOCALC Calculate £${(int1*int2/100).toFixed(2)} as a percentage of £${int2}.`;
            ans = int1 + '%';
            break;
        case 'nih4': /* ----- Data Sets with 5 Numbers ----- */
            var int1 = randomInt(1,10), int2 = randomInt(1,10), int3 = randomInt(1,10), int4 = randomInt(1,10);
            var int5 = (Math.ceil((int1+int2+int3+int4)/5)*5) - (int1+int2+int3+int4);
            var arr1 = [
                'mean of ' + math.mean(int1,int2,int3,int4,int5),
                'median of ' + math.median(int1,int2,int3,int4,int5),
                math.mode(int1,int2,int3,int4,int5),
                'range of ' + Math.max(int1,int2,int3,int4,int5) - Math.min(int1,int2,int3,int4,int5)
            ]
            if(arr1[2].length > 2){
                arr1[2] = 'no mode';
            }else if(arr1[2].length == 2){
                arr1[2] = 'a mode of ' + arr1[2][0] + ' and ' + arr1[2][1];
            }else{
                arr1[2][1] = 'a mode of ' + arr1[2][0];
            }
            var int6 = randomInt(0,3), int7 = randomIntExcl(0,3,int6), int8 = randomIntExcl(0,3,[int6,int7]);
            quest = `CALC List 5 integers with a ${arr1[int6]}, a ${arr1[int7]}, and a ${arr1[int8]}.`;
            ans = `I.e. ${int1}, ${int2}, ${int3}, ${int4}, and ${int5}`;
            break;
        case 'nih4': /* ----- Reverse Sharing in a Ratio (1:2) ----- */
            var int1 = randomInt(1,5), int2 = randomIntExcl(1,5,int1), int3 = randomInt(5,15), int4 = (int1+int2) * int3;
            if(Math.random()<1/2){
                quest = `NOCALC When an amount is shared in the ratio ${int1}:${int2},
                    the larger share is £${Math.max(int1,int2)*int3}. What is the original amount?`;
            }else{
                quest = `NOCALC When an amount is shared in the ratio ${int1}:${int2},
                    the smaller share is £${Math.min(int1,int2)*int3}. What is the original amount?`;
            }
            ans =  '£' + int4;
            break;
        case 'nih5': /* ----- Solving Equations (3-Step) ----- */
            var int1 = randomInt(1,9) * 10, int2 = randomInt(1,9) * 10, int3 = randomInt(4,12), int4 = randomInt(2, int3-2);
            var int5 = int1 * (int3 - int4) + int2;
            if(int5 < 0){
                int3 += 1;
                int5 += int1;
            }
            quest = `NOCALC ${int3} identical books and a ${int2}kg weight weigh the same as ${int4} books plus a ${int5}kg weight.
                How much does each book weigh?`;
            ans = int1 + 'kg';
            break;
        case 'nih6': /* ----- Reverse Problems Involving Money ----- */
            var int1 = randomInt(2,9), int2 = (randomInt(11,99)/10).toFixed(2);
            var int3 = randomInt(2,9), int4 = randomInt(2,9);
            var int5 = ((int1 * int3) + (int2 * int4)).toFixed(2)
            quest = `NOCALC You buy ${int3}kg of strawberries that cost £${int1} per kg.
                You also buy some blueberries that cost £${int2} per kg.
                The total cost is £${int5}. What mass of blueberries was bought?`;
            ans = int4 + "kg";
            break;
        case 'nih7': /* ----- Best Buys ----- */
            var int1 = randomInt(10,99)/10, int2 = randomInt(10,99)/10;
            var int3 = int1 + randomIntExcl(-10,10,0)/10, int4 = randomInt(10,99)/10;
            quest = `CALC Shop A sells sweets at £${(int1 * int2).toFixed(2)} for ${int2.toFixed(1)}kg.
                Shop B sells sweets at £${(int3 * int4).toFixed(2)} for ${int4.toFixed(1)}kg.
                Show clearly which shop is better value.`;
            if((int1*int2).toFixed(2)/int2.toFixed(2)<(int3*int4).toFixed(2)/int4.toFixed(2)){
                ans = `Shop A at £${((int1*int2).toFixed(2)/int2.toFixed(2)).toFixed(2)} per kg.`;
            }else{
                ans = `Shop B at £${((int3*int4).toFixed(2)/int4.toFixed(2)).toFixed(2)} per kg.`
            }
            break;
        case 'nih8': /* ----- Pythagoras (Short and Long) ----- */
            var int1 = parseFloat(randomInt(10,99)/10), int2 = parseFloat(randomInt(10,99)/10);
            if(Math.random()<1/3){
                quest = `CALC A ladder reaches ${int1}m up a wall. The foot of the ladder is ${int2}m from the wall.
                    What is the length of the ladder to 3 s.f.`;
                ans = (Math.sqrt(Math.pow(int1,2) + Math.pow(int2,2))).toPrecision(3) + 'm';
            }else if(Math.random()<1/2){
                quest = `CALC A ladder is ${Math.max(int1,int2)}m long and the foot of the ladder is ${Math.min(int1,int2)}m from the wall.
                    How far does the ladder reach up the wall to 3 s.f.`;
                ans = (Math.sqrt(Math.pow(Math.max(int1,int2),2) - Math.pow(Math.min(int1,int2),2))).toPrecision(3) + 'm';
            }else{
                quest = `CALC A ladder is ${Math.max(int1,int2)}m long and reaches ${Math.min(int1,int2)}m up the wall.
                    How far is the base of the ladder from the wall to 3 s.f.`;
                ans = (Math.sqrt(Math.pow(Math.max(int1,int2),2) - Math.pow(Math.min(int1,int2),2))).toPrecision(3) + 'm';
            }
            break;
        case 'nih9': /* ----- Metric/Imperial Conversion ----- */
            if(Math.random()<1/3){
                var int1 = randomInt(3,15), int2 = parseFloat((int1 * 2.2).toFixed(1));
                if(Math.random()<1/2){
                    quest = `NOCALC Convert ${int1} kg to pounds.`;
                    ans = int2 + " lbs";
                }else{
                    quest = `NOCALC Convert ${int2} lbs to kilograms.`;
                    ans = int1 + " kg";
                }
            }else if(Math.random()<1/2){
                var int1 = randomInt(3,15), int2 = parseFloat((int1 * 1.75).toFixed(2));
                if(Math.random()<1/2){
                    quest = `NOCALC Convert ${int1} litres to pints.`;
                    ans = int2 + " pints";
                }else{
                    quest = `NOCALC Convert ${int2} pints to litres.`;
                    ans = int1 + " litres";
                }
            }else{
                var int1 = 5 * randomInt(2,10), int2 = (int1 * 8) / 5;
                if(Math.random()<1/2){
                    quest = `NOCALC Convert ${int1} miles to kilometres.`;
                    ans = int2 + " km";
                }else{
                    quest = `NOCALC Convert ${int2} km to miles.`;
                    ans = int1 + " miles";
                }
            }
            break;
        case 'nih10': /* ----- Volume of a Cylinder ----- */
            var int1 = 2 * randomInt(1,5), int2 = randomInt(2,10);
            quest = `CALC A cylinder has a diameter of ${int1}cm, and height of ${int2}cm. What is the volume of the cylinder?`;
            ans = (Math.PI * (int1 / 2) * (int1 / 2) * int2).toFixed(1) + 'cm<sup>3</sup>';
            break;

        /* ---------- Numeracy Higher ---------- */
        case 'nh1': /* ----- Fractions of Amounts incl. Increase/Decrease ----- */
            var int1 = randomInt(2,8), int2 = randomInt(int1 + 1,10), int3 = int2 * randomInt(111,999);
            int1 = int1/math.gcd(int1,int2);
            int2 = int2/math.gcd(int1,int2);
            if(Math.random()<1/3){            
                quest = `CALC Calculate <sup>${int1}</sup>&frasl;<sub>${int2}</sub> of £${(int3/100).toFixed(2)}.`;
                ans = '£' + (((int3/int2)*int1)/100).toFixed(2);
            }else if(Math.random()<1/2){
                quest = `CALC Work out what £${(int3/100).toFixed(2)} is during a <sup>${int1}</sup>&frasl;<sub>${int2}</sub> off sale.`;
                ans = '£' + ((int3 - ((int3/int2)*int1))/100).toFixed(2);
            }else{
                quest = `CALC What is £${(int3/100).toFixed(2)} when increased by <sup>${int1}</sup>&frasl;<sub>${int2}</sub>?`;
                ans = '£' + ((int3 + ((int3/int2)*int1))/100).toFixed(2);
            }
            break;
        case 'nh2': /* ----- Percentage Increase/Decrease (x1) ----- */
            var int1 = randomIntExcl(2,99,[5,10,20,25,30,50]);
            var int2 = 100 / math.gcd(int1,100);
            var int3 = int2 * randomInt(4,10);
            if(Math.random()<1/2){
                quest = `NOCALC Increase £${int3} by ${int1}%.`;
                ans = '£' + (int3 + (int1 * int3 / 100)).toFixed(2);
            }else{
                quest = `NOCALC Decrease £${int3} by ${int1}%.`;
                ans = '£' + (int3 - (int1 * int3 / 100)).toFixed(2);
            }
            break;
        case 'nh3': /* ----- Amounts as Percentages ----- */
            var int1 = randomIntExcl(2,49,[10,20,25,30,40]), int2 = 5 * randomInt(1,20);
            quest = `NOCALC Calculate £${(int1*int2/100).toFixed(2)} as a percentage of £${int2}.`;
            ans = int1 + '%';
            break;
        case 'nh4': /* ----- Data Sets with 6 Numbers ----- */
            var int1 = randomInt(1,12), int2 = randomInt(1,12), int3 = randomInt(1,12);
            var int4 = randomInt(1,12), int5 = randomInt(1,12);
            var int6 = (Math.ceil((int1+int2+int3+int4+int5)/6)*6) - (int1+int2+int3+int4+int5);
            var arr1 = [
                'mean of ' + math.mean(int1,int2,int3,int4,int5,int6),
                'median of ' + math.median(int1,int2,int3,int4,int5,int6),
                math.mode(int1,int2,int3,int4,int5,int6),
                'range of ' + Math.max(int1,int2,int3,int4,int5,int6) - Math.min(int1,int2,int3,int4,int5,int6)
            ]
            if(arr1[2].length > 2){
                arr1[2] = 'no mode';
            }else if(arr1[2].length == 2){
                arr1[2] = 'a mode of ' + arr1[2][0] + ' and ' + arr1[2][1];
            }else{
                arr1[2][1] = 'a mode of ' + arr1[2][0];
            }
            var int7 = randomInt(0,3), int8 = randomIntExcl(0,3,int7), int9 = randomIntExcl(0,3,[int7,int8]);
            quest = `CALC List 5 integers with a ${arr1[int7]}, a ${arr1[int8]}, and a ${arr1[int9]}.`;
            ans = `I.e. ${int1}, ${int2}, ${int3}, ${int4}, ${int5}, and ${int6}`;
            break;
        case 'nh5': /* ----- Reverse Sharing in a Ratio (1:2:3) ----- */
            var int1 = randomInt(1,10), int2 = randomIntExcl(1,10,int1), int3 = randomIntExcl(1,10,[int1,int2]);
            var int4 = randomInt(5,15), int5 = (int1+int2+int3) * int4;
            if(Math.random()<1/2){
                quest = `NOCALC When an amount is shared in the ratio ${int1}:${int2}:${int3},
                    the larger share is £${Math.max(int1,int2,int3)*int4}. What is the original amount?`;
            }else{
                quest = `NOCALC When an amount is shared in the ratio ${int1}:${int2}:${int3},
                    the smaller share is £${Math.min(int1,int2,int3)*int4}. What is the original amount?`;
            }
            ans =  '£' + int5;
            break;
        case 'nh6': /* ----- Reverse Problems Involving Money ----- */
            var int1 = randomInt(2,9), int2 = (randomInt(11,99)/10).toFixed(2);
            var int3 = randomInt(2,9), int4 = randomInt(2,9);
            var int5 = ((int1 * int3) + (int2 * int4)).toFixed(2)
            quest = `NOCALC You buy ${int3}kg of strawberries that cost £${int1} per kg.
                You also buy some blueberries that cost £${int2} per kg.
                The total cost is £${int5}. What mass of blueberries was bought?`;
            ans = int4 + "kg";
            break;
        case 'nh7': /* ----- Best Buys ----- */
            var int1 = randomInt(10,99)/10, int2 = randomInt(10,99)/10;
            var int3 = int1 + randomIntExcl(-10,10,0)/10, int4 = randomInt(10,99)/10;
            quest = `CALC Shop A sells sweets at £${(int1 * int2).toFixed(2)} for ${int2.toFixed(1)}kg.
                Shop B sells sweets at £${(int3 * int4).toFixed(2)} for ${int4.toFixed(1)}kg.
                Show clearly which shop is better value.`;
            if((int1*int2).toFixed(2)/int2.toFixed(2)<(int3*int4).toFixed(2)/int4.toFixed(2)){
                ans = `Shop A at £${((int1*int2).toFixed(2)/int2.toFixed(2)).toFixed(2)} per kg.`;
            }else{
                ans = `Shop B at £${((int3*int4).toFixed(2)/int4.toFixed(2)).toFixed(2)} per kg.`
            }
            break;
        case 'nh8': /* ----- Metric/Imperial Conversion (Largest) ----- */
            if(Math.random()<1/3){
                var int1 = randomInt(3,15), int2 = randomIntExcl(-1,1,0);
                var int3 = parseFloat((int1 * 2.2 + int2).toFixed(1));
                quest = `NOCALC Which is larger, ${int1} kg or ${int3} lbs?`;
                if(int2>0){
                    ans = int3 + ' lbs';
                }else{
                    ans = int1 + ' kg';
                }
            }else if(Math.random()<1/2){
                var int1 = randomInt(3,15), int2 = randomIntExcl(-1,1,0);
                var int3 = parseFloat((int1 * 1.75 + int2).toFixed(2));
                quest = `NOCALC Which is larger, ${int1} litres or ${int3} pints?`;
                if(int2>0){
                    ans = int3 + ' pints';
                }else{
                    ans = int1 + ' litres';
                }
            }else{
                var int1 = 5 * randomInt(2,10), int2 = (8/5) * randomIntExcl(-1,1,0);
                var int3 = ((int1 * 8) / 5) + int2;
                quest = `NOCALC Which is larger, ${int1} miles or ${int3} kilometres?`;
                if(int2>0){
                    ans = int3 + ' km';
                }else{
                    ans = int1 + ' miles';
                }
            }
            break;
        case 'nh9': /* ----- Speed rates & Time ----- */
            var int1 = 100 * randomInt(1,9), int2 = 1000 * randomIntExcl(1,9,int1);
            quest = `CALC A lawn mower cuts at a constant rate of ${int2}m per hour.
                The grass is cut in ${int1}m. How many minutes does it take?`;
            ans = parseFloat(((int1/int2)*60).toFixed(1)) + ' mins';
            break;
        case 'nh10': /* ----- Volume of a Cylinder ----- */
            var int1 = 2 * randomInt(1,5), int2 = randomInt(2,10);
            quest = `CALC A cylinder has a diameter of ${int1}cm, and height of ${int2}cm. What is the volume of the cylinder?`;
            ans = (Math.PI * (int1 / 2) * (int1 / 2) * int2).toFixed(1) + 'cm<sup>3</sup>';
            break;

        /* ---------- Default ---------- */
        default:
            quest = "-", ans = "-";
            break;
    }
    return [quest, ans];
}
