ee.namespace("ee.heatmap");

ee.heatmap.Container = function() {
    this.instruments = ko.observableArray();
}

ee.heatmap.Container.prototype.addInstruments = function(instruments) {
    for(var i=0; i< instruments.length; i++) {
        this.instruments.push(instruments[i]);
    }
}