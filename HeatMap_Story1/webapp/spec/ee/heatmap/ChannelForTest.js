ee.namespace("ee.heatmap");

ee.heatmap.ChannelForTest = function(instruments) {
    this.instruments = instruments;
    this.listener = null;
}

ee.extend(ee.heatmap.ChannelForTest, ee.heatmap.Channel);

ee.heatmap.ChannelForTest.prototype.sendRequest = function(url) {
    this.listener.onSnapshot(this.instruments);
};

ee.heatmap.ChannelForTest.prototype.register = function(listener) {
    this.listener = listener;
};