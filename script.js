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
const GITHUB_BASE = "https://github.com/israalrasbi";

const projects = [
  {
    title: "Maven Dependency Analyzer",
    desc: "Spring Boot backend that scans Java project dependencies for security vulnerabilities. Generates CycloneDX SBOMs, integrates with OWASP Dependency-Track, and uses AI to suggest fixes.",
    tags: ["Spring Boot", "Docker", "CycloneDX", "Security", "AI"],
    url: `${GITHUB_BASE}/MavenDependencyAnalyzer`
  },
  {
    title: "RS-232 Reader System",
    desc: "JavaFX desktop app that extracts and monitors serial (RS-232) port data in real time. Parses STX/ETX-framed packets, logs valid messages to CSV, and pushes them to an Oracle database.",
    tags: ["Java", "JavaFX", "Serial", "Oracle"],
    url: null
  },
  {
    title: "AI-Driven Threat Hunting",
    desc: "Final-year project: built a system using Scapy to collect and classify network traffic. Trained a deep-learning model to detect and categorize abnormal traffic using a custom dataset.",
    tags: ["Python", "ML", "Security", "Scapy"],
    url: null
  }
];

const grid = document.getElementById("projectsGrid");
projects.forEach(p => {
  const card = document.createElement("article");
  card.className = "card glass card-glow";
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
