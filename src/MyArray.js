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

  Array.prototype.search = function(t){

    const a = this;
    var l = 0;
    var r = a.length - 1;
    var found = false;
    var counter= 0;
    var index = -1;

    while(!found){
      if(l > r){
        result.index = -1;
        result.count = counter;
        result.length = a.length;
        break;
      }

      var m = Math.floor((l+r)/2);

      if(t === a[a.length-1]){
        result.index = a.length-1;
        result.count = counter;
        result.length = a.length;
        break;
      }
      if(a[m] < t){
        l = m+1;
      } else if(a[m] > t){
        r = m-1;
      } else {
        found = true;
        result.count = counter;
        result.index = m;
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