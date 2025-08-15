import { nav } from "framer-motion/client";

const strings = {
  lang: "pt",
  data: {
    pt: {
      heroDescription: "Desenvolvedor Full-Stack | Eletrónica & Desenvolvimento em IA",
      copied: "Copiado!",
      navHome: "Início",
      navAbout: "Sobre",
      navContact: "Contacto",
      aboutTitle: "Sobre Mim",
      aboutContent: "Sou David Borges, um programador full-stack com 2 anos de experiência profissional no desenvolvimento de aplicações web e gestão de bases de dados, incluindo sistemas que processavam dados de clientes. Para além do trabalho profissional, realizei estágios e projetos para empresas, bem como trabalhos pessoais e académicos. Estou a concluir a minha licenciatura em Engenharia Informática / Software Development, faltando apenas a disciplina de Matemática, e possuo certificações de Nível 4 e Nível 5 em Tecnologias de Programação, Sistemas de Informação, Eletrónica e Computadores. Tenho também conhecimentos em inteligência artificial e desenvolvimento mobile. Estas qualificações deram origem a uma ampla gama de projetos, desde protótipos de IoT e experiências com IA até aplicações móveis multiplataforma. A minha experiência abrange frontend, backend e gestão de dados, enriquecida por colaborações internacionais em contexto académico com instituições em França, Polónia e Bélgica. Sou apaixonado por escrever código limpo e desenvolver sistemas intuitivos, fiáveis e preparados para o futuro.",
    },
    en: {
      heroDescription: "Full-Stack Developer | Electronics & AI Development",
      copied: "Copied!",
      navHome: "Home",
      navAbout: "About",
      navContact: "Contact",
      aboutTitle: "About Me",
      aboutContent: "I’m David Borges, a full-stack developer with 2 years of professional experience in web application development and database management, including systems that processed client data. In addition to professional work, I have completed internships and projects for companies, as well as personal and academic work. I am currently finishing my Bachelor’s degree in Computer Engineering / Software Development, with only Mathematics pending, and hold Level 4 and Level 5 certifications in Programming Technologies, Information Systems, Electronics, and Computers. I also have knowledge in artificial intelligence and mobile development. These qualifications have led to a wide range of projects, from IoT prototypes and AI experiments to cross-platform mobile applications. My experience spans frontend, backend, and data management, enriched by academic collaborations with institutions in France, Poland, and Belgium. I am passionate about writing clean code and building systems that are intuitive, reliable, and future-ready.",
    },
  },
  setLang(newLang) {
    this.lang = newLang;
    window.dispatchEvent(new Event("languageChange"));
  },
  get(key) {
    return this.data[this.lang][key];
  },
};

export default strings;
