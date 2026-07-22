const translations = {
  km: {
    default: "ទំព័រដើម",
    loginn: "ចូលប្រព័ន្ធ",
  },
  en: {
    default: "Home",
    loginn: "Login",
  },
  zh: {
    default: "首页",
    loginn: "登录",
  },
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("preferredLang", lang);
  document.documentElement.lang = lang;
}

document.querySelectorAll(".lang-flag").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

// Load saved language on page load, default to Khmer
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("preferredLang") || "km";
  setLanguage(saved);
});
