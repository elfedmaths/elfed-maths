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
    },
    3: {
        title: "Year " + randomInt(7,11) + " students favourite subject",
        label: "Subjects",
        labels: {
            0: "Maths",
            1: "English",
            2: "Science",
            3: "Geography",
            4: "History",
            5: "P.E.",
            6: "Welsh",
            7: "Wellbeing",
            8: "M.F.L."
        },
        miny: 1,
        maxy: 100
    },
    4: {
        title: "How students in year " + randomInt(7,11) + " travel to school",
        label: "Transport",
        labels: {
            0: "Walk",
            1: "Bike",
            2: "Car",
            3: "Bus",
            4: "Taxi",
            5: "Scooter"
        },
        miny: 1,
        maxy: 100
    }
};

let dataFixed = {
    0: {
        title: "Population in Welsh counties",
        label: "Population",
        data: {
            0: {county: "Cardiff", value: "362000"},
            1: {county: "Swansea", value: "239000"},
            2: {county: "Rhondda Cynon Taf", value: "238000"},
            3: {county: "Carmarthenshire", value: "188000"},
            4: {county: "Caerphilly", value: "176000"},
            5: {county: "Newport", value: "160000"},
            6: {county: "Flintshire", value: "155000"},
            7: {county: "Bridgend", value: "146000"},
            8: {county: "Neath Port Talbot", value: "142000"},
            9: {county: "Wrexham", value: "135000"},
            10: {county: "Vale of Glamorgan", value: "132000"},
            11: {county: "Powys", value: "133000"},
            12: {county: "Pembrokeshire", value: "123000"},
            13: {county: "Gwynedd", value: "117000"},
            14: {county: "Conwy", value: "115000"},
            15: {county: "Denbighshire", value: "96000"},
            16: {county: "Monmouthshire", value: "93000"},
            17: {county: "Torfaen", value: "92000"},
            18: {county: "Ceredigion", value: "72000"},
            19: {county: "Isle of Anglesey", value: "69000"},
            20: {county: "Blaenau Gwent", value: "67000"},
            21: {county: "Merthyr Tydfil", value: "59000"}
        },
        source: "statswales.gov.wales"
    },
    1: {
        title: "Area of Welsh counties (km^2)",
        label: "Area",
        data: {
            0: {county: "Cardiff", value: "140"},
            1: {county: "Swansea", value: "380"},
            2: {county: "Rhondda Cynon Taf", value: "420"},
            3: {county: "Caerphilly", value: "280"},
            4: {county: "Newport", value: "190"},
            5: {county: "Flintshire", value: "440"},
            6: {county: "Bridgend", value: "250"},
            7: {county: "Neath Port Talbot", value: "440"},
            8: {county: "Wrexham", value: "500"},
            9: {county: "Vale of Glamorgan", value: "340"},
            10: {county: "Denbighshire", value: "850"},
            11: {county: "Monmouthshire", value: "850"},
            12: {county: "Torfaen", value: "130"},
            13: {county: "Isle of Anglesey", value: "710"},
            14: {county: "Blaenau Gwent", value: "110"},
            15: {county: "Merthyr Tydfil", value: "110"}
        },
        source: "statswales.gov.wales"
    },
    2: {
        title: "Number of schools in Welsh counties",
        label: "Schools",
        data: {
            0: {county: "Cardiff", value: "126"},
            1: {county: "Swansea", value: "93"},
            2: {county: "Rhondda Cynon Taf", value: "113"},
            3: {county: "Carmarthenshire", value: "109"},
            4: {county: "Caerphilly", value: "86"},
            5: {county: "Newport", value: "56"},
            6: {county: "Flintshire", value: "77"},
            7: {county: "Bridgend", value: "59"},
            8: {county: "Neath Port Talbot", value: "62"},
            9: {county: "Wrexham", value: "68"},
            10: {county: "Vale of Glamorgan", value: "55"},
            11: {county: "Powys", value: "90"},
            12: {county: "Pembrokeshire", value: "61"},
            13: {county: "Gwynedd", value: "95"},
            14: {county: "Conwy", value: "59"},
            15: {county: "Denbighshire", value: "54"},
            16: {county: "Monmouthshire", value: "34"},
            17: {county: "Torfaen", value: "32"},
            18: {county: "Ceredigion", value: "43"},
            19: {county: "Isle of Anglesey", value: "46"},
            20: {county: "Blaenau Gwent", value: "25"},
            21: {county: "Merthyr Tydfil", value: "27"}
        },
        source: "statswales.gov.wales"
    },
    3: {
        title: "Percentage of waste recycled in Welsh counties",
        label: "Recycling",
        data: {
            0: {county: "Cardiff", value: "58%"},
            1: {county: "Swansea", value: "65%"},
            2: {county: "Rhondda Cynon Taf", value: "67%"},
            3: {county: "Carmarthenshire", value: "62%"},
            4: {county: "Caerphilly", value: "60%"},
            5: {county: "Newport", value: "67%"},
            6: {county: "Flintshire", value: "60%"},
            7: {county: "Bridgend", value: "73%"},
            8: {county: "Neath Port Talbot", value: "66%"},
            9: {county: "Wrexham", value: "68%"},
            10: {county: "Vale of Glamorgan", value: "70%"},
            11: {county: "Powys", value: "67%"},
            12: {county: "Pembrokeshire", value: "73%"},
            13: {county: "Gwynedd", value: "64%"},
            14: {county: "Conwy", value: "70%"},
            15: {county: "Denbighshire", value: "65%"},
            16: {county: "Monmouthshire", value: "70%"},
            17: {county: "Torfaen", value: "63%"},
            18: {county: "Ceredigion", value: "70%"},
            19: {county: "Isle of Anglesey", value: "62%"},
            20: {county: "Blaenau Gwent", value: "65%"},
            21: {county: "Merthyr Tydfil", value: "67%"}
        },
        source: "statswales.gov.wales"
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
        },
        2: {
            title: "Time students spent revising",
            label: "Time (Minutes)",
            minx: 0,
            maxx: 240,
            miny: 1,
            maxy: 100
        },
        3: {
            title: "Time spent travelling to school",
            label: "Time (Minutes)",
            minx: 0,
            maxx: 60,
            miny: 1,
            maxy: 100
        },
        4: {
            title: "Distance students can throw shotputs",
            label: "Distance (m)",
            minx: 0,
            maxx: 20,
            miny: 1,
            maxy: 100
        }
    },
    "discrete": {
        0: {
            title: "Rainfall in Wales by months",
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
        },
        1: {
            title: "Average height of year 7 students per year",
            xlabel: "Year",
            ylabel: "Height (cm)",
            labels: {
                0: "Sept '17",
                1: "Sept '18",
                2: "Sept '19",
                3: "Sept '20",
                4: "Sept '21",
                5: "Sept '22",
            },
            miny: 100,
            maxy: 180
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
        xlabel: "Reading Age",
        ylabel: "Procedural Score",
        minx: 1,
        maxx: 10,
        miny: 80,
        maxy: 120
    },
    2: {
        title: "Year " + randomInt(7,9) + " reasoning score against reading age",
        xlabel: "Reading Age",
        ylabel: "Reasoning Score",
        minx: 1,
        maxx: 10,
        miny: 80,
        maxy: 120
    },
    3: {
        title: "Year " + randomInt(7,9) + " heights against shoe sizes",
        xlabel: "Shoe size",
        ylabel: "Height (cm)",
        minx: 3,
        maxx: 11,
        miny: 80,
        maxy: 180
    }
}

