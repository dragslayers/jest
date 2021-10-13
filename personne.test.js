const perso = require("./personne");
const trier = require("./trie");

test('object assignement', () => {
    const p = new perso("caca", 15);
    expect((p)).toEqual({ nom: "caca", age: 15 });
    expect(p.Nom.length).toBeGreaterThanOrEqual(2);
});

test('majeur', () => {
    const p = new perso("caca", 18);
    const p2 = new perso("pipi", 21);
    const p3 = new perso("zizi", 15);
    expect((p.Age)).toBeGreaterThanOrEqual(18);
    expect((p2.Age)).toBeGreaterThanOrEqual(18);
    expect((p3.Age)).toBeLessThan(18);
});
test('trie', () => {
    const p = new perso("caca", 18, "Asie");
    const p2 = new perso("pipi", 21, "Europe");
    const p3 = new perso("bloblo", 26, "Europe");
    const p4 = new perso("zizi", 15, "Asie");
    const p5 = new perso("blabla", 65, "Amerique");
    const personnages = [p, p2, p4];
    const personnages2 = [p, p2, p3, p4, p5];
    const grouper_trier = trier.grouper_continent(trier.tri_object(personnages2));

    expect(trier.tri_object(personnages)).toEqual([
        { nom: 'zizi', age: 15, continent: "Asie" },
        { nom: 'caca', age: 18, continent: "Asie" },
        { nom: 'pipi', age: 21, continent: "Europe" },
    ]);
    expect(grouper_trier).toEqual(
        {
            Asie: [
                { nom: 'zizi', age: 15, continent: 'Asie' },
                { nom: 'caca', age: 18, continent: 'Asie' },
            ],
            Europe: [
                { nom: 'pipi', age: 21, continent: 'Europe' },
                { nom: 'bloblo', age: 26, continent: 'Europe' },
            ],
            Amerique: [{ nom: 'blabla', age: 65, continent: 'Amerique' },
            ],
        }
    );
});
