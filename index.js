function twoNumberSum(array, targetSum) {
	const numbers = new Map();
	const solution = new Map();
	
	for (let number of array) {
		numbers.set(number, number);
	}
	
	for (let number of array) {
		const difference = targetSum - number;
		if (difference !== number) {
			if (numbers.has(difference)) {
				solution.set(Math.min(number, difference), Math.max(number, difference));
			}
		}
	}
  
	if (solution.size) {
			return Array.from(...solution);
	} else {
		return [];
	}
}
