const resultText = document.getElementById("results");
const assessement = document.getElementById("assessement");
const assessementTips = document.getElementById("tips");
const category = localStorage.getItem("category");
const avg = localStorage.getItem("results");

if (category === "safety") {
  rating = ["Very Safe", "Safe", "Some Risks", "Not Safe"];
} else if (category === "security") {
  rating = ["Very Secure", "Secure", "Some Risks", "Not Secure"];
} else if (category === "welfare") {
  rating = ["Best Welfare", "Welfare", "Some Risks", "No Welfare"];
} else if (category === "miscellaneous") {
  rating = ["In interest", "Maybe", "Inconclusive", "Not in interest"];
} else {
  rating = ["Yes", "Monitor", "Supervise", "No"];
}

resultText.innerText =
  category.charAt(0).toUpperCase() +
  category.slice(1) +
  " Rating is " +
  avg.toString();

if (avg <= 10 && avg > 7) {
  assessement.innerHTML = "Ranking is " + "<strong>" + rating[0] + "</strong>";
} else if (avg <= 7 && avg > 4) {
  assessement.innerHTML = "Ranking is " + "<strong>" + rating[1] + "</strong>";
} else if (avg <= 4 && avg > 0) {
  assessement.innerHTML = "Ranking is " + "<strong>" + rating[2] + "</strong>";
} else {
  assessement.innerHTML = "Ranking is " + "<strong>" + rating[3] + "</strong>";
}

function backHomeButton() {
  window.location.assign("/home");
}
