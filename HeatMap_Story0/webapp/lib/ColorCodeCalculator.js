ee.namespace("ee.heatmap");

ee.heatmap.ColorCodeCalculator = function(){
	this.scaleRange = 20;
};

ee.heatmap.ColorCodeCalculator.prototype.calculate = function(change) {
	this.change = parseFloat(change);
	var hexValue = this._decimalToHexColorValue();
	return this._formatHexValue(hexValue);
};

ee.heatmap.ColorCodeCalculator.prototype._decimalToHexColorValue = function() {
	var reductionFactor= Math.abs(this.change * (255/this.scaleRange));
	if(reductionFactor > 255){
		reductionFactor = 255;
	}
	var valueForAdjacentColors = 255 -  reductionFactor ;
	return this._decimalToHex(Math.round(valueForAdjacentColors));
};

ee.heatmap.ColorCodeCalculator.prototype._decimalToHex = function(colorValueInDecimal) {
	var colorValueInHex = colorValueInDecimal.toString(16);
	return colorValueInHex;
};

ee.heatmap.ColorCodeCalculator.prototype._formatHexValue = function(hexValue) {
	if(hexValue.length < 2 ){
		hexValue = "0" + hexValue;
	}
	
	if(this.change > 0) {
			return "#" + hexValue + "ff" + hexValue;
	}
	
	if(this.change < 0){
			return "#ff" + hexValue + hexValue;
	}
	
	return "#ffffff";
};