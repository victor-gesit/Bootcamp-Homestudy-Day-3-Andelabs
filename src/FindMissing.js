function FindMissing(){
	this.findMissing = function(arr1, arr2){
		arr1 = arr1.sort();
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
	
	function binarySearch(sortedArray,target){
	    var min = 0;
	    var max = sortedArray.length - 1;
	    var found = false;
	    while(!found){
	      if(min > max){
	        return target;
	      }
	      var mid = Math.floor((min+max)/2);
	      if(sortedArray[mid] < target){
	        min = mid+1;
	      } else if(sortedArray[mid] > target){
	        max = mid-1;
	      } else {
	        found = true;
	        break;
	      }
	  }
	}
}