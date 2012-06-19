function Fruit( type, color ){
    this._color = color;
    this._type = type;
};

Fruit.prototype.taste = function(){
    return "[Fruit - "+"too abstract to eat ]";    
};

Fruit.prototype.looks = function(){
    return "[Fruit - The fruit is of "+this._color+" in color]";
};

module.exports = Fruit;
