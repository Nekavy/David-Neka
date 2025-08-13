// src/strings.js
export const strings = {
  lang: "pt", // idioma inicial
  data: {
    pt: {
      heroTitle: "Frontend Engineer e Web Designer, disponível para trabalho.",
      greeting: "Olá, sou o David Borges",
    },
    en: {
      heroTitle: "Frontend Engineer and Web Designer, currently available for work.",
      greeting: "Hi, I'm David Borges",
    },
  },
  setLang(newLang) {
    this.lang = newLang;
  },
  get(key) {
    return this.data[this.lang][key];
  },
};
