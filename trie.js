function trie(tab) {
    let temp;
    while (is_sorted(tab) == false) {

        for (let i = 0; i < tab.length; i++) {
            let index = Math.floor(Math.random() * tab.length);
            temp = tab[i];
            tab[i] = tab[index];
            tab[index] = temp;
        }
    }

    return tab;
}

function is_sorted(tab) {
    for (let i = 1; i < tab.length; i++) {
        if (tab[i - 1] > tab[i]) {
            return false;
        }
    }
    return true;
}

function tri_object(obj) {
    obj.sort(function (a, b) {
        return a.Age - b.Age;
    });
    return obj;
}

function grouper_continent(obj) {
    const groups = obj.reduce((groups, item) => {
        const continent = (groups[item.continent] || []);
        continent.push(item);
        groups[item.continent] = continent;
        return groups;
    }, {});
    return groups;
}


module.exports = { trie, is_sorted, tri_object, grouper_continent };