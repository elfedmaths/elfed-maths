document.getElementById('btn-num').addEventListener('click', function(){
    newNumber();
});

document.getElementById('btn-alg').addEventListener('click', function(){
    newAlgebra();
});

document.getElementById('btn-ratio').addEventListener('click', function(){
    newRatio();
});

document.getElementById('btn-geo').addEventListener('click', function(){
    newGeometry();
});

document.getElementById('btn-prob').addEventListener('click', function(){
    newProbability();
});

document.getElementById('btn-rand').addEventListener('click', function(){
    var int = randomInt(1, 5);
    switch (int) {
        case 1:
            newNumber()
            break;
        case 2:
            newAlgebra()
            break;
        case 3:
            newRatio()
            break;
        case 4:
            newGeometry()
            break;
        case 5:
            newProbability()
            break;
    }
});

function newNumber(){
    var int = randomInt(0, arrNumber.length - 1);
    document.getElementById('word-main').innerHTML = arrNumber[int][0];
    document.getElementById('word-sub').innerHTML = arrNumber[int][1];
    textFit(document.getElementById('word-main'));
    textFit(document.getElementById('word-sub'));
}

function newAlgebra(){
    var int = randomInt(0, arrAlgebra.length - 1);
    document.getElementById('word-main').innerHTML = arrAlgebra[int][0];
    document.getElementById('word-sub').innerHTML = arrAlgebra[int][1];
    textFit(document.getElementById('word-main'));
    textFit(document.getElementById('word-sub'));
}

function newRatio(){
    var int = randomInt(0, arrRatio.length - 1);
    document.getElementById('word-main').innerHTML = arrRatio[int][0];
    document.getElementById('word-sub').innerHTML = arrRatio[int][1];
    textFit(document.getElementById('word-main'));
    textFit(document.getElementById('word-sub'));
}

function newGeometry(){
    var int = randomInt(0, arrGeometry.length - 1);
    document.getElementById('word-main').innerHTML = arrGeometry[int][0];
    document.getElementById('word-sub').innerHTML = arrGeometry[int][1];
    textFit(document.getElementById('word-main'));
    textFit(document.getElementById('word-sub'));
}

function newProbability(){
    var int = randomInt(0, arrProbability.length - 1);
    document.getElementById('word-main').innerHTML = arrProbability[int][0];
    document.getElementById('word-sub').innerHTML = arrProbability[int][1];
    textFit(document.getElementById('word-main'));
    textFit(document.getElementById('word-sub'));
}

var arrNumber = [
	["Bounds", "Rhwymau"], ["Cube", "Ciwb"], ["Denominator", "Denominator"], ["Difference", "Gwahaniaeth"], 
	["Equivalent", "Cyfwerth"], ["Estimate", "Amcangyfrif"], ["Evaluate", "Gwerthuso"], ["Expressions", "Ymadroddion"], 
	["Factors", "Ffactorau"], ["Fraction", "Ffracsiwn"], ["Improper Fraction", "Ffracsiwn Amhriodol"], ["Irrational", "Afresymol"], 
	["Laws", "Cyfreithiau"], ["Negative", "Negyddol"], ["Negative Powers", "Pwerau Negyddol"], ["Numerator", "Rhifiadur"], 
	["Order Of Operations", "Trefn Gweithrediadau"], ["Places", "Lleoedd"], ["Powers", "Pwerau"], ["Primes", "Cysefin"], 
	["Product", "Cynnyrch"], ["Rational", "Rhesymegol"], ["Reciprocals", "-"], ["Recurring", "Cyson"], 
	["Root", "Gwraidd"], ["Roots", "Gwreiddiau"], ["Round", "Rownd"], ["Rounding", "Talgrynnu"], 
	["Scale", "Graddfa"], ["Share", "Rhannu"], ["Significant", "Arwyddocaol"], ["Simplify", "Symleiddio"], 
	["Square", "Sgwar"]
];

var arrAlgebra = [
	["Approximate", "Bras"], ["Coefficient", "Cyfernod"], ["Conversion", "Trosi"], ["Difference", "Gwahaniaeth"], 
	["Expand", "Ehangu"], ["Expression", "Mynegiant"], ["Formula", "Fformiwla"], ["Generate", "Cynhyrchu"], 
	["Gradient", "Graddiant"], ["Identity", "Hunaniaeth"], ["Inequality", "Anghydraddoldeb"], ["Intercept", "Rhyng-Gipiad"], 
	["Like", "Hoffi"], ["Negative", "Negyddol"], ["Parallel", "Cyfochrog"], ["Plot", "Plot"], ["Positive", "Positif"], 
	["Quadrant", "Cwadrant"], ["Reciprocal", "Cydgyfatebol"], ["Sequence", "Dilyniant"], ["Series", "Cyfres"], 
	["Simplify", "Symleiddio"], ["Simultaneous", "Ar Yr Un Pryd"], ["Solution", "Ateb"], ["Subject", "Pwnc"], 
	["Substitute", "Dirprwy"], ["Term", "Tymor"], ["Unknowns", "Anhysbys"]
];

