function binarySearchHelper(array: any[], data: any, low: number, high: number) : number {
	if (low > high) {
		return -1
	}

	const mid = Math.floor((low + high) / 2)

	if (array[mid] === data) {
		return mid

	} else if (array[mid] > data) {
		return binarySearchHelper(array, data, low, mid - 1)

	} else {
		return binarySearchHelper(array, data, mid + 1, high)
	}
}

function binarySearch(array: any [], data: any) : number {
	return binarySearchHelper(array, data, 0, array.length - 1);
}

export default binarySearch;