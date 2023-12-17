// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  // Assuming Scuber's headquarters is on 42nd Street
  const headquarters = 42;
  
  // Calculate the distance in blocks
  return Math.abs(someValue - headquarters);
}

function distanceFromHqInFeet(someValue) {
  // Reuse distanceFromHqInBlocks to get the number of blocks
  const blocks = distanceFromHqInBlocks(someValue);

  // Each block in Manhattan is 264 feet long
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  // Calculate the number of feet traveled
  return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  // Calculate fare based on distance
  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare for distance over 2000 feet and under 2500 feet
  } else if (distance > 2500) {
    return 'cannot travel that far'; // Cannot travel more than 2500 feet
  }
}

