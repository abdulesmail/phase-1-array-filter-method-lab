// Code your solution here
function findMatching(drivers, name) {
  const lowercaseName = name.toLowerCase();
  const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === lowercaseName);
  return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
  const matchingDrivers = drivers.filter(driver => driver.startsWith(query));
  return matchingDrivers;
}

function matchName(drivers, name) {
  const matchingDrivers = drivers.filter(driver => driver.name === name);
  return matchingDrivers;
}
