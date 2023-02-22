function heroicInventory(arr) {
    let heroes = [];

    for (const el of arr) {
        let [name, level, items] = el.split(' / ');
        heroes.push(hero = {name, level: Number(level), items: items ? items.split(', ') : []})
    }
    
    let result = JSON.stringify(heroes);
    return result;
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);