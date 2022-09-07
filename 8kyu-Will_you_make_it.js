const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const milesLeft = mpg * fuelLeft
    return (distanceToPump - milesLeft) <= 0
};