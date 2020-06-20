function fact(myArg1, n) {

  if (n == 0) {
    return 1
  } else {
    return fact(myArg1, n - 1) * (n);
  }
  }
  
  
  var myArg = process.argv[2];
  console.log(fact(myArg,myArg)) ;
