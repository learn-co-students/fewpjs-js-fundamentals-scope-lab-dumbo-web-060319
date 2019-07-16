const myanimal = "dog";
const youranimal = "cat";

function myAnimal() {
  return myanimal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return youranimal;
}

function add2(n) {
  let two = 2;
  return n + two;
  // Feel free to move things around!
}


// In index.js, we've given you some starter code. As is, it does not run. Start by running the specs and reading the results. Debug and make some fixes in the code. Run the tests again and repeat. Using your knowledge of scope, access and change the variables until all tests pass. Make sure to focus on using const and let and avoid usage of var, or you may experience some unexpected issues.