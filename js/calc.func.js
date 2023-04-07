function convertNum(num){
    var output = "";
    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var numString = num.toString();
    if (num < 0) throw new Error('Negative numbers are not supported.');
    if (num === 0) return 'Zero';
    //1 - 19
    if (num < 20) {
      return capLetter(ones[num]);
    }
    //20 - 99
    if (numString.length === 2) {
      return capLetter(tens[numString[0]] + ' ' + ones[numString[1]]);
    }
    //100 - 999
    if (numString.length === 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return capLetter(ones[numString[0]] + ' hundred');
      else
        return capLetter(ones[numString[0]] + ' hundred and ' + convertNum(+(numString[1] + numString[2])));
    }
    //1000 - 9999
    if (numString.length === 4) {
      var end = +(numString[1] + numString[2] + numString[3]);
      if (end === 0) return capLetter(ones[numString[0]] + ' thousand');
      if (end < 100) return capLetter(ones[numString[0]] + ' thousand and ' + convertNum(end));
      return capLetter(ones[numString[0]] + ' thousand ' + convertNum(end));
    }
    //10,000 - 999,000
    if (numString.length > 4 && numString.length < 7){
        var start = numString.substring(0, numString.length - 3);
        var end = parseInt(numString.substring(numString.length - 3, numString.length));
        if (end === 0) return capLetter(convertNum(start) + ' thousand');
        if (end < 100) return capLetter(convertNum(start) + ' thousand and ' + convertNum(end));
        return capLetter(convertNum(start) + ' thousand ' + convertNum(end));
    }
}