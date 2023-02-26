function loadData(filename){
    // Select the object which contains svg
    var svgChart1 = document.getElementById("chart-1");
    var svgChart2 = document.getElementById("chart-2");
    var svgChart3 = document.getElementById("chart-3");
    // Get number of elements in object variables
    const countLabels = Object.keys(dataLabels).length;
    const countFixed = Object.keys(dataFixed).length;
    const countContinous = Object.keys(dataGrouped['continuous']).length;
    const countDiscrete = Object.keys(dataGrouped['discrete']).length;
    const countScatter = Object.keys(dataScatter).length;
    const countBoxRand = Object.keys(dataBoxplot['random']).length;
    const countBoxFixed = Object.keys(dataBoxplot['fixed']).length;
    const countPie = Object.keys(dataPie).length;
    var randRow1, randRow2, randRow3, randRow4, arrLabels;
    switch (filename) {
        case "bar-charts":
        case "line-charts":
        case "freq-diagrams":
            // Chart 1
            // Select random data group
            randRow1 = randomInt(0, countLabels - 1);
            // Wait for object to load
            svgChart1.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc1 = svgChart1.contentDocument;
                const childNodes1 = svgDoc1.childNodes;
                // Change title and labels within svg
                childNodes1[0].getElementById("c1-txt-title").innerHTML = dataLabels[randRow1]["title"];
                childNodes1[0].getElementById("c1-txt-label").innerHTML = dataLabels[randRow1]["label"];
                // Copy label options to an array
                arrLabels = Object.values(dataLabels[randRow1]["labels"]);
                // Multiplier and current max for values in table
                const intMult = randomInt(dataLabels[randRow1]["miny"], Math.ceil(dataLabels[randRow1]["maxy"]/8));
                let intMax = 0;
                // Loop through array for 5 x - values
                for (let i = 0; i <= 4; i++) {
                    let intLabels = randomInt(0, arrLabels.length - 1);
                    let randLabel = arrLabels[intLabels];
                    // Change labels within svg and table
                    childNodes1[0].getElementById(`c1-txt-x-${i}`).innerHTML = randLabel[0];
                    document.querySelectorAll(`#c1-txt-x-${i}`)[0].innerHTML = randLabel;
                    // Change values with table
                    let intNew = randomInt(1,8) * intMult;
                    document.querySelectorAll(`#c1-val-x-${i}`)[0].innerHTML = intNew;
                    if(intNew > intMax){intMax = intNew;}
                    // Remove label after use
                    arrLabels.splice(intLabels,1);
                }
                // Loop through array for 9 y - values
                for (let i = 1; i <= 8; i++) {
                    // Change scale within svg
                    childNodes1[0].getElementById(`c1-txt-y-${i}`).innerHTML = i * intMult;
                }
            });
            // Change table within table
            document.querySelectorAll("#c1-txt-x-label")[0].innerHTML = dataLabels[randRow1]["label"];
            // Include source if available
            if(dataLabels[randRow1]["source"]){
                document.querySelectorAll("#chart-1-source")[0].innerHTML = "Source: " + dataLabels[randRow1]["source"];
            }
            // Chart 2
            // Select random data group
            dataRow2 = randomInt(0, countLabels - 1);
            while (randRow1 == dataRow2){
                dataRow2 = randomInt(0, countLabels - 1);
            }
            // Wait for object to load
            svgChart2.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc2 = svgChart2.contentDocument;
                const childNodes2 = svgDoc2.childNodes;
                // Change title and labels within svg
                childNodes2[0].getElementById("c2-txt-title").innerHTML = dataLabels[dataRow2]["title"];
                childNodes2[0].getElementById("c2-txt-label").innerHTML = dataLabels[dataRow2]["label"];
                // Copy label options to an array
                arrLabels = Object.values(dataLabels[dataRow2]["labels"]);
                // Current max for values in table
                let intMax = 0;
                // Loop through array for 5 x - values
                for (let i = 0; i <= 4; i++) {
                    let intLabels = randomInt(0, arrLabels.length - 1);
                    let randLabel = arrLabels[intLabels];
                    // Change labels within table
                    document.querySelectorAll(`#c2-txt-x-${i}`)[0].innerHTML = randLabel;
                    // Change values with table
                    let intNew = randomInt(dataLabels[dataRow2]["miny"], dataLabels[dataRow2]["maxy"]);
                    document.querySelectorAll(`#c2-val-x-${i}`)[0].innerHTML = intNew;
                    if(intNew > intMax){intMax = intNew;}
                    // Remove label after use
                    arrLabels.splice(intLabels,1);
                }
                let intMultY = Math.ceil(intMax / 8);
                // Loop through array for 9 y - values
                for (let i = 1; i <= 8; i++) {
                    // Change scale within svg
                    childNodes2[0].getElementById(`c2-txt-y-${i}`).innerHTML = i * intMultY;
                }
            });
            // Change table within table
            document.querySelectorAll("#c2-txt-x-label")[0].innerHTML = dataLabels[dataRow2]["label"];
            // Include source if available
            if(dataLabels[dataRow2]["source"]){
                document.querySelectorAll("#chart-2-source")[0].innerHTML = "Source: " + dataLabels[dataRow2]["source"];
            }
            // Chart 3
            // Select random data group
            dataRow3 = randomInt(0, countFixed - 1);
            // Wait for object to load
            svgChart3.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc3 = svgChart3.contentDocument;
                const childNodes3 = svgDoc3.childNodes;
                // Change title and labels within svg
                childNodes3[0].getElementById("c3-txt-title").innerHTML = dataFixed[dataRow3]["title"];
                // Copy label options to an array
                let arrData = Object.values(dataFixed[dataRow3]["data"]);
                // Loop through array for 5 x - values
                for (let i = 0; i <= 4; i++) {
                    let intLabels = randomInt(0, arrData.length - 1);
                    // Change labels within table
                    document.querySelectorAll(`#c3-txt-x-${i}`)[0].innerHTML = arrData[intLabels]["county"];
                    // Change values with table
                    document.querySelectorAll(`#c3-val-x-${i}`)[0].innerHTML = arrData[intLabels]["value"];
                    // Remove label after use
                    arrData.splice(intLabels,1);
                }
            });
            // Change table within table
            document.querySelectorAll("#c3-txt-x-label")[0].innerHTML = "County";
            document.querySelectorAll("#c3-txt-y-label")[0].innerHTML = dataFixed[dataRow3]["label"];
            // Include source if available
            if(dataFixed[dataRow3]["source"]){
                document.querySelectorAll("#chart-3-source")[0].innerHTML = "Source: " + dataFixed[dataRow3]["source"];
            }
            break;

        case "freq-polygon":
            // Chart 1
            // Select random data group continuous
            randRow1 = randomInt(0, countContinous - 1);
            // Wait for object to load
            svgChart1.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc1 = svgChart1.contentDocument;
                const childNodes1 = svgDoc1.childNodes;
                // Change title and labels within svg
                childNodes1[0].getElementById("c1-txt-title").innerHTML = dataGrouped["continuous"][randRow1]["title"];
                childNodes1[0].getElementById("c1-txt-label").innerHTML = dataGrouped["continuous"][randRow1]["label"];
                // Multiplier and current max for values in table
                const intMultX = 1 + randomInt(dataGrouped["continuous"][randRow1]["minx"], Math.ceil((dataGrouped["continuous"][randRow1]["maxx"]-dataGrouped["continuous"][randRow1]["minx"])/11));
                const intMultY = randomInt(dataGrouped["continuous"][randRow1]["miny"], Math.ceil(dataGrouped["continuous"][randRow1]["maxy"]/8));
                let intMax = 0;
                // Loop through array for 6 x - values
                for (let i = 0; i <= 5; i++) {
                    let xLabel = (i + i * intMultX + dataGrouped["continuous"][randRow1]["minx"]) + " - " + (i + (i + 1) * intMultX + dataGrouped["continuous"][randRow1]["minx"])
                    // Change labels within svg and table
                    childNodes1[0].getElementById(`c1-txt-x-${2 * i}`).innerHTML = i + i * intMultX;
                    childNodes1[0].getElementById(`c1-txt-x-${(2 * i) + 1}`).innerHTML = i + (i + 1) * intMultX;
                    document.querySelectorAll(`#c1-txt-x-${i}`)[0].innerHTML = xLabel;
                    // Change values with table
                    let intNew = randomInt(1,8) * intMultY;
                    document.querySelectorAll(`#c1-val-x-${i}`)[0].innerHTML = intNew;
                    if(intNew > intMax){intMax = intNew;}
                }
                // Loop through array for 9 y - values
                for (let i = 1; i <= 8; i++) {
                    childNodes1[0].getElementById(`c1-txt-y-${i}`).innerHTML = i * intMultY;
                }
            });
            // Change table within table
            document.querySelectorAll("#c1-txt-x-label")[0].innerHTML = dataGrouped["continuous"][randRow1]["label"];
            // Include source if available
            if(dataLabels[randRow1]["source"]){
                document.querySelectorAll("#chart-1-source")[0].innerHTML = "Source: " + dataGrouped["continuous"][randRow1]["source"];
            }
            // Chart 2
            // Select random data group
            randRow2 = randomInt(0, countContinous - 1);
            while (randRow1 == randRow2){
                randRow2 = randomInt(0, countContinous - 1);
            }
            // Wait for object to load
            svgChart2.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc2 = svgChart2.contentDocument;
                const childNodes2 = svgDoc2.childNodes;
                // Change title and labels within svg
                childNodes2[0].getElementById("c2-txt-title").innerHTML = dataGrouped["continuous"][randRow2]["title"];
                childNodes2[0].getElementById("c2-txt-label").innerHTML = dataGrouped["continuous"][randRow2]["label"];
                // Multiplier and current max for values in table
                const intMultX = 1 + randomInt(dataGrouped["continuous"][randRow2]["minx"], Math.ceil((dataGrouped["continuous"][randRow2]["maxx"]-dataGrouped["continuous"][randRow2]["minx"])/11));
                let intMax = 0;
                // Loop through array for 6 rows in table
                for (let i = 0; i <= 5; i++) {
                    let startLabel = dataGrouped["continuous"][randRow2]["minx"] + ( i * intMultX);
                    let endLabel = dataGrouped["continuous"][randRow2]["minx"] + (( i + 1 ) * intMultX);
                    let xLabel = startLabel + " &lt; x &le; " + endLabel;
                    // Change labels within table
                    document.querySelectorAll(`#c2-txt-x-${i}`)[0].innerHTML = xLabel;
                    // Change values with table
                    let intNew = randomInt(dataGrouped["continuous"][randRow2]["miny"], dataGrouped["continuous"][randRow2]["maxy"]);
                    document.querySelectorAll(`#c2-val-x-${i}`)[0].innerHTML = intNew;
                    if(intNew > intMax){intMax = intNew;}
                }
                let intMultY = Math.ceil(intMax / 8);
                // Loop through array for 9 y - values
                for (let i = 1; i <= 8; i++) {
                    childNodes2[0].getElementById(`c2-txt-y-${i}`).innerHTML = i * intMultY;
                }
            });
            // Change table within table
            document.querySelectorAll("#c2-txt-x-label")[0].innerHTML = dataGrouped["continuous"][randRow2]["label"];
            // Include source if available
            if(dataLabels[randRow2]["source"]){
                document.querySelectorAll("#chart-2-source")[0].innerHTML = "Source: " + dataGrouped["continuous"][randRow2]["source"];
            }
            // Chart 3
            // Select random data group continuous
            randRow3 = randomInt(0, countDiscrete - 1);
            // Wait for object to load
            svgChart3.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc3 = svgChart3.contentDocument;
                const childNodes3 = svgDoc3.childNodes;
                // Change title and labels within svg
                childNodes3[0].getElementById("c3-txt-title").innerHTML = dataGrouped["discrete"][randRow3]["title"];
                // Loop through array for 6 x - values
                for (let i = 0; i <= 5; i++) {
                    // Change labels within table
                    document.querySelectorAll(`#c3-txt-x-${i}`)[0].innerHTML = dataGrouped["discrete"][randRow3]["labels"][i];
                    // Change values with table
                    document.querySelectorAll(`#c3-val-x-${i}`)[0].innerHTML = randomInt(dataGrouped["discrete"][randRow3]["miny"],dataGrouped["discrete"][randRow3]["maxy"]);
                }
            });
            // Change table within table
            document.querySelectorAll("#c3-txt-x-label")[0].innerHTML = dataGrouped["discrete"][randRow3]["xlabel"];
            document.querySelectorAll("#c3-txt-y-label")[0].innerHTML = dataGrouped["discrete"][randRow3]["ylabel"];
            // Include source if available
            if(dataLabels[randRow3]["source"]){
                document.querySelectorAll("#chart-3-source")[0].innerHTML = "Source: " + dataGrouped["discrete"][randRow3]["source"];
            }
            break;

        case "scatter-graph":
            // Chart 1
            // Select random data group continuous
            randRow1 = randomInt(0, countScatter - 1);
            // Wait for object to load
            svgChart1.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc1 = svgChart1.contentDocument;
                const childNodes1 = svgDoc1.childNodes;
                // Change title and labels within svg
                childNodes1[0].getElementById("c1-txt-title").innerHTML = dataScatter[randRow1]["title"];
                childNodes1[0].getElementById("c1-txt-label").innerHTML = dataScatter[randRow1]["xlabel"];
                childNodes1[0].getElementById("c1-txt-frequency").innerHTML = dataScatter[randRow1]["ylabel"];
                // Multiplier and current max for values in table
                const intMultX = randomInt(dataScatter[randRow1]["minx"], Math.ceil(dataScatter[randRow1]["maxx"]/8));
                const intMultY = randomInt(dataScatter[randRow1]["miny"], Math.ceil(dataScatter[randRow1]["maxy"]/8));
                // Loop through 8 table values
                for (let i = 0; i <= 7; i++) {
                    // Change values with table
                    let intNewX = randomInt(1,8) * intMultX;
                    document.querySelectorAll(`#c1-txt-x-${i}`)[0].innerHTML = intNewX;
                    let intNewY = randomInt(1,8) * intMultY;
                    document.querySelectorAll(`#c1-val-x-${i}`)[0].innerHTML = intNewY;
                }
                // Loop through 9 y - values
                for (let i = 0; i <= 8; i++) {
                    let intNewY = i * intMultY;
                    childNodes1[0].getElementById(`c1-txt-y-${i}`).innerHTML = intNewY;
                }
                // Loop through 12 x - values
                for (let i = 0; i <= 11; i++) {
                    let intNewX = i * intMultX;
                    childNodes1[0].getElementById(`c1-txt-x-${i}`).innerHTML = intNewX;
                }
            });
            // Change table within table
            document.querySelectorAll("#c1-txt-x-label")[0].innerHTML = dataScatter[randRow1]["xlabel"];
            document.querySelectorAll("#c1-txt-y-label")[0].innerHTML = dataScatter[randRow1]["ylabel"];
            // Include source if available
            if(dataScatter[randRow1]["source"]){
                document.querySelectorAll("#chart-1-source")[0].innerHTML = "Source: " + dataScatter[randRow1]["source"];
            }
            // Chart 2
            // Select random data group
            randRow2 = randomInt(0, countScatter - 1);
            while (randRow1 == randRow2){
                randRow2 = randomInt(0, countScatter - 1);
            }
            // Wait for object to load
            svgChart2.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc2 = svgChart2.contentDocument;
                const childNodes2 = svgDoc2.childNodes;
                // Change title and labels within svg
                childNodes2[0].getElementById("c2-txt-title").innerHTML = dataScatter[randRow2]["title"];
                childNodes2[0].getElementById("c2-txt-label").innerHTML = dataScatter[randRow2]["xlabel"];
                childNodes2[0].getElementById("c2-txt-frequency").innerHTML = dataScatter[randRow2]["ylabel"];
                // Loop through 8 table values
                for (let i = 0; i <= 7; i++) {
                    // Change values with table
                    let intNewX = randomInt(dataScatter[randRow2]["minx"],dataScatter[randRow2]["maxx"]);
                    document.querySelectorAll(`#c2-txt-x-${i}`)[0].innerHTML = intNewX;
                    let intNewY = randomInt(dataScatter[randRow2]["miny"],dataScatter[randRow2]["maxy"]);
                    document.querySelectorAll(`#c2-val-x-${i}`)[0].innerHTML = intNewY;
                }
                // Loop through 9 y - values
                for (let i = 0; i <= 8; i++) {
                    let intNewY = dataScatter[randRow2]["miny"] + (i * Math.ceil(dataScatter[randRow2]["maxy"]/9));
                    childNodes2[0].getElementById(`c2-txt-y-${i}`).innerHTML = intNewY;
                }
            });
            // Change table within table
            document.querySelectorAll("#c2-txt-y-label")[0].innerHTML = dataScatter[randRow2]["ylabel"];
            document.querySelectorAll("#c2-txt-x-label")[0].innerHTML = dataScatter[randRow2]["xlabel"];
            // Include source if available
            if(dataScatter[randRow2]["source"]){
                document.querySelectorAll("#chart-2-source")[0].innerHTML = "Source: " + dataScatter[randRow2]["source"];
            }
            // Chart 3
            // Select random data group
            randRow3 = randomInt(0, countScatter - 1);
            while (randRow3 == randRow1 || randRow3 == randRow2){
                randRow3 = randomInt(0, countScatter - 1);
            }
            // Wait for object to load
            svgChart3.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc3 = svgChart3.contentDocument;
                const childNodes3 = svgDoc3.childNodes;
                // Change title and labels within svg
                childNodes3[0].getElementById("c3-txt-title").innerHTML = dataScatter[randRow3]["title"];
                // Loop through 8 table values
                for (let i = 0; i <= 7; i++) {
                    // Change values with table
                    let intNewX = randomInt(dataScatter[randRow3]["minx"],dataScatter[randRow3]["maxx"]);
                    document.querySelectorAll(`#c3-txt-x-${i}`)[0].innerHTML = intNewX;
                    let intNewY = randomInt(dataScatter[randRow3]["miny"],dataScatter[randRow3]["maxy"]);
                    document.querySelectorAll(`#c3-val-x-${i}`)[0].innerHTML = intNewY;
                }
            });
            // Change table within table
            document.querySelectorAll("#c3-txt-y-label")[0].innerHTML = dataScatter[randRow3]["ylabel"];
            document.querySelectorAll("#c3-txt-x-label")[0].innerHTML = dataScatter[randRow3]["xlabel"];
            // Include source if available
            if(dataScatter[randRow3]["source"]){
                document.querySelectorAll("#chart-3-source")[0].innerHTML = "Source: " + dataScatter[randRow3]["source"];
            }
            break;

        case "pictograms":
            // Chart 1
            // Select random data group
            randRow1 = randomInt(0, countLabels - 1);
            // Change title and labels
            document.querySelectorAll("#c1-txt-title")[0].innerHTML = dataLabels[randRow1]["title"];
            document.querySelectorAll("#c1-txt-x-label")[0].innerHTML = dataLabels[randRow1]["label"];
            // Copy label options to an array
            arrLabels = Object.values(dataLabels[randRow1]["labels"]);
            // Rand key value
            let intKeyVal1 = randomInt(1,5) * 2;
            document.querySelectorAll("#c1-key-val")[0].innerHTML = "= " + intKeyVal1;
            // Loop through 5 table values
            for (let i = 0; i <= 4; i++) {
                // Random Label
                let intLabels = randomInt(0, arrLabels.length - 1);
                let randLabel = arrLabels[intLabels];
                // Change values with table
                document.querySelectorAll(`#c1-txt-x-${i}`)[0].innerHTML = randLabel;
                document.querySelectorAll(`#c1-val-x-${i}`)[0].innerHTML = randomInt(2,10) * intKeyVal1;
                // Remove label after use
                arrLabels.splice(intLabels,1);
            }
            // Chart 2
            // Select random data group
            randRow2 = randomInt(0, countLabels - 1);
            while (randRow1 == randRow2){
                randRow2 = randomInt(0, countLabels - 1);
            }
            // Change title and labels
            document.querySelectorAll("#c2-txt-title")[0].innerHTML = dataLabels[randRow2]["title"];
            document.querySelectorAll("#c2-txt-x-label")[0].innerHTML = dataLabels[randRow2]["label"];
            // Copy label options to an array
            arrLabels = Object.values(dataLabels[randRow2]["labels"]);
            // Rand key value
            let intKeyVal2 = randomInt(1,5) * 2;
            document.querySelectorAll("#c2-key-val")[0].innerHTML = "= " + intKeyVal2;
            // Loop through 5 table values
            for (let i = 0; i <= 4; i++) {
                // Random Label
                let intLabels = randomInt(0, arrLabels.length - 1);
                let randLabel = arrLabels[intLabels];
                // Change values with table
                document.querySelectorAll(`#c2-txt-x-${i}`)[0].innerHTML = randLabel;
                document.querySelectorAll(`#c2-val-x-${i}`)[0].innerHTML = randomInt(2,10) * (intKeyVal2/2);
                // Remove label after use
                arrLabels.splice(intLabels,1);
            }
            // Chart 3
            // Select random data group
            randRow3 = randomInt(0, countLabels - 1);
            while (randRow1 == randRow3 || randRow2 == randRow3){
                randRow3 = randomInt(0, countLabels - 1);
            }
            // Change title and labels
            document.querySelectorAll("#c3-txt-title")[0].innerHTML = dataLabels[randRow3]["title"];
            document.querySelectorAll("#c3-txt-x-label")[0].innerHTML = dataLabels[randRow3]["label"];
            // Copy label options to an array
            arrLabels = Object.values(dataLabels[randRow3]["labels"]);
            // Rand key value
            let intKeyVal3 = randomInt(1,5) * 4;
            document.querySelectorAll("#c3-key-val")[0].innerHTML = "= " + intKeyVal3;
            // Loop through 5 table values
            for (let i = 0; i <= 4; i++) {
                // Random Label
                let intLabels = randomInt(0, arrLabels.length - 1);
                let randLabel = arrLabels[intLabels];
                // Change values with table
                document.querySelectorAll(`#c3-txt-x-${i}`)[0].innerHTML = randLabel;
                document.querySelectorAll(`#c3-val-x-${i}`)[0].innerHTML = randomInt(2,10) * (intKeyVal3/4);
                // Remove label after use
                arrLabels.splice(intLabels,1);
            }
            // Chart 4
            // Select random data group
            randRow4 = randomInt(0, countLabels - 1);
            while (randRow1 == randRow4 || randRow2 == randRow4 || randRow3 == randRow4){
                randRow4 = randomInt(0, countLabels - 1);
            }
            // Change title and labels
            document.querySelectorAll("#c4-txt-title")[0].innerHTML = dataLabels[randRow4]["title"];
            document.querySelectorAll("#c4-txt-x-label")[0].innerHTML = dataLabels[randRow4]["label"];
            // Copy label options to an array
            arrLabels = Object.values(dataLabels[randRow4]["labels"]);
            // Rand key value
            let intKeyVal4 = randomInt(2,5);
            // Loop through 5 table values
            for (let i = 0; i <= 4; i++) {
                // Random Label
                let intLabels = randomInt(0, arrLabels.length - 1);
                let randLabel = arrLabels[intLabels];
                // Change values with table
                document.querySelectorAll(`#c4-txt-x-${i}`)[0].innerHTML = randLabel;
                document.querySelectorAll(`#c4-val-x-${i}`)[0].innerHTML = randomInt(1,10) * intKeyVal4;
                // Remove label after use
                arrLabels.splice(intLabels,1);
            }
            break;
        
        case "cumul-freq":
            // Chart 1
            // Select random data group
            randRow1 = randomInt(0, countContinous - 1);
            // Wait for object to load
            svgChart1.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc1 = svgChart1.contentDocument;
                const childNodes1 = svgDoc1.childNodes;
                // Change title and labels within svg
                childNodes1[0].getElementById("c1-txt-label").innerHTML = dataGrouped["continuous"][randRow1]["label"];
                // Integer values for x and y
                const intMultX = 2 * (1 + randomInt(dataGrouped["continuous"][randRow1]["minx"], Math.ceil((dataGrouped["continuous"][randRow1]["maxx"]-dataGrouped["continuous"][randRow1]["minx"])/12)));
                let intMax = 0;
                // Loop through array for 6 rows in table
                for (let i = 0; i <= 5; i++) {
                    let startLabel = dataGrouped["continuous"][randRow1]["minx"] + ( i * intMultX);
                    let endLabel = dataGrouped["continuous"][randRow1]["minx"] + (( i + 1 ) * intMultX);
                    let xLabel = startLabel + " &lt; x &le; " + endLabel;
                    // Change labels within table
                    document.querySelectorAll(`#c1-txt-x-${i}`)[0].innerHTML = xLabel;
                    // Change labels within svg
                    childNodes1[0].getElementById(`c1-txt-x-${2 * i}`).innerHTML = startLabel;
                    childNodes1[0].getElementById(`c1-txt-x-${2 * i + 1}`).innerHTML = startLabel + intMultX / 2;
                    childNodes1[0].getElementById(`c1-txt-x-${2 * i + 2}`).innerHTML = endLabel;
                    // Change values with table
                    let intNew = Math.ceil(randomInt(dataGrouped["continuous"][randRow1]["miny"], dataGrouped["continuous"][randRow1]["maxy"])/6);
                    document.querySelectorAll(`#c1-val-x-${i}`)[0].innerHTML = intNew;
                    intMax = intMax + intNew;
                }
                let intMultY = Math.ceil(intMax / 12);
                // Loop through array for 12 y - values
                for (let i = 0; i <= 12; i++) {
                    childNodes1[0].getElementById(`c1-txt-y-${i}`).innerHTML = i * intMultY;
                }
            });
            // Change title and label within table
            document.querySelectorAll("#c1-txt-x-label")[0].innerHTML = dataGrouped["continuous"][randRow1]["label"];
            document.querySelectorAll("#c1-txt-title")[0].innerHTML = dataGrouped["continuous"][randRow1]["title"];
            // Include source if available
            if(dataLabels[randRow1]["source"]){
                document.querySelectorAll("#chart-1-source")[0].innerHTML = "Source: " + dataGrouped["continuous"][randRow1]["source"];
            }
            // Chart 2
            // Select random data group
            randRow2 = randomInt(0, countContinous - 1);
            while (randRow1 == randRow2){
                randRow2 = randomInt(0, countContinous - 1);
            }
            // Wait for object to load
            svgChart2.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc2 = svgChart2.contentDocument;
                const childNodes2 = svgDoc2.childNodes;
                // Change title and labels within svg
                childNodes2[0].getElementById("c1-txt-label").innerHTML = dataGrouped["continuous"][randRow2]["label"];
                // Integer values for x and y
                const intMultX = 2 * (1 + randomInt(dataGrouped["continuous"][randRow2]["minx"], Math.ceil((dataGrouped["continuous"][randRow2]["maxx"]-dataGrouped["continuous"][randRow2]["minx"])/12)));
                // Loop through array for 6 rows in table
                for (let i = 0; i <= 5; i++) {
                    let startLabel = dataGrouped["continuous"][randRow2]["minx"] + ( i * intMultX);
                    let endLabel = dataGrouped["continuous"][randRow2]["minx"] + (( i + 1 ) * intMultX);
                    let xLabel = startLabel + " &lt; x &le; " + endLabel;
                    // Change labels within table
                    document.querySelectorAll(`#c2-txt-x-${i}`)[0].innerHTML = xLabel;
                    // Change labels within svg
                    childNodes2[0].getElementById(`c1-txt-x-${2 * i}`).innerHTML = startLabel;
                    childNodes2[0].getElementById(`c1-txt-x-${2 * i + 1}`).innerHTML = startLabel + intMultX / 2;
                    childNodes2[0].getElementById(`c1-txt-x-${2 * i + 2}`).innerHTML = endLabel;
                    // Change values with table
                    let intNew = Math.ceil(randomInt(dataGrouped["continuous"][randRow2]["miny"], dataGrouped["continuous"][randRow2]["maxy"])/6);
                    document.querySelectorAll(`#c2-val-x-${i}`)[0].innerHTML = intNew;
                }
                // Loop through array for 12 y - values
                for (let i = 0; i <= 12; i++) {
                    childNodes2[0].getElementById(`c1-txt-y-${i}`).innerHTML = "";
                }
            });
            // Change title and label within table
            document.querySelectorAll("#c2-txt-x-label")[0].innerHTML = dataGrouped["continuous"][randRow2]["label"];
            document.querySelectorAll("#c2-txt-title")[0].innerHTML = dataGrouped["continuous"][randRow2]["title"];
            // Include source if available
            if(dataLabels[randRow2]["source"]){
                document.querySelectorAll("#chart-2-source")[0].innerHTML = "Source: " + dataGrouped["continuous"][randRow2]["source"];
            }
            break;

        case "boxplot":
            // Chart 1
            // Select random data group
            randRow1 = randomInt(0, countBoxRand - 1);
            // Create Data
            let rangeVal1 = dataBoxplot["random"][randRow1][0]["max"] - dataBoxplot["random"][randRow1][0]["min"];
            let minVal1 = randomInt(dataBoxplot["random"][randRow1][0]["min"], dataBoxplot["random"][randRow1][0]["min"] + Math.ceil(rangeVal1/5));
            let maxVal1 = randomInt(dataBoxplot["random"][randRow1][0]["max"] - Math.ceil(rangeVal1/5), dataBoxplot["random"][randRow1][0]["max"]);
            let medVal1 = randomInt(minVal1 + 1, maxVal1 - 1);
            let lqVal1 = randomInt(minVal1 + 1, medVal1 - 1);
            let uqVal1 = randomInt(medVal1 + 1, maxVal1 - 1)
            let multVal1 = Math.ceil((dataBoxplot["random"][randRow1]["max"] - dataBoxplot["random"][randRow1]["min"])/14);
            // Change title andtable data
            document.querySelectorAll("#c1-title")[0].innerHTML = dataBoxplot["random"][randRow1][0]["title"];
            document.querySelectorAll("#c1-min-val")[0].innerHTML = minVal1;
            document.querySelectorAll("#c1-max-val")[0].innerHTML = maxVal1;
            document.querySelectorAll("#c1-range")[0].innerHTML = maxVal1 - minVal1;
            document.querySelectorAll("#c1-med-val")[0].innerHTML = medVal1;
            document.querySelectorAll("#c1-low-q")[0].innerHTML = lqVal1;
            document.querySelectorAll("#c1-upp-q")[0].innerHTML = uqVal1;
            document.querySelectorAll("#c1-int-range")[0].innerHTML = uqVal1 - lqVal1;
            // Wait for object to load
            svgChart1.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc1 = svgChart1.contentDocument;
                const childNodes1 = svgDoc1.childNodes;
                // Loop through array for 14 x - values
                for (let i = 0; i <= 14; i++) {
                    childNodes1[0].getElementById(`c1-txt-x-${i}`).innerHTML = dataBoxplot["random"][randRow1]["min"] + (i * multVal1);
                }
            });
            // Chart 2
            // Create Data
            let rangeVal2 = dataBoxplot["random"][randRow1][1]["max"] - dataBoxplot["random"][randRow1][1]["min"];
            let minVal2 = randomInt(dataBoxplot["random"][randRow1][1]["min"], dataBoxplot["random"][randRow1][1]["min"] + Math.ceil(rangeVal2/5));
            let maxVal2 = randomInt(dataBoxplot["random"][randRow1][1]["max"] - Math.ceil(rangeVal2/5), dataBoxplot["random"][randRow1][1]["max"]);
            let medVal2 = randomInt(minVal2 + 1, maxVal2 - 1);
            let lqVal2 = randomInt(minVal2 + 1, medVal2 - 1);
            let uqVal2 = randomInt(medVal2 + 1, maxVal2 - 1)
            let multVal2 = Math.ceil((dataBoxplot["random"][randRow1]["max"] - dataBoxplot["random"][randRow1]["min"])/14);
            // Change title andtable data
            document.querySelectorAll("#c2-title")[0].innerHTML = dataBoxplot["random"][randRow1][1]["title"];
            document.querySelectorAll("#c2-min-val")[0].innerHTML = minVal2;
            document.querySelectorAll("#c2-max-val")[0].innerHTML = maxVal2;
            document.querySelectorAll("#c2-range")[0].innerHTML = "......";
            document.querySelectorAll("#c2-med-val")[0].innerHTML = medVal2;
            document.querySelectorAll("#c2-low-q")[0].innerHTML = lqVal2;
            document.querySelectorAll("#c2-upp-q")[0].innerHTML = uqVal2;
            document.querySelectorAll("#c2-int-range")[0].innerHTML = "......";
            // Wait for object to load
            svgChart2.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc2 = svgChart2.contentDocument;
                const childNodes2 = svgDoc2.childNodes;
                // Loop through array for 14 x - values
                for (let i = 0; i <= 14; i++) {
                    childNodes2[0].getElementById(`c1-txt-x-${i}`).innerHTML = dataBoxplot["random"][randRow1]["min"] + (i * multVal2);
                }
            });
            // Chart 3
            // Select random data group
            randRow3 = randomInt(0, countBoxFixed - 1);
            // Create Data
            let minVal3 = dataBoxplot["fixed"][randRow3]["min"];
            let maxVal3 = dataBoxplot["fixed"][randRow3]["max"];
            let medVal3 = dataBoxplot["fixed"][randRow3]["med"];
            let lqVal3 = dataBoxplot["fixed"][randRow3]["lowq"];
            let uqVal3 = dataBoxplot["fixed"][randRow3]["uppq"];
            let title = "Population data in " + dataBoxplot["fixed"][randRow3]["county"] + " between 1991 and 2021. (1000's)"
            // Change title and table data
            document.querySelectorAll("#c3-title")[0].innerHTML = title;
            document.querySelectorAll("#c3-min-val")[0].innerHTML = minVal3;
            document.querySelectorAll("#c3-max-val")[0].innerHTML = "......";
            document.querySelectorAll("#c3-range")[0].innerHTML = (maxVal3 - minVal3).toFixed(1);
            document.querySelectorAll("#c3-med-val")[0].innerHTML = medVal3;
            document.querySelectorAll("#c3-low-q")[0].innerHTML = "......";
            document.querySelectorAll("#c3-upp-q")[0].innerHTML = uqVal3;
            document.querySelectorAll("#c3-int-range")[0].innerHTML = (uqVal3 - lqVal3).toFixed(1);
            // Wait for object to load
            svgChart3.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc3 = svgChart3.contentDocument;
                const childNodes3 = svgDoc3.childNodes;
                // Loop through array for 14 x - values
                for (let i = 0; i <= 14; i++) {
                    childNodes3[0].getElementById(`c1-txt-x-${i}`).innerHTML = dataBoxplot["fixed"][randRow3]["minx"] + (i * dataBoxplot["fixed"][randRow3]["multx"]);
                }
            });
            // Include source if available
            if(dataBoxplot["fixed"][randRow3]["source"]){
                document.querySelectorAll("#chart-3-source")[0].innerHTML = "Source: " + dataBoxplot["fixed"][randRow3]["source"];
            }
            break;
        
        case "pie-charts":
            // Chart 1
            // Select random data group
            randRow1 = randomInt(0, countPie - 1);
            // Change title and table label
            document.querySelectorAll(`#c1-txt-title`)[0].innerHTML = dataPie[randRow1]["title"];
            document.querySelectorAll(`#c1-txt-x-label`)[0].innerHTML = dataPie[randRow1]["label"];
            // Copy label options to an array
            arrLabels = Object.values(dataPie[randRow1]["data"]);
            // Loop through array for 5 table values
            for (let i = 0; i <= 4; i++) {
                let intLabels = randomInt(0, arrLabels.length - 1);
                let randLabel = arrLabels[intLabels];
                // Change labels and data within table
                document.querySelectorAll(`#c1-txt-x-${i}`)[0].innerHTML = randLabel['label'];
                document.querySelectorAll(`#c1-val-x-${i}`)[0].innerHTML = randLabel['value'];
                // Remove label after use
                arrLabels.splice(intLabels,1);
            }
            if(dataPie[randRow1]["source"]){
                document.querySelectorAll("#chart-1-source")[0].innerHTML = "Source: " + dataPie[randRow1]["source"];
            }
            // Chart 2
            // Select random data group
            randRow2 = randomInt(0, countPie - 1);
            while (randRow1 == randRow2){
                randRow2 = randomInt(0, countPie - 1);
            }
            // Change title and table label
            document.querySelectorAll(`#c2-txt-title`)[0].innerHTML = dataPie[randRow2]["title"];
            document.querySelectorAll(`#c2-txt-x-label`)[0].innerHTML = dataPie[randRow2]["label"];
            // Copy label options to an array
            arrLabels = Object.values(dataPie[randRow2]["data"]);
            // Loop through array for 5 table values
            for (let i = 0; i <= 4; i++) {
                let intLabels = randomInt(0, arrLabels.length - 1);
                let randLabel = arrLabels[intLabels];
                // Change labels and data within table
                document.querySelectorAll(`#c2-txt-x-${i}`)[0].innerHTML = randLabel['label'];
                document.querySelectorAll(`#c2-val-x-${i}`)[0].innerHTML = randLabel['value'];
                // Remove label after use
                arrLabels.splice(intLabels,1);
            }
            if(dataPie[randRow2]["source"]){
                document.querySelectorAll("#chart-2-source")[0].innerHTML = "Source: " + dataPie[randRow2]["source"];
            }          
            break;
    
        default:
            break;
    }
}