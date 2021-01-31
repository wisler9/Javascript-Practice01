const square = function(x) {
    return x * x;
}

console.log(square(12));

// ------------------------------------------------------

const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

// ------------------------------------------------------

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result += base;
    }
    return result;
};

console.log(power(2, 10));

// ------------------------------------------------------


let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
//y is not visible here;
console.log(x + z);

// ------------------------------------------------------
// function expression

const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(100))
console.log(10);

// ------------------------------------------------------


const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
      let ingredientAmount= amount * factor;
      if(ingredientAmount > 1) {
       unit +="s";   
      }
      console.log( `${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(1, "can", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
console.log(hummus(1));


// ------------------------------------------------------
// function declaration can be hoisted 

console.log("The future says: ", future());

function future() {
    return "You'll never have flying cars.";
}


// ------------------------------------------------------
// arrow function

const power2 = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *=  base;
    }
    return result;
};

console.log(power2(3,5));


// ------------------------------------------------------
// Call stack

function chicken() {
    return egg();
}
function egg() {
    return chicken();
}

// console.log(chicken(), "came first.");