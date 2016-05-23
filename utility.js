/* Find an item in an array */
function arrayLookUp(array, toFind) {
	for(var i=0; i < array.length; i++) {
		if(array[i] === toFind) {
			console.log(toFind, "is in the array.");
			return true;
		} 
	}
	console.log(toFind, "is not in the array.");
	return false;
}