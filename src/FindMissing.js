function FindMissing(){
	this.findMissing = function(arr1, arr2){
		var missing = 0;
		for(var i = 0; i < arr2.length; i++){
			missing = binarySearch(arr1, arr2[i]);
		}
		return missing;
	}
	// binarySearch is modified to return the item if it's not found in the specified array.
	function binarySearch(array,target){
	  var l = 0;
	  var r = array.length - 1;
	  var found = false;
	  //var count= 0;
	  while(!found){
	    //count +=1;
	    if(l > r){
	      return target;
	    }
	    var m = Math.floor((l+r)/2);
	    if(array[m] < target){
	      l = m+1;
	    } else if(array[m] > target){
	      r = m-1;
	    } else {
	      found = true;
	      break;
	      //return m;
	    }
	  }
	}
}