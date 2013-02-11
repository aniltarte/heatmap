ee.namespace("ee.heatmap");

ee.heatmap.Container = function (colorCodeCalculator) {
    this.colorCodeCalculator = colorCodeCalculator;
    this.instruments = ko.observableArray();
}

ee.heatmap.Container.prototype.addInstruments = function (instruments) {
    for (var i = 0; i < instruments.length; i++) {
        if (this.colorCodeCalculator) {
            instruments[i]["colorCode"] = this.colorCodeCalculator.calculate(instruments[i]["change"]);
        }
        this.instruments.push(instruments[i]);
    }
}

