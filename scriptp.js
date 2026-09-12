// =================================================================
// TAB SWITCHING
// Nothing to edit here — this reads data-target on each .tab button
// and toggles the matching #id .pane. Add a new tab by adding a
// button with data-target="yourId" in index.html and a matching
// <section id="yourId" class="pane"> — no JS changes needed.
// =================================================================
const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".pane");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;

    tabs.forEach((t) => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });

    panes.forEach((pane) => {
      pane.classList.toggle("active", pane.id === target);
    });
  });
});

// =================================================================
// FOOTER YEAR
// =================================================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// =================================================================
// ONE-TIME HERO TYPING EFFECT
// Types out the name in #typewriter, then leaves a blinking cursor.
// Skips straight to the full text if the visitor prefers less motion.
// =================================================================
const typewriterEl = document.getElementById("typewriter");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typewriterEl) {
  const fullText = typewriterEl.textContent.trim();

  if (prefersReducedMotion) {
    typewriterEl.textContent = fullText;
  } else {
    typewriterEl.textContent = "";
    const cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.innerHTML = "&nbsp;";

    let i = 0;
    const speedMs = 55;

    function typeNext() {
      if (i < fullText.length) {
        typewriterEl.textContent = fullText.slice(0, i + 1);
        typewriterEl.appendChild(cursor);
        i++;
        setTimeout(typeNext, speedMs);
      } else {
        typewriterEl.appendChild(cursor);
      }
    }
    typeNext();
  }
}
