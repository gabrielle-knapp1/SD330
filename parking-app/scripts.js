// Hardcoded data from parking.json
const parkingLots = [
  {
    name: "McCann/Sheahan Lot",
    mapJPG: "./images/mcCannLot.jpg",
    totalSpaces: 200,
    comments: "Open to faculty/staff, residents, and commuters. Next to McCann gym and nearby Leo and Sheahan dorms.",
    primaryType: "All",
    studentParkingAvailability: "all the time",
    evChargersYN: "N",
  },
  {
    name: "Foy Lot",
    mapJPG: "./images/foyLot.jpg",
    totalSpaces: 40,
    comments: "Open to students between 5pm to 1am on weekdays, all day on Saturdays and Sundays.",
    primaryType: "Faculty/Staff",
    studentParkingAvailability: "M-F: 5PM - 1AM, Weekends: All day",
    evChargersYN: "N",
  },
  {
    name: "Dyson Lot",
    mapJPG: "./images/dysonLot.jpg",
    totalSpaces: 60,
    comments: "Open to students between 5pm to 1am on weekdays, all day on Saturdays and Sundays.",
    primaryType: "Faculty/Staff",
    studentParkingAvailability: "M-F: 5PM - 1AM, Weekends: All day",
    evChargersYN: "N",
  },
  {
    name: "Donnelly Lot",
    mapJPG: "./images/donnellyLot.jpg",
    totalSpaces: 120,
    comments: "Open to students between 5pm to 1am on weekdays, all day on Saturdays and Sundays.",
    primaryType: "Faculty/Staff",
    studentParkingAvailability: "M-F: 5PM - 1AM, Weekends: All day",
    evChargersYN: "N",
  },
  {
    name: "Fontaine Lot",
    mapJPG: "./images/fontaineLot.jpg",
    totalSpaces: 50,
    comments: "Border spaces reserved for staff 24/7, interior spaces always open to students.",
    primaryType: "All",
    studentParkingAvailability: "24/7 - Interior Spaces Only",
    evChargersYN: "N",
  },
  {
    name: "Hoop Lot",
    mapJPG: "./images/hoopLot.jpg",
    totalSpaces: 100,
    comments: "Always available to residents.",
    primaryType: "Residents",
    studentParkingAvailability: "24/7",
    evChargersYN: "N",
  },
  {
    name: "St. Anne's/North End Lot",
    mapJPG: "./images/northEndLot.jpg",
    totalSpaces: 120,
    comments: "Always available to residents.",
    primaryType: "Residents",
    studentParkingAvailability: "24/7",
    evChargersYN: "N",
  },
];

// Function to display parking lots
function displayLots(lots) {
  const lotDetails = document.getElementById("lotDetails");
  lotDetails.innerHTML = ""; // Clear existing content

  lots.forEach(lot => {
    const lotCard = document.createElement("div");
    lotCard.className = "lot-card";
    lotCard.innerHTML = `
      <h2>${lot.name}</h2>
      <img src="${lot.mapJPG}" alt="Map of ${lot.name}" />
      <p>Total Spaces: ${lot.totalSpaces}</p>
      <p>${lot.comments}</p>
      <p>Primary Type: ${lot.primaryType}</p>
      <p>Student Parking: ${lot.studentParkingAvailability}</p>
      <p>EV Chargers: ${lot.evChargersYN}</p>
    `;
    lotDetails.appendChild(lotCard);
  });
}

// Function to filter parking lots
function filterLots() {
  const selectedLot = document.getElementById("lotFilter").value;
  if (selectedLot === "all") {
    displayLots(parkingLots);
  } else {
    const filteredLots = parkingLots.filter(lot => lot.name === selectedLot);
    displayLots(filteredLots);
  }
}

// Initialize the page with all lots displayed
document.addEventListener("DOMContentLoaded", () => displayLots(parkingLots));

function returnHome() {
  window.location.href = "parking.html"; // Adjust the path if the home page is in a different directory
}
