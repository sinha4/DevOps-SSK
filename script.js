// Student Information System

const students = [
  {
    id: "kanika",
    name: "Kanika",
    reg: "127",
    programme: "MCA",
    semester: "III",
    credits: "18",
    status: "Active",
  },
  {
    id: "shambhavi",
    name: "Shambhavi",
    reg: "151",
    programme: "MCA",
    semester: "III",
    credits: "18",
    status: "Active",
  },
  {
    id: "shalwin",
    name: "Shalwin",
    reg: "150",
    programme: "MCA",
    semester: "III",
    credits: "18",
    status: "Active",
  },
];

let activeId = students[0].id;

const tabsEl = document.querySelector(".tabs");
const recordEl = document.getElementById("record");

function initials(name) {
  return name.slice(0, 2).toUpperCase();
}

function renderTabs() {
  tabsEl.innerHTML = students
    .map(
      (s) => `
      <button class="tab" role="tab"
        id="tab-${s.id}"
        aria-selected="${s.id === activeId}"
        aria-controls="record"
        data-id="${s.id}">
        ${s.name}
      </button>`
    )
    .join("");

  tabsEl.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeId = btn.dataset.id;
      renderTabs();
      renderRecord();
    });
  });
}

function renderRecord() {
  const s = students.find((x) => x.id === activeId);

  recordEl.innerHTML = `
    <div class="record-top">
      <div class="avatar">${initials(s.name)}</div>
      <div>
        <p class="record-name">${s.name}</p>
        <p class="record-role">${s.programme} · Register no. ${s.reg}</p>
      </div>
    </div>

    <div class="data-row">
      <span class="data-label">register number</span>
      <span class="data-value">${s.reg}</span>
    </div>
    <div class="data-row">
      <span class="data-label">programme</span>
      <span class="data-value">${s.programme}</span>
    </div>
    <div class="data-row">
      <span class="data-label">status</span>
      <span class="data-value">
        <span class="status-pill"><span class="status-dot"></span>${s.status}</span>
      </span>
    </div>

    <div class="stat-strip">
      <div class="stat">
        <div class="stat-value">${s.semester}</div>
        <div class="stat-label">semester</div>
      </div>
      <div class="stat">
        <div class="stat-value">${s.credits}</div>
        <div class="stat-label">credits</div>
      </div>
      <div class="stat">
        <div class="stat-value">${s.reg}</div>
        <div class="stat-label">reg. no.</div>
      </div>
    </div>
  `;

  recordEl.classList.remove("enter");
  // Restart the entrance animation on each switch
  void recordEl.offsetWidth;
  recordEl.classList.add("enter");
}

renderTabs();
renderRecord();

// Live date/time
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

// Dark mode toggle, persisted
const themeToggle = document.getElementById("themeToggle");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  iconMoon.hidden = isDark;
  iconSun.hidden = !isDark;
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

const savedTheme = localStorage.getItem("sis-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme ? savedTheme === "dark" : prefersDark);

themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
  localStorage.setItem("sis-theme", isDark ? "dark" : "light");
});

// Print
document.getElementById("printBtn").addEventListener("click", () => window.print());