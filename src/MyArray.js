function MyArray(){
  Array.prototype.toTwenty = function(){
    const twenties = [];
    for(var i = 1; i <=20; i++){
      twenties.push(i);
    }
    return twenties;
  };
  Array.prototype.toForty = function(){
    const forties = [];
    for(var j = 2; j<=40; j+=2){
      forties.push(j);
    }
    return forties;
  };

  Array.prototype.toOneThousand = function(){
    const thousands = [];
    for(var k = 10; k <= 1000; k+=10){
      thousands.push(k);
    }
    return thousands;
  };

  this.count = -1;
  const result = {};

  Array.prototype.search = function(target){

    const a = this;
    var min = 0;
    var max = a.length - 1;
    var found = false;
    var counter= 0;
    var index = -1;

    while(!found){
      if(min > max){
        result.index = -1;
        result.count = counter;
        result.length = a.length;
        break;
      }

      var mid = Math.floor((min+max)/2);

      if(target === a[a.length-1]){
        result.index = a.length-1;
        result.count = counter;
        result.length = a.length;
        break;
      }
      if(a[mid] < target){
        min = mid+1;
        //r--;
      } else if(a[mid] > target){
        max = mid-1;
        //l++;
      } else {
        found = true;
        result.count = counter;
        result.index = mid;
        result.length = a.length;
      }
      counter +=1;
    }
    return result;
  }

  Array.prototype.indexOf = function () {
    throw new Error('You are not allowed to use the indexOf function');
  };
}