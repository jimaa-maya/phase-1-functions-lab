// Code your solution in this file!



function distanceFromHqInBlocks(location) {
    const headquarters = 42; 
    const distanceInBlocks = Math.abs(location - headquarters);
    return distanceInBlocks;
  }
  

function distanceFromHqInFeet(location) {
    const blockLength = 264; 
    const headquarters = 42; 
    const distanceInBlocks = Math.abs(location - headquarters);
    const distanceInFeet = distanceInBlocks * blockLength;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
