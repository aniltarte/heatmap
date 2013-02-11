jQuery(document).ready(function() {
    var instrumentOne = {symbol:"PL", name:"Platinum", change:"4"};
    var instrumentTwo = {symbol:"ZU", name:"Gold", change:"-6"};
    var instrumentThree = {symbol:"USD/INR", name:"USD/INR", change:"10"};
    var instrumentFour = {symbol:"GBP/INR", name:"GBP/INR", change:"14"};
    var instrumentFive = {symbol:"GBP/USD", name:"GBP/USD", change:"-15"};

    var channel = new ee.heatmap.ChannelForTest([instrumentOne, instrumentTwo, instrumentThree, instrumentFour, instrumentFive]);
    var container = new ee.heatmap.Container(new ee.heatmap.ColorCodeCalculator());
    var application = new ee.heatmap.HeatmapApplication(container, channel);

    application.load();

    ko.applyBindings(container);
});