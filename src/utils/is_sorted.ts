export default function isSorted (array: any[]) {
	for (let i = 0; i < array.length - 1; i ++) {
		if (array[i] > array[i+1]) {
			return false
		}
	}

	return true
}