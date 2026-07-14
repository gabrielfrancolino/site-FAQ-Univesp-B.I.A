const faqList = document.querySelector("#faqList");
const axisFilter = document.querySelector("#axisFilter");
const searchInput = document.querySelector("#search");
const stats = document.querySelector("#stats");
document.querySelector("#today").textContent = new Date().toLocaleDateString("pt-BR");

const items = window.FAQ_ITEMS || [];
const axes = [...new Set(items.map(item => item.axis))];

axes.forEach(axis => {
  const option = document.createElement("option");
  option.value = axis;
  option.textContent = axis;
  axisFilter.appendChild(option);
});

function normalize(text) {
  return (text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function render() {
  const term = normalize(searchInput.value);
  const axis = axisFilter.value;

  const filtered = items.filter(item => {
    const inAxis = axis === "todos" || item.axis === axis;
    const haystack = normalize([item.axis, item.q, item.a, item.source, ...(item.tags || [])].join(" "));
    return inAxis && (!term || haystack.includes(term));
  });

  stats.textContent = `${filtered.length} pergunta(s) encontrada(s) de ${items.length}.`;
  faqList.innerHTML = "";

  filtered.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "faq-item";

    const button = document.createElement("button");
    button.className = "faq-question";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.innerHTML = `
      <span>
        <span class="axis">${escapeHtml(item.axis)}</span>
        <strong>${escapeHtml(item.q)}</strong>
      </span>
      <span class="toggle" aria-hidden="true">+</span>
    `;

    const answer = document.createElement("div");
    answer.className = "faq-answer";
    answer.innerHTML = `
      <p>${escapeHtml(item.a)}</p>
      <div class="tags">${(item.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="source-box">
        <span class="source-label">Fonte oficial</span>
        <p>${escapeHtml(item.source)}</p>
        <a href="${escapeAttribute(item.url)}" target="_blank" rel="noopener">Abrir fonte oficial</a>
      </div>
    `;

    button.addEventListener("click", () => {
      const isOpen = article.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    if (index === 0 && !term) {
      article.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }

    article.appendChild(button);
    article.appendChild(answer);
    faqList.appendChild(article);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

searchInput.addEventListener("input", render);
axisFilter.addEventListener("change", render);
render();
