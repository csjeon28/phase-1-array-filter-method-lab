function findMatching (collection, name) {
     let matchedValues = [];
     let count = 0;
     for (const driver of collection) {
         if (driver.toLowerCase() === name.toLowerCase()) {
             matchedValues[count] = driver;
             count++;
         } 
     } 
     return matchedValues;
}

function fuzzyMatch (collection, begName) {
    let matchedValues = [];
    let count = 0;
    let begNameLength = begName.length;
    for (const driver of collection) {
        if (driver.slice(0,begNameLength) === begName) {
            matchedValues[count] = driver;
            count++;
        } 
    } 
    return matchedValues;
}

function matchName (collection, driverName) {
    let matchedValues = [];
    let count = 0;
    for (const profile of collection) {
        if (profile.name === driverName) {
            matchedValues[count] = profile;
            count++;
        } 
    } 
    return matchedValues;
}