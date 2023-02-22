function carFactory({model, power, color, carriage, wheelsize}) {
    let carObj = {};
    const engines = {
        'small engine': {power: 90, volume: 1800},
        'normal engine': {power: 120, volume: 2400},
        'monster engine': {power: 200, volume: 3500}
    };
    let engine;
    if (power <= 90) {
        engine = engines['small engine'];
    } else if(power <= 120) {
        engine = engines['normal engine'];
    } else {
        engine = engines['monster engine'];
    }
    let wheels;
    if (wheelsize % 2 == 0) {
        wheels = [0, 0, 0, 0];
        wheels.fill(wheelsize - 1 )
    } else {
        wheels = [0, 0, 0, 0];
        wheels.fill(wheelsize)
    }
    
    return carObj = {model, engine, carriage :{type: carriage, color: color}, wheels};
}

console.log(carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
);