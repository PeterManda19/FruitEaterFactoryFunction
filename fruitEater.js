// Factory function definition
function FruitEater() {
    var apples = 0;
    var pears = 0;
  
    return {
      eat: function(fruit) {
        if (fruit === 'apple') {
          apples++;
        } else if (fruit === 'pear') {
          pears++;
        }
      },
      applesEaten: function() {
        return apples;
      },
      pearsEaten: function() {
        return pears;
      }
    };
}
  
// Create an instance of FruitEater
var fruitEater = FruitEater();

// Get references to the DOM elements
var appleBtn = document.getElementById('appleBtn');
var pearBtn = document.getElementById('pearBtn');
var applesEatenElem = document.getElementById('applesEaten');
var pearsEatenElem = document.getElementById('pearsEaten');

// Add event listeners to the buttons
appleBtn.addEventListener('click', function() {
  fruitEater.eat('apple');
  applesEatenElem.textContent = fruitEater.applesEaten();
});

pearBtn.addEventListener('click', function() {
  fruitEater.eat('pear');
  pearsEatenElem.textContent = fruitEater.pearsEaten();
});
