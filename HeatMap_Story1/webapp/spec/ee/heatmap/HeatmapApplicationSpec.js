describe("Heatmap application", function() {
    it("requests instruments on load", function() {
        //Given
        var ignoreContainer = {};
        var channel = new ee.heatmap.Channel();
        var application = new ee.heatmap.HeatmapApplication(ignoreContainer, channel);
        spyOn(channel, "sendRequest");

        //When
        application.load();

        //Then
        expect(channel.sendRequest).toHaveBeenCalledWith("/snapshot");

    });

    it("registers to channel on load", function() {
        //Given
        var ignoreContainer = {};
        var channel = new ee.heatmap.Channel();
        var application = new ee.heatmap.HeatmapApplication(ignoreContainer, channel);
        spyOn(channel, "register");

        //When
        application.load();

        //Then
        expect(channel.register).toHaveBeenCalledWith(application);

    });

    it("processes instruments on snapshot response", function() {
        //Given
        var instrumentOne = {symbol:"PL", name:"Platinum"};
        var instrumentTwo = {symbol:"ZU", name:"Gold"};
        var instruments = [instrumentOne, instrumentTwo];
        var container = new ee.heatmap.Container();
        var ignoreChannel = {};
        var application = new ee.heatmap.HeatmapApplication(container, ignoreChannel);
        spyOn(container, "addInstruments");

        //When
        application.onSnapshot(instruments);

        //Then
        expect(container.addInstruments).toHaveBeenCalledWith(instruments);

    });
});