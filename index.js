// Function to find matching drivers
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().includes(query.toLowerCase()));
}

// Function for fuzzy matching
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to match by name in an array of driver objects
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