let dataBoxplot = {
    "random": {
        0: {
            min: 6,
            max: 34,
            0: {
                title: "A graph to show the hourly wage of 100 people living in London (£)",
                min: 12,
                max: 30
            },
            1: {
                title: "A graph to show the hourly wage of 100 people living in Flintshire (£)",
                min: 8,
                max: 22
            }
        }
    },
    "fixed": {
        0: {county: 'Isle of Anglesey ',min: 67.8,max: 70.4,med: 69.8,lowq: 69,uppq: 69.9,source: 'statswales.gov.wales',minx: 60,multx: 1},
        1: {county: 'Gwynedd ',min: 115,max: 125.1,med: 122.6,lowq: 117,uppq: 124.2,source: 'statswales.gov.wales',minx: 113,multx: 1},
        2: {county: 'Conwy ',min: 107.9,max: 118.1,med: 116,lowq: 113.5,uppq: 117.1,source: 'statswales.gov.wales',minx: 107,multx: 1},
        3: {county: 'Denbighshire ',min: 89.3,max: 96.6,med: 95.2,lowq: 93.7,uppq: 95.7,source: 'statswales.gov.wales',minx: 85,multx: 1},
        4: {county: 'Flintshire ',min: 142,max: 156.8,med: 155.1,lowq: 151.6,uppq: 155.7,source: 'statswales.gov.wales',minx: 135,multx: 2},
        5: {county: 'Wrexham ',min: 124.1,max: 136.1,med: 135.3,lowq: 133.4,uppq: 135.9,source: 'statswales.gov.wales',minx: 115,multx: 2},
        6: {county: 'Powys ',min: 119.7,max: 133.5,med: 132.4,lowq: 130.9,uppq: 133,source: 'statswales.gov.wales',minx: 110,multx: 2},
        7: {county: 'Ceredigion ',min: 65.9,max: 75.4,med: 72.9,lowq: 72.1,uppq: 73.6,source: 'statswales.gov.wales',minx: 65,multx: 1},
        8: {county: 'Pembrokeshire ',min: 112.4,max: 126.7,med: 124.1,lowq: 120.2,uppq: 125.2,source: 'statswales.gov.wales',minx: 105,multx: 2},
        9: {county: 'Carmarthenshire ',min: 169.7,max: 190,med: 187,lowq: 181.3,uppq: 188.3,source: 'statswales.gov.wales',minx: 165,multx: 2},
        10: {county: 'Swansea ',min: 223.4,max: 246.9,med: 242,lowq: 235.8,uppq: 246.4,source: 'statswales.gov.wales',minx: 220,multx: 2},
        11: {county: 'Neath Port Talbot ',min: 134.3,max: 144.3,med: 142,lowq: 139.6,uppq: 143,source: 'statswales.gov.wales',minx: 132,multx: 1},
        12: {county: 'Bridgend ',min: 128.7,max: 147.5,med: 144.5,lowq: 136.9,uppq: 146,source: 'statswales.gov.wales',minx: 120,multx: 2},
        13: {county: 'Vale of Glamorgan ',min: 118,max: 135.2,med: 131.4,lowq: 124.8,uppq: 132.7,source: 'statswales.gov.wales',minx: 115,multx: 2},
        14: {county: 'Cardiff ',min: 296.9,max: 369.2,med: 361.1,lowq: 336.6,uppq: 364.9,source: 'statswales.gov.wales',minx: 280,multx: 10},
        15: {county: 'Rhondda Cynon Taf ',min: 231.9,max: 241.8,med: 238.3,lowq: 234.7,uppq: 240.4,source: 'statswales.gov.wales',minx: 130,multx: 10},
        16: {county: 'Merthyr Tydfil ',min: 56.2,max: 60.4,med: 59.7,lowq: 58.8,uppq: 60.2,source: 'statswales.gov.wales',minx: 55,multx: 1},
        17: {county: 'Caerphilly ',min: 169.5,max: 181.7,med: 179.7,lowq: 174.6,uppq: 181,source: 'statswales.gov.wales',minx: 165,multx: 2},
        18: {county: 'Blaenau Gwent ',min: 66.9,max: 72.6,med: 69.8,lowq: 69.6,uppq: 70,source: 'statswales.gov.wales',minx: 65,multx: 1},
        19: {county: 'Torfaen ',min: 90.9,max: 94.8,med: 92.3,lowq: 91.1,uppq: 93.2,source: 'statswales.gov.wales',minx: 90,multx: 1},
        20: {county: 'Monmouthshire ',min: 80.2,max: 95.1,med: 93.3,lowq: 89.8,uppq: 94.2,source: 'statswales.gov.wales',minx: 80,multx: 2},
        21: {county: 'Newport ',min: 135.4,max: 159.6,med: 152.3,lowq: 143.7,uppq: 155.1,source: 'statswales.gov.wales',minx: 135,multx: 2}
    }
}

