describe("Heatmap", function() {

    it("displays instruments on application load", function() {
        //Given
        var instrumentOne = {symbol:"PL", name:"Platinum", change:"4"};
        var instrumentTwo = {symbol:"ZU", name:"Gold", change:"-6"};

        var channel = new ee.heatmap.ChannelForTest([instrumentOne, instrumentTwo]);
        var container = new ee.heatmap.Container();
        var application = new ee.heatmap.HeatmapApplication(container, channel);

        //When
        application.load();

        //Then
        expect(container.instruments()[0]).toBe(instrumentOne);
        expect(container.instruments()[1]).toBe(instrumentTwo);
    });

});