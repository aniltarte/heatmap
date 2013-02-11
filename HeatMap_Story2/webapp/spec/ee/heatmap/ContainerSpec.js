describe("Container", function() {
    it("adds instruments", function() {
        var container = new ee.heatmap.Container();
        var instrumentOne = {symbol:"PL", name:"Platinum"};
        var instrumentTwo = {symbol:"ZU", name:"Gold"};
        var instruments = [instrumentOne, instrumentTwo];

        container.addInstruments(instruments);

        expect(container.instruments()[0]).toEqual(instrumentOne);
        expect(container.instruments()[1]).toEqual(instrumentTwo);

    });
});