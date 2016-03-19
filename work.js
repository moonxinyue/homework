function Person (name) {
  this.name = name;
  n = 1;
}
Person.prototype.toString = function () {
	return this.name;
}; 
Person.prototype.count = function () {
	return this.n++;
}; 
var ling = new Person('ling');
var long = new Person('long');
ling.toString();//会返回ling
long.toString();//会返回long
ling.count();


function Complex (real,imaginary) {
	if (isNAN(real)) || (isNAN(imaginary))//判断参数为数字
		throw new TypeError();
	this.r = real;
	this.i = imaginary;
}
//复数加上另一个复数，返回计算后的新复数
Complex.prototype.add = function (that) {
	return new Complex(this.r + that.r，this.i + that.i);
}; 
//复数乘上另一个复数，返回计算后的新复数
Complex.prototype.mul = function (that) {
	return new Complex(this.r * that.r - this.i * that.i，this.r * that.i + this.i * that.r);
};
//求共轭复数
Complex.prototype.neg = function () {
	return new Complex(this.r，-this.i);
}; 
//将复数转换为字符串 
Complex.prototype.toString = function () {
	return "{" + this.r + "," + this.i + "}";
}; 
//判断是否相等
Complex.prototype.equal = function (that) {
	if (that != null &&
	that.constructor === Complex &&
	this.r === that.r && thia.i ===that.i) 
	return true;
    else 
    	return false;
};
//求复数的模 
Complex.prototype.mag = function () {
	return Math.sqrt(this.r * this.r + this.i * this.i);
}; 
var num1 = new Complex(2,4);