function loadData(filename){
    switch (filename) {
        case "bar-charts":
        case "line-charts":
        case "freq-diagrams":
            // Get number of data groups
            const dataRows = Object.keys(dataLabels).length;
            // Chart 1
            // Select random data group
            const dataRow1 = randomInt(0, dataRows - 1);
            // Select the object which contains svg
            const svgChart1 = document.getElementById("bar-chart-1");
            // Wait for object to load
            svgChart1.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc1 = svgChart1.contentDocument;
                const childNodes1 = svgDoc1.childNodes;
                // Change title and labels within svg
                childNodes1[0].getElementById("bc1-txt-title").innerHTML = dataLabels[dataRow1]["title"];
                childNodes1[0].getElementById("bc1-txt-label").innerHTML = dataLabels[dataRow1]["label"];
                // Copy label options to an array
                let arrLabels = Object.values(dataLabels[dataRow1]["labels"]);
                // Multiplier and current max for values in table
                const intMult = randomInt(1,10);
                var intMax = 0;
                // Loop through array for 5 x - values
                for (let i = 0; i <= 4; i++) {
                    var intLabels = randomInt(0, arrLabels.length - 1);
                    var randLabel = arrLabels[intLabels];
                    // Change labels within svg and table
                    childNodes1[0].getElementById(`bc1-txt-x-${i}`).innerHTML = randLabel[0];
                    document.querySelectorAll(`#bc1-txt-x-${i}`)[0].innerHTML = randLabel;
                    // Change values with table
                    var intNew = randomInt(1,8) * intMult;
                    document.querySelectorAll(`#bc1-val-x-${i}`)[0].innerHTML = intNew;
                    if(intNew > intMax){intMax = intNew;}
                    // Remove label after use
                    arrLabels.splice(intLabels,1);
                }
                // Loop through array for 9 y - values
                for (let i = 1; i <= 8; i++) {
                    // Change scale within svg
                    childNodes1[0].getElementById(`bc1-txt-y-${i}`).innerHTML = i * intMult;
                }
            });
            // Change table within table
            document.querySelectorAll("#bc1-txt-label")[0].innerHTML = dataLabels[dataRow1]["label"];
            // Chart 2
            // Select random data group
            var dataRow2 = randomInt(0, dataRows - 1);
            while (dataRow1 == dataRow2){
                dataRow2 = randomInt(0, dataRows - 1);
            }
            // Select the object which contains svg
            const svgChart2 = document.getElementById("bar-chart-2");
            // Wait for object to load
            svgChart2.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc2 = svgChart2.contentDocument;
                const childNodes2 = svgDoc2.childNodes;
                // Change title and labels within svg
                childNodes2[0].getElementById("bc2-txt-title").innerHTML = dataLabels[dataRow2]["title"];
                childNodes2[0].getElementById("bc2-txt-label").innerHTML = dataLabels[dataRow2]["label"];
                // Copy label options to an array
                let arrLabels = Object.values(dataLabels[dataRow2]["labels"]);
                // Current max for values in table
                var intMax = randomInt(1,2)*40;
                // Loop through array for 5 x - values
                for (let i = 0; i <= 4; i++) {
                    var intLabels = randomInt(0, arrLabels.length - 1);
                    var randLabel = arrLabels[intLabels];
                    // Change labels within table
                    document.querySelectorAll(`#bc2-txt-x-${i}`)[0].innerHTML = randLabel;
                    // Change values with table
                    var intNew = randomInt(1,intMax);
                    document.querySelectorAll(`#bc2-val-x-${i}`)[0].innerHTML = intNew;
                    // Remove label after use
                    arrLabels.splice(intLabels,1);
                }
                // Loop through array for 9 y - values
                for (let i = 1; i <= 8; i++) {
                    // Change scale within svg
                    if(intMax==80){
                        childNodes2[0].getElementById(`bc2-txt-y-${i}`).innerHTML = i * 10;
                    }else{
                        childNodes2[0].getElementById(`bc2-txt-y-${i}`).innerHTML = i * 5;
                    }
                    
                }
            });
            // Change table within table
            document.querySelectorAll("#bc2-txt-label")[0].innerHTML = dataLabels[dataRow2]["label"];
            // Chart 3
            // Select the object which contains svg
            const svgChart3 = document.getElementById("bar-chart-3");
            // Wait for object to load
            svgChart3.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc3 = svgChart3.contentDocument;
                const childNodes3 = svgDoc3.childNodes;
                // Change title and labels within svg
                childNodes3[0].getElementById("bc3-txt-title").innerHTML = dataFixed["title"];
                // Copy label options to an array
                let arrData = Object.values(dataFixed["data"]);
                // Loop through array for 5 x - values
                for (let i = 0; i <= 4; i++) {
                    var intLabels = randomInt(0, arrData.length - 1);
                    // Change labels within table
                    document.querySelectorAll(`#bc3-txt-x-${i}`)[0].innerHTML = arrData[intLabels]["county"];
                    // Change values with table
                    document.querySelectorAll(`#bc3-val-x-${i}`)[0].innerHTML = arrData[intLabels]["population"];
                    // Remove label after use
                    arrData.splice(intLabels,1);
                }
            });
            break;
    
        default:
            break;
    }
}



let dataLabels = {
    0: {
        title: "Car colours in Elfed School car park",
        label: "Car colours",
        labels: {
            0: "Black",
            1: "White",
            2: "Grey",
            3: "Blue",
            4: "Red",
            5: "Green",
            6: "Pink",
            7: "Silver",
            8: "Yellow"
        }
    },
    1: {
        title: "Most popular book genre on Amazon",
        label: "Genre",
        labels: {
            0: "Fantasy",
            1: "Crime",
            2: "Horror",
            3: "Romance",
            4: "Sci-Fi",
            5: "Thriller",
            6: "Adventure",
            7: "History",
            8: "Comedy"
        }
    }
 };

 let dataFixed = {
    title: "Population in Welsh counties",
    data: {
        0: {county: "Cardiff", population: "362000"},
        1: {county: "Swansea", population: "239000"},
        2: {county: "Rhondda Cynon Taf", population: "238000"},
        3: {county: "Carmarthenshire", population: "188000"},
        4: {county: "Caerphilly", population: "176000"},
        5: {county: "Newport", population: "160000"},
        6: {county: "Flintshire", population: "155000"},
        7: {county: "Bridgend", population: "146000"},
        8: {county: "Neath Port Talbot", population: "142000"},
        9: {county: "Wrexham", population: "135000"},
        10: {county: "Vale of Glamorgan", population: "132000"},
        11: {county: "Powys", population: "133000"},
        12: {county: "Pembrokeshire", population: "123000"},
        13: {county: "Gwynedd", population: "117000"},
        14: {county: "Conwy", population: "115000"},
        15: {county: "Denbighshire", population: "96000"},
        16: {county: "Monmouthshire", population: "93000"},
        17: {county: "Torfaen", population: "92000"},
        18: {county: "Ceredigion", population: "72000"},
        19: {county: "Isle of Anglesey", population: "69000"},
        20: {county: "Blaenau Gwent", population: "67000"},
        21: {county: "Merthyr Tydfil", population: "59000"}
    }
 }