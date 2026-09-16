const toggles = document.querySelectorAll(".abstract-toggle");

for (const toggle of toggles) {
  toggle.addEventListener("click", () => {
    const panelId = toggle.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";

    toggle.setAttribute("aria-expanded", String(willOpen));
    panel.hidden = !willOpen;
  });
}
