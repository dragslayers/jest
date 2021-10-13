const trier = require("./trie");

describe('mon trie', () => {
    test('le tableau est triée', () => {
        let tab = [1, 9, 5, 25, 3];
        expect(trier.trie(tab)).toEqual(tab.sort(function (a, b) { return a - b }));
    });
});