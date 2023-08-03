function receivesAFunction(callback) {
    return callback();
};
 receivesAFunction (function(){ console.log("i love snow!")});
 
 function namedFunction() {
    return "i am a returned function";
  };
  
  function returnsANamedFunction() {
    return namedFunction;
  };
  
  console.log(returnsANamedFunction());
  
  function returnsAnAnonymousFunction() {
    return function() {
      return "i am an anonymous function";
    };
  }

