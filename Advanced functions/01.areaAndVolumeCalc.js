function areaAndVolumeCalc(area, vol, shape) {
  const data = JSON.parse(shape);
  let result = [];

  for (const el of data) {
    const areaResult = area.call(el);
    const volume = vol.call(el);
    result.push({ area: areaResult, volume: volume });
  }
  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

const s1 = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`;

const s2 = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`;

areaAndVolumeCalc(area, vol, s1);
areaAndVolumeCalc(area, vol, s2);
