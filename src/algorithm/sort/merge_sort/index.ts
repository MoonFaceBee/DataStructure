function merge(array1: any[], array2: any[]): any[] {
	const sortedArray = []

	let i = 0
	let j = 0
	while (i < array1.length && j < array2.length) {
		if (array1[i] <= array2[j]) {
			sortedArray.push(array1[i])

			i++
		} else if (array2[j] <= array1[i]) {
			sortedArray.push(array2[j])

			j++
		}
	}

	for (; i < array1.length; i++) {
		sortedArray.push(array1[i]);
	}

	for (; j < array2.length; j++) {
		sortedArray.push(array2[j]);
	}

	return sortedArray
}

function mergeSortHelper(array: any[]) {
	if (array.length < 2) {
		return array;
	}

	const mid = Math.floor(array.length/2)
	let left = array.slice(0, mid)
	let right = array.slice(mid)

	left = mergeSortHelper(left)
	right = mergeSortHelper(right)

	return merge(left, right)
}

function mergeSort(array: any[]): any[] {
	const tempArray = [...array]
	return mergeSortHelper(tempArray)
}

export default mergeSort;