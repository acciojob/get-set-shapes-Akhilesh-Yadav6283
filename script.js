//complete this code
class Rectangle {
	constructor(width, height){
	this._width = width;
	this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height;
	}
	area(){
		this._area = this._width*this._height;
		return this._area;
	}
}

class Square extends Rectangle {
	getPerimeter(){
		this._getPerimeter = 4*this._width;
		return this._getPerimeter;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
