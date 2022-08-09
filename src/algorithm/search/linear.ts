function linearSearch(array: any[], data: any) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === data) {
			return i
		}
	}

	return -1
}

export default linearSearch;