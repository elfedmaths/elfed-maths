function loadData(filename){
    // Select the object which contains svg
    const svgChart1 = document.getElementById("chart-1");
    const svgChart2 = document.getElementById("chart-2");
    const svgChart3 = document.getElementById("chart-3");
    switch (filename) {
        case "bar-charts":
        case "line-charts":
        case "freq-diagrams":
            // Get number of data groups
            const dataRows = Object.keys(dataLabels).length;
            // Chart 1
            // Select random data group
            const dataRow1 = randomInt(0, dataRows - 1);
            // Wait for object to load
            svgChart1.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc1 = svgChart1.contentDocument;
                const childNodes1 = svgDoc1.childNodes;
                // Change title and labels within svg
                childNodes1[0].getElementById("c1-txt-title").innerHTML = dataLabels[dataRow1]["title"];
                childNodes1[0].getElementById("c1-txt-label").innerHTML = dataLabels[dataRow1]["label"];
                // Copy label options to an array
                let arrLabels = Object.values(dataLabels[dataRow1]["labels"]);
                // Multiplier and current max for values in table
                const intMult = randomInt(dataLabels[dataRow1]["miny"], Math.ceil(dataLabels[dataRow1]["maxy"]/8));
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
            document.querySelectorAll("#c1-txt-x-label")[0].innerHTML = dataLabels[dataRow1]["label"];
            // Chart 2
            // Select random data group
            let dataRow2 = randomInt(0, dataRows - 1);
            while (dataRow1 == dataRow2){
                dataRow2 = randomInt(0, dataRows - 1);
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
                let arrLabels = Object.values(dataLabels[dataRow2]["labels"]);
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
            // Chart 3
            // Wait for object to load
            svgChart3.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc3 = svgChart3.contentDocument;
                const childNodes3 = svgDoc3.childNodes;
                // Change title and labels within svg
                childNodes3[0].getElementById("c3-txt-title").innerHTML = dataFixed["title"];
                // Copy label options to an array
                let arrData = Object.values(dataFixed["data"]);
                // Loop through array for 5 x - values
                for (let i = 0; i <= 4; i++) {
                    let intLabels = randomInt(0, arrData.length - 1);
                    // Change labels within table
                    document.querySelectorAll(`#c3-txt-x-${i}`)[0].innerHTML = arrData[intLabels]["county"];
                    // Change values with table
                    document.querySelectorAll(`#c3-val-x-${i}`)[0].innerHTML = arrData[intLabels]["population"];
                    // Remove label after use
                    arrData.splice(intLabels,1);
                }
            });
            // Change table within table
            document.querySelectorAll("#c3-txt-x-label")[0].innerHTML = "County";
            document.querySelectorAll("#c3-txt-y-label")[0].innerHTML = "Population";
            break;

        case "freq-polygon":
            // Chart 1
            // Get number of data groups continuous
            const dataGroups = Object.keys(dataGrouped["continuous"]).length;
            // Select random data group continuous
            const dataGroup1 = randomInt(0, dataGroups - 1);
            // Wait for object to load
            svgChart1.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc1 = svgChart1.contentDocument;
                const childNodes1 = svgDoc1.childNodes;
                // Change title and labels within svg
                childNodes1[0].getElementById("c1-txt-title").innerHTML = dataGrouped["continuous"][dataGroup1]["title"];
                childNodes1[0].getElementById("c1-txt-label").innerHTML = dataGrouped["continuous"][dataGroup1]["label"];
                // Multiplier and current max for values in table
                const intMultX = 1 + randomInt(dataGrouped["continuous"][dataGroup1]["minx"], Math.ceil((dataGrouped["continuous"][dataGroup1]["maxx"]-dataGrouped["continuous"][dataGroup1]["minx"])/11));
                const intMultY = randomInt(dataGrouped["continuous"][dataGroup1]["miny"], Math.ceil(dataGrouped["continuous"][dataGroup1]["maxy"]/8));
                let intMax = 0;
                // Loop through array for 6 x - values
                for (let i = 0; i <= 5; i++) {
                    let xLabel = (i + i * intMultX + dataGrouped["continuous"][dataGroup1]["minx"]) + " - " + (i + (i + 1) * intMultX + dataGrouped["continuous"][dataGroup1]["minx"])
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
            document.querySelectorAll("#c1-txt-x-label")[0].innerHTML = dataGrouped["continuous"][dataGroup1]["label"];
            // Chart 2
            // Select random data group
            let dataGroup2 = randomInt(0, dataGroups - 1);
            while (dataGroup1 == dataGroup2){
                dataGroup2 = randomInt(0, dataGroups - 1);
            }
            // Wait for object to load
            svgChart2.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc2 = svgChart2.contentDocument;
                const childNodes2 = svgDoc2.childNodes;
                // Change title and labels within svg
                childNodes2[0].getElementById("c2-txt-title").innerHTML = dataGrouped["continuous"][dataGroup2]["title"];
                childNodes2[0].getElementById("c2-txt-label").innerHTML = dataGrouped["continuous"][dataGroup2]["label"];
                // Multiplier and current max for values in table
                const intMultX = 1 + randomInt(dataGrouped["continuous"][dataGroup2]["minx"], Math.ceil((dataGrouped["continuous"][dataGroup2]["maxx"]-dataGrouped["continuous"][dataGroup2]["minx"])/11));
                let intMax = 0;
                // Loop through array for 6 x - values
                for (let i = 0; i <= 5; i++) {
                    let xLabel = (i + i * intMultX + dataGrouped["continuous"][dataGroup2]["minx"]) + " &lt; x &le; " + (i + (i + 1) * intMultX + dataGrouped["continuous"][dataGroup2]["minx"])
                    // Change labels within table
                    document.querySelectorAll(`#c2-txt-x-${i}`)[0].innerHTML = xLabel;
                    // Change values with table
                    let intNew = randomInt(dataGrouped["continuous"][dataGroup2]["miny"], dataGrouped["continuous"][dataGroup2]["maxy"]);
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
            document.querySelectorAll("#c2-txt-x-label")[0].innerHTML = dataGrouped["continuous"][dataGroup2]["label"];
            // Chart 3
            // Get number of data groups continuous
            const dataGroups3 = Object.keys(dataGrouped["discrete"]).length;
            // Select random data group continuous
            const dataGroup3 = randomInt(0, dataGroups3 - 1);
            // Wait for object to load
            svgChart3.addEventListener("load", function() {
                // Get the child elements of svg
                const svgDoc3 = svgChart3.contentDocument;
                const childNodes3 = svgDoc3.childNodes;
                // Change title and labels within svg
                childNodes3[0].getElementById("c3-txt-title").innerHTML = dataGrouped["discrete"][dataGroup3]["title"];
                // Copy label options to an array
                let arrData = Object.values(dataFixed["data"]);
                // Loop through array for 6 x - values
                for (let i = 0; i <= 5; i++) {
                    // Change labels within table
                    document.querySelectorAll(`#c3-txt-x-${i}`)[0].innerHTML = dataGrouped["discrete"][dataGroup3]["labels"][i];
                    // Change values with table
                    document.querySelectorAll(`#c3-val-x-${i}`)[0].innerHTML = randomInt(dataGrouped["discrete"][dataGroup3]["miny"],dataGrouped["discrete"][dataGroup3]["maxy"]);
                }
            });
            // Change table within table
            document.querySelectorAll("#c3-txt-x-label")[0].innerHTML = dataGrouped["discrete"][dataGroup3]["xlabel"];
            document.querySelectorAll("#c3-txt-y-label")[0].innerHTML = dataGrouped["discrete"][dataGroup3]["ylabel"];
            break;

            case "scatter-graph":
                // Chart 1
                // Get number of data groups continuous
                const dataScatters = Object.keys(dataScatter).length;
                // Select random data group continuous
                const dataScatter1 = randomInt(0, dataScatters - 1);
                // Wait for object to load
                svgChart1.addEventListener("load", function() {
                    // Get the child elements of svg
                    const svgDoc1 = svgChart1.contentDocument;
                    const childNodes1 = svgDoc1.childNodes;
                    // Change title and labels within svg
                    childNodes1[0].getElementById("c1-txt-title").innerHTML = dataScatter[dataScatter1]["title"];
                    childNodes1[0].getElementById("c1-txt-label").innerHTML = dataScatter[dataScatter1]["xlabel"];
                    childNodes1[0].getElementById("c1-txt-frequency").innerHTML = dataScatter[dataScatter1]["ylabel"];
                    // Loop through 8 table values
                    for (let i = 0; i <= 7; i++) {
                        // Change values with table
                        let intNewX = randomInt(dataScatter[dataScatter1]["minx"],dataScatter[dataScatter1]["maxx"]);
                        document.querySelectorAll(`#c1-txt-x-${i}`)[0].innerHTML = intNewX;
                        let intNewY = randomInt(dataScatter[dataScatter1]["miny"],dataScatter[dataScatter1]["maxy"]);
                        document.querySelectorAll(`#c1-val-x-${i}`)[0].innerHTML = intNewY;
                    }
                    // Loop through 9 y - values
                    for (let i = 0; i <= 8; i++) {
                        let intNewY = dataScatter[dataScatter1]["miny"] + (i * Math.ceil(dataScatter[dataScatter1]["maxy"]/9));
                        childNodes1[0].getElementById(`c1-txt-y-${i}`).innerHTML = intNewY;
                    }
                    // Loop through 12 x - values
                    for (let i = 0; i <= 11; i++) {
                        let intNewX = dataScatter[dataScatter1]["minx"] + (i * Math.ceil(dataScatter[dataScatter1]["maxx"]/12));
                        childNodes1[0].getElementById(`c1-txt-x-${i}`).innerHTML = intNewX;
                    }
                });
                // Change table within table
                document.querySelectorAll("#c1-txt-x-label")[0].innerHTML = dataScatter[dataScatter1]["xlabel"];
                document.querySelectorAll("#c1-txt-y-label")[0].innerHTML = dataScatter[dataScatter1]["ylabel"];
                // Chart 2
                // Select random data group
                let dataScatter2 = randomInt(0, dataScatters - 1);
                while (dataScatter1 == dataScatter2){
                    dataScatter2 = randomInt(0, dataScatters - 1);
                }
                // Wait for object to load
                svgChart2.addEventListener("load", function() {
                    // Get the child elements of svg
                    const svgDoc2 = svgChart2.contentDocument;
                    const childNodes2 = svgDoc2.childNodes;
                    // Change title and labels within svg
                    childNodes2[0].getElementById("c2-txt-title").innerHTML = dataScatter[dataScatter2]["title"];
                    childNodes2[0].getElementById("c2-txt-label").innerHTML = dataScatter[dataScatter2]["xlabel"];
                    childNodes2[0].getElementById("c2-txt-frequency").innerHTML = dataScatter[dataScatter2]["ylabel"];
                    // Loop through 8 table values
                    for (let i = 0; i <= 7; i++) {
                        // Change values with table
                        let intNewX = randomInt(dataScatter[dataScatter2]["minx"],dataScatter[dataScatter2]["maxx"]);
                        document.querySelectorAll(`#c2-txt-x-${i}`)[0].innerHTML = intNewX;
                        let intNewY = randomInt(dataScatter[dataScatter2]["miny"],dataScatter[dataScatter2]["maxy"]);
                        document.querySelectorAll(`#c2-val-x-${i}`)[0].innerHTML = intNewY;
                    }
                    // Loop through 9 y - values
                    for (let i = 0; i <= 8; i++) {
                        let intNewY = dataScatter[dataScatter2]["miny"] + (i * Math.ceil(dataScatter[dataScatter2]["maxy"]/9));
                        childNodes2[0].getElementById(`c2-txt-y-${i}`).innerHTML = intNewY;
                    }
                });
                // Change table within table
                document.querySelectorAll("#c2-txt-y-label")[0].innerHTML = dataScatter[dataScatter2]["ylabel"];
                document.querySelectorAll("#c2-txt-x-label")[0].innerHTML = dataScatter[dataScatter2]["xlabel"];
                // Chart 3
                // Select random data group
                let dataScatter3 = randomInt(0, dataScatters - 1);
                while (dataScatter3 == dataScatter1 || dataScatter3 == dataScatter2){
                    dataScatter3 = randomInt(0, dataScatters - 1);
                }
                // Wait for object to load
                svgChart3.addEventListener("load", function() {
                    // Get the child elements of svg
                    const svgDoc3 = svgChart3.contentDocument;
                    const childNodes3 = svgDoc3.childNodes;
                    // Change title and labels within svg
                    childNodes3[0].getElementById("c3-txt-title").innerHTML = dataScatter[dataScatter3]["title"];
                    // Loop through 8 table values
                    for (let i = 0; i <= 7; i++) {
                        // Change values with table
                        let intNewX = randomInt(dataScatter[dataScatter3]["minx"],dataScatter[dataScatter3]["maxx"]);
                        document.querySelectorAll(`#c3-txt-x-${i}`)[0].innerHTML = intNewX;
                        let intNewY = randomInt(dataScatter[dataScatter3]["miny"],dataScatter[dataScatter3]["maxy"]);
                        document.querySelectorAll(`#c3-val-x-${i}`)[0].innerHTML = intNewY;
                    }
                });
                // Change table within table
                document.querySelectorAll("#c3-txt-y-label")[0].innerHTML = dataScatter[dataScatter3]["ylabel"];
                document.querySelectorAll("#c3-txt-x-label")[0].innerHTML = dataScatter[dataScatter3]["xlabel"];
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
        },
        miny: 1,
        maxy: 100
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
        },
        miny: 1,
        maxy: 100
    },
    2: {
        title: "Most popular phone in year " + randomInt(7,11),
        label: "Manufacturers",
        labels: {
            0: "Apple",
            1: "Google Pixel",
            2: "Samsung",
            3: "Nokia",
            4: "Motorola",
            5: "Huawei",
            6: "Sony",
            7: "LG",
            8: "HTC"
        },
        miny: 1,
        maxy: 100
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

let dataGrouped = {
    "continuous": {
        0: {
            title: "Achievement points earned this term",
            label: "Achievement Points",
            minx: 0,
            maxx: 80,
            miny: 1,
            maxy: 100
        },
        1: {
            title: "Behaviour points earned this term",
            label: "Behaviour Points",
            minx: 0,
            maxx: 80,
            miny: 1,
            maxy: 100
        }
    },
    "discrete": {
        0: {
            title: "Monthly rainfall in Wales",
            xlabel: "Months",
            ylabel: "Rainfall (mm)",
            labels: {
                0: "Jan - Feb",
                1: "Mar - Apr",
                2: "May - Jun",
                3: "Jul - Aug",
                4: "Sep - Oct",
                5: "Nov - Dec",
            },
            miny: 1,
            maxy: 50
        }
    }
}

let dataScatter = {
    0: {
        title: "Car sale values against the age of the car",
        xlabel: "Car Age (Years)",
        ylabel: "Car Value (£1000)",
        minx: 1,
        maxx: 10,
        miny: 1,
        maxy: 30
    },
    1: {
        title: "Year " + randomInt(7,9) + " procedural score against reading age",
        xlabel: "Procedural Score",
        ylabel: "Reading Age",
        minx: 80,
        maxx: 120,
        miny: 1,
        maxy: 10
    },
    2: {
        title: "Year " + randomInt(7,9) + " reasoning score against reading age",
        xlabel: "Reasoning Score",
        ylabel: "Reading Age",
        minx: 80,
        maxx: 120,
        miny: 1,
        maxy: 10
    }
}