module.exports = function getZerosCount(number, base) {
  var multiplier = [];
	var degree = [];
	for (var i = 2; i <= base; i++) {
		var counter = 0;
		while (base % i == 0) {
			if (multiplier[multiplier.length -1] != i) {
				multiplier[multiplier.length] = i;
			}
			counter++;
			base = Math.floor(base / i);
		}
		if (base % i != 0 && counter != 0) {
			degree.push(counter);
		}
	}

	var a = 0;
	var arr = [];
	for (var k = 0; k < multiplier.length; k++) {
		var deg = multiplier[k];
		for (var j = deg; number / j >= 1; j *= deg) {
			a += Math.floor( number / j );
		}
		arr[k] = a;
		a = 0;
	}

	var decimalCounter = [];
	for (var l = 0; l < multiplier.length; l++) {
		decimalCounter[l] = ( Math.floor(arr[l] / degree[l]) );
	}

	function compareNumbers(a, b) {
	  return a - b;
	}

	decimalCounter.sort(compareNumbers);
	return decimalCounter[0];
}
