function SelectionSort(array: any[]) {
	const tempArray = [...array]

	for (let i = 0; i < tempArray.length; i++) {
		let minIndex = i;

		for (let j = i + 1; j < tempArray.length; j++) {
			if (tempArray[j] < tempArray[minIndex] ) {
				minIndex = j
			}
		}

		const temp = tempArray[i]
		tempArray[i] = tempArray[minIndex]
		tempArray[minIndex] = temp
	}

	return tempArray
}

export default SelectionSort;