// Marcar enlace activo en la TOC según la sección visible
document.addEventListener("DOMContentLoaded", () => {
  const tocLinks = Array.from(document.querySelectorAll(".toc a[href^='#']"));
  const sections = tocLinks
    .map(link => {
      const id = link.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const item = sections.find(s => s.section === entry.target);
        if (!item) return;
        if (entry.isIntersecting) {
          tocLinks.forEach(l => l.classList.remove("active"));
          item.link.classList.add("active");
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.2
    }
  );

  sections.forEach(({ section }) => observer.observe(section));
});