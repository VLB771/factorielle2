function fact(myArg) {

  var myArg = process.argv[2];
  console.log('myArg: ', myArg);

  var myFactArg = 1;

  for(var i = 0; i < myArg; i++) {

    myFactArg = parseFloat(myFactArg * (i + 1)).toPrecision(i+11);
    console.log(myFactArg);
  }

  return myFactArg;

  }

  console.log(fact());