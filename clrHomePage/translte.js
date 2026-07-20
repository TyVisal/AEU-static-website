const translations = {
  km: {
    invite: "ការអញ្ជើញ",
    lettion: "មុខវិជ្ជា",
    turn: "វគ្គសិសក្សា",
    exam: "ប្រឡង",
    profile: "ប្រវត្តិរូប",
    logout: "ចាកចេញ",
  },
  en: {
    invite: "Invitation",
    lettion: "Currculum",
    turn: "Course",
    exam: "Exam",
    profile: "Profile",
    logout: "Logout",
  },
  zh: {
    invite: "邀请",
    lettion: "课程设置",
    turn: "课程",
    exam: "考试",
    profile: "概述",
    logout: "课程",
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
