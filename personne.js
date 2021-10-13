class personne {

    constructor(nom, age,continent) {
        this.nom = nom;
        this.age = age;
        this.continent = continent;
    }

    get Age() {
        return this.age;
    }

    get Nom() {
        return this.nom;
    }

    get Continent() {
        return this.continent;
    }
}

module.exports = personne;

// const p = new personne("caca",15);