var arrRatio = [
	["Approximate", "Bras"], ["Coefficient", "Cyfernod"], ["Conversion", "Trosi"], ["Difference", "Gwahaniaeth"], 
	["Expand", "Ehangu"], ["Expression", "Mynegiant"], ["Formula", "Fformiwla"], ["Generate", "Cynhyrchu"], 
	["Gradient", "Graddiant"], ["Identity", "Hunaniaeth"], ["Inequality", "Anghydraddoldeb"], ["Intercept", "Rhyng-Gipiad"], 
	["Like", "Hoffi"], ["Negative", "Negyddol"], ["Parallel", "Cyfochrog"], ["Plot", "Plot"], ["Positive", "Positif"], 
	["Quadrant", "Cwadrant"], ["Reciprocal", "Cydgyfatebol"], ["Sequence", "Dilyniant"], ["Series", "Cyfres"], 
	["Simplify", "Symleiddio"], ["Simultaneous", "Ar Yr Un Pryd"], ["Solution", "Ateb"], ["Subject", "Pwnc"], 
	["Substitute", "Dirprwy"], ["Term", "Tymor"], ["Unknowns", "Anhysbys"]
];

var arrGeometry = [
	["Angle", "Ongl"], ["Arc", "Arc"], ["Area", "Arwynebedd"], ["Bearing", "Beryn"], ["Column", "Colofn"], 
	["Construction", "Adeilad"], ["Construction", "Adeiladu"], ["Corresponding", "Cyfatebol"], ["Dimension", "Dimensiwn"], 
	["Edge", "Ymyl"], ["Exterior", "Y Tu Allan"], ["Face", "Wyneb"], ["Interior", "Tu Mewn"], ["Internal", "Mewnol"], 
	["Kite", "Barcud"], ["Measure", "Mesur"], ["Net", "Rhwyd"], ["Origin", "Tarddiad"], ["Parallel", "Cyfochrog"], 
	["Plan", "Cynllun"], ["Reflect", "Adlewyrchu"], ["Reflex", "Atgyrch"], ["Right Angle", "Ongl Sgwar"], 
	["Scale Factor", "Ffactor Graddfa"], ["Sector", "Sector"], ["Segment", "Segment"], ["Symmetry", "Cymesuredd"], 
	["Tangent", "Tangiad"], ["Transformation", "Trawsnewid"], ["Translate", "Cyfieithu"], ["Volume", "Cyfrol"]
];

var arrProbability = [
	["Amount", "Swm"], ["Ascending", "Esgyn"], ["Bar", "Bar"], ["Calculate", "Cyfrifo"], ["Categories", "Categoriau"], 
	["Certain", "Sicr"], ["Chance", "Cyfle"], ["Chart", "Siart"], ["Construct", "Adeiladu"], ["Data", "Data"], 
	["Density", "Dwysedd"], ["Descending", "Disgyn"], ["Estimate", "Amcangyfrif"], ["Even", "Hyd Yn Oed"], 
	["Even Chance", "Hyd Yn Oed Siawns"], ["Find", "Canfod"], ["Frequency", "Amlder"], ["Graph", "Graff"], 
	["Impossible", "Amhosibl"], ["Independent", "Annibynnol"], ["Interpret", "Dehongli"], ["Intersection", "Croestoriad"], 
	["Key", "Allwedd"], ["Likely", "Tebygol"], ["List", "Rhestr"], ["Mean", "Cymedr"], ["Median", "Canolrif"], 
	["Mode", "Modd"], ["Mutually", "Pawb"], ["Outcomes", "Canlyniadau"], ["Pie", "Pastai"], ["Plot", "Plot"], 
	["Range", "Ystod"], ["Replace", "Disodli"], ["Replacement", "Amnewid"], ["Sample", "Sampl"], ["Scale", "Graddfa"], 
	["Scatter", "Gwasgariad"], ["Series", "Cyfres"], ["Set", "Gosod"], ["Sum", "Swm"], ["Tally", "Tally"], 
	["Union", "Undeb"], ["Unlikely", "Annhebygol"], ["Width", "Lled"]
];