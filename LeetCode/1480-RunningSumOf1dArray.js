function myFunction(input) {
    let result = [];
	result[0] = input[0];
	for (let i = 1; i < input.length; i++) {
		result[i] = result[i - 1] + input[i];
	}
	return result;
};

myFunction([1,2,3,4]);