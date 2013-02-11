describe("Heatmap", function() {

    it("displays instruments on application load", function() {
        //Given
        var instrumentOne = {symbol:"PL", name:"Platinum"};
        var instrumentTwo = {symbol:"ZU", name:"Gold"};

        var channel = new ee.heatmap.ChannelForTest([instrumentOne, instrumentTwo]);
        var container = new ee.heatmap.Container();
        var application = new ee.heatmap.HeatmapApplication(container, channel);

        //When
        application.load();

        //Then
        expect(container.instruments()[0]).toBe(instrumentOne);
        expect(container.instruments()[1]).toBe(instrumentTwo);
    });

    it("shows instrument's performance visually", function(){
        //Given
        var instrumentOne = {symbol:"PL", name:"Platinum"};

        var channel = new ee.heatmap.ChannelForTest([instrumentOne]);
        var colorCodeCalculator = new ee.heatmap.ColorCodeCalculator();
        var container = new ee.heatmap.Container(colorCodeCalculator);
        var application = new ee.heatmap.HeatmapApplication(container, channel);
        spyOn(colorCodeCalculator, "calculate").andReturn("#AABBCC");

        //When
        application.load();

        //Then
        expect(container.instruments()[0]["colorCode"]).toBe("#AABBCC");

    });

});