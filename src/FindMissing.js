function FindMissing(){
	this.findMissing = function(arr1, arr2){
		var missing;
		for(var i = 0; i < arr2.length; i++){
			missing = binarySearch(arr1, arr2[i]);
		}
		
		if(missing === undefined){
			missing = 0;
		}
		return missing;
	}
	// binarySearch is modified to return the item if it's not found in the specified array.
/*
	var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;
    array = array.sort();
while(min <= max) {
    guess = Math.floor((max + min) / 2);

    if (array[guess] === targetValue) {
        return guess;
    }
    else if (array[guess] < targetValue) {
        min = guess + 1;
    }
    else {
        max = guess - 1;
    }

}

    	return;
	};*/
	
	function binarySearch(array,target){
		var sortedArray = array.sort();
	    var l = 0;
	    var r = sortedArray.length - 1;
	    var found = false;
	    while(!found){
	      if(l > r){
	        return target;
	      }
	      var m = Math.floor((l+r)/2);
	      if(sortedArray[m] < target){
	        l = m+1;
	      } else if(sortedArray[m] > target){
	        r = m-1;
	      } else {
	        found = true;
	        break;
	      }
	  }
	}
}