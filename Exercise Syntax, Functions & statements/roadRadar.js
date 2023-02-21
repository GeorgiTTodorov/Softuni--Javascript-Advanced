function roadRadar(speed, area) {
  let areaLimits = {
    city: 50,
    residential: 20,
    interstate: 90,
    motorway: 130,
  };
  let status;
  let difference = speed - areaLimits[area];

  if (speed <= areaLimits[area]) {
    console.log(`Driving ${speed} km/h in a ${areaLimits[area]} zone`);
  } else if (speed > areaLimits[area] && difference <= 20) {
    status = "speeding";
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${areaLimits[area]} - ${status}`
    );
  } else if (speed > areaLimits[area] && difference > 20 && difference <= 40) {
    status = "eexcessive speeding";
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${areaLimits[area]} - ${status}`
    );
  } else {
    status = "reckless driving";
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${areaLimits[area]} - ${status}`
    );
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
