// --- Theme: persist choice ---
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") root.classList.add("light");

document.getElementById("themeBtn").addEventListener("click", () => {
  root.classList.toggle("light");
  localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
});

// --- Mobile nav ---
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// --- Year ---
document.getElementById("year").textContent = new Date().getFullYear();

// --- Projects (DOM manipulation) ---
const GITHUB_BASE = "https://github.com/<your-username>"; // <-- put your GitHub username here

const projects = [
  {
    title: "Maven Dependency Analyzer",
    desc: "Generates CycloneDX SBOMs from Maven, sends to Dependency-Track, aggregates CVEs, and uses AI to suggest fixes.",
    tags: ["Spring Boot", "Docker", "AI", "Security"],
    url: `${GITHUB_BASE}/maven-dependency-analyzer`
  },
  {
    title: "RS232 Data Listener",
    desc: "Robust serial listener: parses packets, validates, logs to CSV/DB, and emits UI status events.",
    tags: ["Java", "Serial", "Oracle"],
    url: `${GITHUB_BASE}/rs232-data-listener`
  },
  {
    title: "AI-Driven Threat Hunting (FYP)",
    desc: "Autoencoder learns normal network traffic and flags anomalies. Custom dataset, focus on practical detectability.",
    tags: ["Python", "ML", "Security"],
    url: null // private / not public
  }
];

const grid = document.getElementById("projectsGrid");
projects.forEach(p => {
  const card = document.createElement("article");
  card.className = "card";
  const linkHtml = p.url
    ? `<a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener" aria-label="Open ${p.title} on GitHub">GitHub</a>`
    : `<button class="btn btn-ghost disabled" aria-disabled="true" title="This project is not public">Private / not public</button>`;

  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
    <div style="margin-top:8px">${linkHtml}</div>
  `;
  grid.appendChild(card);
});
