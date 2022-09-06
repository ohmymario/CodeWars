function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let filteredBirds = birds.filter(bird => !geese.includes(bird))
    
    return filteredBirds
  };