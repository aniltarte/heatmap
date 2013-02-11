ee.namespace("ee.heatmap");

ee.heatmap.HeatmapApplication = function(container, channel) {
    this.container = container;
    this.channel = channel;

};

ee.heatmap.HeatmapApplication.prototype.load = function() {
    this.channel.register(this);
    this.channel.sendRequest("/snapshot");
};

ee.heatmap.HeatmapApplication.prototype.onSnapshot = function(instruments) {
    this.container.addInstruments(instruments);
};