let dataPie = {
    0: {
        title: "Recyling figures in Wales (1000 Tonnes)",
        label: "Recyling type",
        source: "myrecyclingwales.org.uk",
        data: {
            0: {label: "Organic Waste", value: 296},
            1: {label: "Ruble & Aggregate", value: 141},
            2: {label: "Paper", value: 135},
            3: {label: "Glass", value: 93},
            4: {label: "Incinerator Bottom Ash", value: 91},
            5: {label: "Metal", value: 53},
            6: {label: "Wood", value: 50},
            7: {label: "Plastic", value: 46},
            8: {label: "Textiles", value: 9},
            9: {label: "Waste Electrical", value: 17},
            10: {label: "Hygiene Products", value: 4}
        }
    },
    1: {
        title: "Number of items ordered at the start of the year",
        label: "Item type",
        data: {
            0: {label: "Black Pens", value: randomInt(10,100)},
            1: {label: "Red Pens", value: randomInt(10,100)},
            2: {label: "Blue Pens", value: randomInt(10,100)},
            3: {label: "A4 Plain Paper", value: randomInt(10,100)},
            4: {label: "A3 Plain Paper", value: randomInt(10,100)},
            5: {label: "A4 Squared Paper", value: randomInt(10,100)},
            6: {label: "A4 Lined Paper", value: randomInt(10,100)},
            7: {label: "Rulers", value: randomInt(10,100)},
            8: {label: "Pencils", value: randomInt(10,100)},
            9: {label: "Scissors", value: randomInt(10,100)},
            10: {label: "Rubbers", value: randomInt(10,100)}
        }
    }
}