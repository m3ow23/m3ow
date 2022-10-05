function m3ow_hash (userInput) {
	let i, j, k, l, m, userInputValue;
    const userInputCopy = [], outputHash = [];

	//sum value of userInput array
	for (i = 0, userInputValue = 0; i < userInput.length; i++)
        userInputValue = checkElementConstraint ((userInputValue + (userInput.charCodeAt(i) * i)) % 256);

	//padding until 62 if userInput < 62
	if (userInput.length < 62) {
		for (i = 0, j = 0; j < 62; j++) {
			userInputCopy[j] = userInput[i++];
			if (i == userInput.length) i = 0;
		}
	}
	//add userInput to itself when userInput userInput > 62
	else if (userInput.length > 62) {
        for (i = 0; i < userInput.length; i++)
            userInputCopy.push(userInput)[i];

		for (i = 0, j = 62; j < userInputCopy.length; j++) {
			userInputCopy[i] = checkElementConstraint (parseInt(userInputCopy.charCodeAt(i)) + parseInt(userInputCopy.charCodeAt(j))); 
			if (++i > 62) i = 0;
		}

		userInputCopy[62] = 0;
	}

	//initialization of hash
	for (i = 0, j = 48, k = 48, l = 86, m = 185; i < 62; i++, m--) {
		// string 1 & string 4
		outputHash[m] = j; // S1
		outputHash[i + 62] = j; // S 4
		j = checkElementConstraint (++j);
		// string 2 & string 3
		if (i % 2 == 0 || i == 0) {
			outputHash[m + 62] = k; // S 3
			outputHash[i] = k; // S4
			k = checkElementConstraint (++k);
		}
		else {
			outputHash[m + 62] = l; // S3
			outputHash[i] = l; // S4
			l = checkElementConstraint (++l);
		}
	}

	//add userInput elements to tempHash and outputHash
	for (i = 0, j = 0; i < 62; i++) {
		outputHash[i] = checkElementConstraint(parseInt(outputHash[i]) + parseInt(userInputCopy[i].charCodeAt())); // S1
		outputHash[i + 62] = checkElementConstraint(parseInt(outputHash[i + 62]) + parseInt(userInputCopy[i].charCodeAt())); // S2
		outputHash[i + 124] = checkElementConstraint(parseInt(outputHash[i + 124]) + parseInt(userInputCopy[i].charCodeAt())); // S3
		outputHash[i + 186] = checkElementConstraint(parseInt(outputHash[i + 186]) + parseInt(userInputCopy[i].charCodeAt())); // S4
	}

	//add value of userInput array to every outputHash element
	for (i = 0; i < 248; i++) 
        outputHash[i] = String.fromCharCode(checkElementConstraint(parseInt(outputHash[i]) + userInputValue));

    return outputHash.join("");
}

//check if arrayElement is within ascii contraint
function checkElementConstraint (arrayElement) {
	if (arrayElement > 122) {
		arrayElement = parseInt(arrayElement) % 123;
		
		if (arrayElement < 48) 
			arrayElement = parseInt(arrayElement) + 48;
	}

	if (arrayElement > 57 && arrayElement < 65) 
		return parseInt(arrayElement) + 7;
		
	if (arrayElement > 90 && arrayElement < 97)
		return parseInt(arrayElement) + 6;

	return arrayElement;
}
