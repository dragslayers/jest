const multiple3ou5 = require("./sum");

test('methode exist', () => {
    expect(typeof multiple3ou5).toBe("function");
});
test('arguments vide', () => {
    expect(multiple3ou5()).toBe();
});
test('multiple de 3 et 5', () => {
    expect(multiple3ou5(15)).toBe("fizzbuzz");
});
test('multiple de 3', () => {
    expect(multiple3ou5(9)).toBe("fizz");
});
test('multiple de 5', () => {
    expect(multiple3ou5(10)).toBe("buzz");
});
test('pas multiple de 3 ni 5', () => {
    expect(multiple3ou5(14)).toBe(14);
});