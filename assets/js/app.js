document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Marcar enlace activo en la TOC según la sección visible ---
  const tocLinks = Array.from(document.querySelectorAll(".toc a[href^='#']"));
  const sections = tocLinks
    .map(link => {
      const id = link.getAttribute("href").slice(1);
      const section = document.getElementById(id);
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  if (sections.length) {
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
  }

  // --- 2. Botones de copiar en bloques de código ---
  const codeBlocks = Array.from(document.querySelectorAll("pre > code"));

  codeBlocks.forEach(code => {
    const pre = code.parentElement;
    const wrapper = document.createElement("div");
    wrapper.className = "code-block";

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "code-copy-btn";
    btn.innerHTML = "<span>Copy</span>";

    btn.addEventListener("click", async () => {
      const text = code.innerText.replace(/\n+$/, "");
      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add("copied");
        btn.firstChild.textContent = "Copied!";
        setTimeout(() => {
          btn.classList.remove("copied");
          btn.firstChild.textContent = "Copy";
        }, 1500);
      } catch (e) {
        console.error("Copy failed", e);
        btn.firstChild.textContent = "Error";
      }
    });

    wrapper.appendChild(btn);
  });
});
