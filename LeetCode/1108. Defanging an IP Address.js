function myFunction(address) {
	let result = "";
	let newSymbol = "[.]";

	for (let i = 0; i < address.length; i++) {
		let symbol = address[i];
		if (symbol === ".") {
			symbol = newSymbol;
		}
		result += symbol;
	}
	return result;
}

myFunction("255.100.50.0");