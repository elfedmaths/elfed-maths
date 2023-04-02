function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + Math.ceil(min);
}

function newRandom(){
    var int = randomInt(1, 5);
    var word = ""
    switch (int) {
        case 1:
            word = newNumber();
            break;
        case 2:
            word = newAlgebra();
            break;
        case 3:
            word = newRatio();
            break;
        case 4:
            word = newGeometry();
            break;
        case 5:
            word = newProbability();
            break;
    }
    return word;
};

function newNumber(){
    var int = randomInt(0, arrNumber.length - 1);
    return arrNumber[int][0];
}

function newAlgebra(){
    var int = randomInt(0, arrAlgebra.length - 1);
    return arrAlgebra[int][0];
}

function newRatio(){
    var int = randomInt(0, arrRatio.length - 1);
    return arrRatio[int][0];
}

function newGeometry(){
    var int = randomInt(0, arrGeometry.length - 1);
    return arrGeometry[int][0];
}

function newProbability(){
    var int = randomInt(0, arrProbability.length - 1);
    return arrProbability[int][0];
}

var arrNumber = [
	["Bounds", "Rhwymau"],
	["Cube", "Ciwb"],
	["Denominator", "Denominator"],
	["Difference", "Gwahaniaeth"],
	["Equivalent", "Cyfwerth"],
	["Estimate", "Amcangyfrif"],
	["Evaluate", "Gwerthuso"],
	["Expressions", "Ymadroddion"],
	["Factors", "Ffactorau"],
	["Fraction", "Ffracsiwn"],
	["Irrational", "Afresymol"],
	["Laws", "Cyfreithiau"],
	["Negative", "Negyddol"],
	["Numerator", "Rhifiadur"],
	["Places", "Lleoedd"],
	["Powers", "Pwerau"],
	["Primes", "Cysefin"],
	["Product", "Cynnyrch"],
	["Rational", "Rhesymegol"],
	["Reciprocals", "-"],
	["Recurring", "Cyson"],
	["Root", "Gwraidd"],
	["Roots", "Gwreiddiau"],
	["Round", "Rownd"],
	["Rounding", "Talgrynnu"],
	["Scale", "Graddfa"],
	["Share", "Rhannu"],
	["Significant", "Arwyddocaol"],
	["Simplify", "Symleiddio"],
	["Square", "Sgwar"]
];

var arrAlgebra = [
	["Approximate", "Bras"],
	["Coefficient", "Cyfernod"],
	["Conversion", "Trosi"],
	["Difference", "Gwahaniaeth"],
	["Expand", "Ehangu"],
	["Expression", "Mynegiant"],
	["Formula", "Fformiwla"],
	["Generate", "Cynhyrchu"],
	["Gradient", "Graddiant"],
	["Identity", "Hunaniaeth"],
	["Inequality", "Anghydraddoldeb"],
	["Intercept", "Rhyng-Gipiad"],
	["Like", "Hoffi"],
	["Negative", "Negyddol"],
	["Parallel", "Cyfochrog"],
	["Plot", "Plot"],
	["Positive", "Positif"],
	["Quadrant", "Cwadrant"],
	["Reciprocal", "Cydgyfatebol"],
	["Sequence", "Dilyniant"],
	["Series", "Cyfres"],
	["Simplify", "Symleiddio"],
	["Simultaneous", "Ar Yr Un Pryd"],
	["Solution", "Ateb"],
	["Subject", "Pwnc"],
	["Substitute", "Dirprwy"],
	["Term", "Tymor"],
	["Unknowns", "Anhysbys"]
];

var arrRatio = [
	["Approximate", "Bras"],
	["Coefficient", "Cyfernod"],
	["Conversion", "Trosi"],
	["Difference", "Gwahaniaeth"],
	["Expand", "Ehangu"],
	["Expression", "Mynegiant"],
	["Formula", "Fformiwla"],
	["Generate", "Cynhyrchu"],
	["Gradient", "Graddiant"],
	["Identity", "Hunaniaeth"],
	["Inequality", "Anghydraddoldeb"],
	["Intercept", "Rhyng-Gipiad"],
	["Like", "Hoffi"],
	["Negative", "Negyddol"],
	["Parallel", "Cyfochrog"],
	["Plot", "Plot"],
	["Positive", "Positif"],
	["Quadrant", "Cwadrant"],
	["Reciprocal", "Cydgyfatebol"],
	["Sequence", "Dilyniant"],
	["Series", "Cyfres"],
	["Simplify", "Symleiddio"],
	["Simultaneous", "Ar Yr Un Pryd"],
	["Solution", "Ateb"],
	["Subject", "Pwnc"],
	["Substitute", "Dirprwy"],
	["Term", "Tymor"],
	["Unknowns", "Anhysbys"]
];

var arrGeometry = [
	["Angle", "Ongl"],
	["Arc", "Arc"],
	["Area", "Arwynebedd"],
	["Bearing", "Beryn"],
	["Column", "Colofn"],
	["Construction", "Adeilad"],
	["Construction", "Adeiladu"],
	["Corresponding", "Cyfatebol"],
	["Dimension", "Dimensiwn"],
	["Edge", "Ymyl"],
	["Exterior", "Y Tu Allan"],
	["Face", "Wyneb"],
	["Interior", "Tu Mewn"],
	["Internal", "Mewnol"],
	["Kite", "Barcud"],
	["Measure", "Mesur"],
	["Net", "Rhwyd"],
	["Origin", "Tarddiad"],
	["Parallel", "Cyfochrog"],
	["Plan", "Cynllun"],
	["Reflect", "Adlewyrchu"],
	["Reflex", "Atgyrch"],
	["Sector", "Sector"],
	["Segment", "Segment"],
	["Symmetry", "Cymesuredd"],
	["Tangent", "Tangiad"],
	["Transformation", "Trawsnewid"],
	["Translate", "Cyfieithu"],
	["Volume", "Cyfrol"]
];

var arrProbability = [
	["Amount", "Swm"],
	["Ascending", "Esgyn"],
	["Bar", "Bar"],
	["Calculate", "Cyfrifo"],
	["Categories", "Categoriau"],
	["Certain", "Sicr"],
	["Chance", "Cyfle"],
	["Chart", "Siart"],
	["Construct", "Adeiladu"],
	["Data", "Data"],
	["Density", "Dwysedd"],
	["Descending", "Disgyn"],
	["Estimate", "Amcangyfrif"],
	["Even", "Hyd Yn Oed"],
	["Find", "Canfod"],
	["Frequency", "Amlder"],
	["Graph", "Graff"],
	["Impossible", "Amhosibl"],
	["Independent", "Annibynnol"],
	["Interpret", "Dehongli"],
	["Intersection", "Croestoriad"],
	["Key", "Allwedd"],
	["Likely", "Tebygol"],
	["List", "Rhestr"],
	["Mean", "Cymedr"],
	["Median", "Canolrif"],
	["Mode", "Modd"],
	["Mutually", "Pawb"],
	["Outcomes", "Canlyniadau"],
	["Pie", "Pastai"],
	["Plot", "Plot"],
	["Range", "Ystod"],
	["Replace", "Disodli"],
	["Replacement", "Amnewid"],
	["Sample", "Sampl"],
	["Scale", "Graddfa"],
	["Scatter", "Gwasgariad"],
	["Series", "Cyfres"],
	["Set", "Gosod"],
	["Sum", "Swm"],
	["Tally", "Tally"],
	["Union", "Undeb"],
	["Unlikely", "Annhebygol"],
	["Width", "Lled"]
];