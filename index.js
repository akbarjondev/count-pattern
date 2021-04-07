// cut letter from text from beginning
const shiftText = (txt, limit = 1) => {

	let shiftedText = ''

	for (t in txt) {
		
		if(t < limit) {
			continue;
		} 
		
		shiftedText += txt[t]
	}

	return shiftedText
}

// count pattern from input
const count = (input, regexp) => {

	// ready
	let ready = ''

	// regexLength
	let regexpLength = 0

	// inputLength
	let inputLength = 0

	// get length regexp
	for (i in regexp) {
		regexpLength++
	}

	// get length input
	for (j in input) {
		inputLength++
	}

	let inputText = input

	for (var i = 0; i < inputLength; i++) {

		let staffInput = ''

		for (var k = 0; k < regexpLength; k++) {
			staffInput += inputText[k]
		}
		
		if(staffInput === regexp) {
			ready++
		} else {
			staffInput = ''
		}

		inputText = shiftText(inputText)
	}

	return ready
}

module.exports.count = count
