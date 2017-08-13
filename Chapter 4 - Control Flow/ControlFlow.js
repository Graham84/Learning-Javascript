{ // start block statement
  console.log("statement 1");
  console.log("statement 2");
} // end block statement
console.log("statement 3");


// don't do this
if(funds > 1) {
  console.log("There's money left!");
  console.log("That means keep playing!");
} else
console.log("I'm broke! Time to quit.");
// or this
if(funds > 1)
console.log("There's money left! Keep playing!");
else {
  console.log("I'm broke"!);
  console.log("Time to quit.")
}

// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
  return m + Math.floor((n - m + 1)*Math.random());
}
// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
  return ["crown", "anchor", "heart", "spade", "club", "diamond"]
  [rand(0, 5)];
}
