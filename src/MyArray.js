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

  Array.prototype.search = function(){

    var l = 0;
    var r = a.length - 1;
    var found = false;
    var counter= 0;
    var index = -1;

    while(!found){
      counter +=1;
      if(l > r){
        result.index = -1;
        reslt.count = counter;
        result.length = this.length;
        break;
      }
      var m = Math.floor((l+r)/2);
      if(a[m] < t){
        l = m+1;
      } else if(a[m] > t){
        r = m-1;
      } else {
        found = true;
        index = m;
        result.count = counter;
        result.index = m;
        result.length = this.length;
      }
    }
    return result;
}
  Array.prototype.index = 10;
  Array.prototype.length 
}