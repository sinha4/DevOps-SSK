// Student Information System

// 1. Show and update the current date/time
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  document.getElementById("datetime").textContent = now.toLocaleString("en-IN", options);
}

updateDateTime();
setInterval(updateDateTime, 1000);

// 2. Dark mode toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "Toggle Light Mode" : "Toggle Dark Mode";
});

console.log("Student Information System loaded.");