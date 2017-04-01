/* Find an item in an array */
function arrayLookUp(array, toFind) {
	for(var i=0; i < array.length; i++) {
		if(array[i] === toFind) {
			console.log(toFind, "is in the array.");
			return i;
		} 
	}
	console.log(toFind, "is not in the array.");
	return -1;
}

/* Delete empty spaces in an array */
function arrayShifter(array) {

}