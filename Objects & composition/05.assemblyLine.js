
const myCar = {
    make: 'Toyota',
    model: 'Avensis',
};
const assemblyLine = createAssemblyLine();

function createAssemblyLine () {
    hasClima = (object) => {
        object.temp = 21;
        object.tempSettings = 21;
        object.adjustTemp = () => {
            object.temp < object.tempSettings ? object.temp += 1 : object.temp -= 1;
        }
    }
    hasAudio = (obj) => {
        currentTrack = {name: null,
                        artist: null};
        obj.currentTrack = currentTrack;
        obj.nowPlaying = () => {
            console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
        }
    }
    hasParktronic = (obj) => {
        obj.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (distance >= 0.1 && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (distance >= 0.25 && distance < 0.5) {
                console.log("Beep!");
            } else {
                console.log('');
            }
        }
        
    }
    return {hasClima, hasAudio, hasParktronic};
}

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
