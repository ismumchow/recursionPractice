function exponent (base,expo) {
    
    while(expo> 0) {
      var changeBase = base;
      changeBase *= base
      expo--;
      console.log(changeBase);
      return changeBase
    }
  }

    // exponent (12,12);


  function recursiveExponent (base,expo) {
    
      if (expo <= 1) {
         return base;
      }
      
      else { 
          return base * recursiveExponent(base,--expo)
      }
  }

  
  //console.log(recursiveExponent(5,4)); 

    
  function recursiveMultiplier (arr, num) {
     
    if(arr.length === 0) {
      return arr
    }
      var arrTail = arr.pop(); 
     
      recursiveMultiplier(arr,num); 
     
      arr.push(arrTail * num); 
      return arr;
    
  }

    var jack = [1,2,3,4,5,6,7,8];

   // console.log (recursiveMultiplier (jack,12));

    function recursiveReverse (arr) {
      
      var reversedArray = []; 
      
      var addItems = function (orderedArr) {
          
        if(orderedArr.length <= 0) {
          return arr
        }
        
        else {
          arrHead = orderedArr.pop(); 
          reversedArray.push(arrHead);
          return addItems(orderedArr)
         }
          
      }
        addItems(arr);
        console.log(reversedArray)
        return reversedArray;
      
      }

  recursiveReverse(jack)

      
      
      