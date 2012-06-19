var Fruit = require('./Fruit');

Apple.prototype = new Fruit();
Apple.prototype.constructor=this;
Apple.prototype.parent = Fruit.prototype;


function Apple( type, color ) {
    this._type = type;
    this._color = color;
};
Apple.prototype.taste = function(){
    return "[Apple - "+"mmm tasty ]";    
};

module.exports = Apple;
