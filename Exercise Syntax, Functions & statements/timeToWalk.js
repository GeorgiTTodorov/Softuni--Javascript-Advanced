function timeToWalk(steps, lengthInMeters, speed) {
  let distanceInMeters = steps * lengthInMeters;
  let speedInMetersPerSecond = speed / 3.6;
  let rest = Math.floor(distanceInMeters / 500) * 60;
  let totalTime = distanceInMeters / speedInMetersPerSecond + rest;
  let hours = Math.floor(totalTime / 3600);
  let minutes = Math.floor(totalTime / 60);
  let seconds = Math.round(totalTime % 60);

  console.log(
    `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`
  );
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
