// Test cases
describe('The FruitEater function', function() {
    it('should count how many apples have been eaten', function() {
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('apple');
        assert.equal(appleAndPearEater.applesEaten(), 2);
    });
    
    
    it('should count how many apples and pears have been eaten', function() {
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('pear');
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('pear');
        appleAndPearEater.eat('apple');
        assert.equal(appleAndPearEater.applesEaten(), 3);
        assert.equal(appleAndPearEater.pearsEaten(), 2);
    });
});
