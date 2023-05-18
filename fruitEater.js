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
  
  

