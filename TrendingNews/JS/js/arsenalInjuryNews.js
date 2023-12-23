/*
 * Arsenal Injury List.
 * This code is an example of how to use JS Object with forEach and Map methods to
 * display Arsenal FC Injury List on (29/11/23)
 * The code creates a table and populates it with data from the  arsenalLatestInjuryList  object.
 * It then appends the table to the body of the document and outputs all the properties of the object.
 */
const arsenalLatestInjuryList = {
  player: [
    "Fabio Viera",
    "Thomas Partey",
    "Emile Smith Rowe",
    "David Raya Martin",
    "Jurien Timber",
  ],
  reason: ["Groin", "Thigh Injury", "Knee Injury", "Other", "Knee Injury"],
  potential_return: ["20/01/2024", "28/12/2023", "29/11/2023", "29/11/2023"],
  condition: [
    "currently being assessed",
    "currently being assessed",
    "currently being assessed",
    "None",
    "currently being assessed",
  ],
  status: ["Ruled Out", "Ruled Out", "Ruled Out", "100%", "Ruled Out"],
};

// Create a table
const table = document.createElement("table");

// Create header row
const headerRow = table.insertRow(0);
Object.keys(arsenalLatestInjuryList).forEach((property) => {
  const th = document.createElement("th");
  th.textContent = property;
  headerRow.appendChild(th);
});

// Determine the number of rows needed
const numRows = Math.max(
  ...Object.values(arsenalLatestInjuryList).map((arr) => arr.length)
);

// Populate the table
for (let i = 0; i < numRows; i++) {
  const row = table.insertRow(-1);
  Object.keys(arsenalLatestInjuryList).forEach((property) => {
    const cell = row.insertCell(-1);
    cell.textContent = arsenalLatestInjuryList[property][i] || "";
  });
}

// Output the table
document.body.appendChild(table);

// Output all properties of the object
console.log(Object.keys(arsenalLatestInjuryList));
