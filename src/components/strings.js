import { nav } from "framer-motion/client";

const strings = {
  lang: "pt",
  data: {
    pt: {
      heroDescription: "Desenvolvedor Full-Stack | Eletrónica & Desenvolvimento em IA",
      copied: "Copiado!",
      navHome: "Início",
      navAbout: "Sobre",
      navCertificates: "Certificados",
      navContact: "Contacto",
      aboutTitle: "Sobre Mim",
      certificatedescript:"Uma seleção dos meus certificados e prémios de diferentes áreas.",
      aboutContent: "Sou David Borges, um programador full-stack com 2 anos de experiência profissional no desenvolvimento de aplicações web e gestão de bases de dados, incluindo sistemas que processavam dados de clientes. Para além do trabalho profissional, realizei estágios e projetos para empresas, bem como trabalhos pessoais e académicos. Estou a concluir a minha licenciatura em Engenharia Informática / Software Development, faltando apenas a disciplina de Matemática, e possuo certificações de Nível 4 e Nível 5 em Tecnologias de Programação, Sistemas de Informação, Eletrónica e Computadores. Tenho também conhecimentos em inteligência artificial e desenvolvimento mobile. Estas qualificações deram origem a uma ampla gama de projetos, desde protótipos de IoT e experiências com IA até aplicações móveis multiplataforma. A minha experiência abrange frontend, backend e gestão de dados, enriquecida por colaborações internacionais em contexto académico com instituições em França, Polónia e Bélgica. Sou apaixonado por escrever código limpo e desenvolver sistemas intuitivos, fiáveis e preparados para o futuro.",
      contactText: "Interessado em trabalhar junto? Entra em contacto!",
      certificatetitle1: "Certificados",
      certificatetitle2: "& Reconhecimento",
      contacttitle1: "VAMOS",
      contacttitle2: "FALAR",
      worktitle: "Portfólio",
      worktitleWEB: "Desenvolvimento Web",
      worktitleAI: "Projetos de IA",
      worktitleMobile: "Aplicações Móveis",
      worktitleDesign: "Designs",
      worktitleBackend: "Projetos de Backend",
      worktitleIoT: "IoT Projetos Inteligentes",

      // DESCRIÇÃO dos projetos
      aiaerialview: "Uma aplicação que treina uma rede neural para gerar uma máscara de uma imagem aérea",
      aiimagegeneration: "Um projeto com Comfyui e Stable Difusion treinado para gerar imagens de mim mesmo.", 
      airobot1: "Robô de IA que usa IA para calcular o caminho que deve seguir, pela diferença de cores e iluminação refletida no chão. (seguindo uma linha branca) Convidado para a Universidade de Lodz na Polónia",
      // DESCRIÇÃO dos projetos web
      oportocenter: "Uma aplicação web para gerir um centro comercial, incluindo um diretório de lojas, calendário de eventos e sistema de feedback dos clientes.",
      wondererDesignWebsite: "Um site de portfólio pessoal que exibe meus projetos de design, construído com React, Tailwind CSS e phpMySQL para o backend.",
      davidnekaPortfolio: "Meu site de portfólio pessoal, construído com React e Tailwind CSS, apresentando meus projetos, habilidades e informações de contato.",
      // DESCRIÇÃO dos projetos mobile
      parkkingApp: "Aplicativo de estacionamento que permite aos usuários encontrar e reservar vagas em tempo real, com integração de mapas e notificações desenvolvido em flutter.",
      BirdHuntGame: "Jogo de caça de pássaros desenvolvido em Unity com C# e gráficos 2D, publicado na playstore (Atualmente Desativado).",
      // DESCRIÇÃO dos projetos design
      parkkingAppDesign: "Design do aplicativo de estacionamento, focado na usabilidade e estética, utilizando Figma.",
      GlobalBitesDesign: "Design de uma plataforma tipo forum de alimentos e comidas por todo o mundo, com foco na experiência do usuário e na interface, utilizando Figma.",
      SpeetCartAppWebDesign: "Design de um aplicativo web de marcação de corridas de carts, e outros eventos de velocidade, com foco na experiência do usuário e na interface, utilizando Figma.",
      campusSchoolLinkDesign: "Design de um aplicativo escolar para uma escola, com foco na experiência do usuário e na interface para uma melhor experiencia e organização de sistemas escolares horarios e uploads",
      // DESCRIÇÃO dos projetos backend
      oracleubuntuServer: "Servidor Ubuntu configurado com Oracle Database para gerenciar dados de clientes, diversas apis e transações, com foco em segurança e eficiência.",
      fishpondmonitoringSystem: "Infraestrutura de monitoramento de lagos desenvolvido com, permitindo o controle remoto de parâmetros da água e notificações em tempo real, para communidades pobres de Africa Uganda, Projeto pela universidade de Antuerpia Belgica.",
      DatabseOportocenter: "Banco de dados para o Oporto Center, projetado para gerenciar informações de clientes, reservas, com foco em escalabilidade e segurança.", 
      // DESCRIÇÃO dos projetos IoT
      mqttZsuporteofficecompany: "Sistema de monitoramento de escritório inteligente usando MQTT e Node-red para controlar luzes, temperatura e segurança geral dos escritorios da empresa Zsuporte, com integração de sensores IoT.",
      MultipleIOTDevices: "Varios Projetos e prototipos ao longo de varios anos, com foco em automação residencial e controle de dispositivos IoT, utilizando ESP32, Raspberry Pi, Arduino e outros microcontroladores.",
      HinaProject: "Projeto de automação residencial com Hina, um projeto que usa uma simulação 3D no mundo real, de uma assistente virtual 3D, utilizando Arduino e sensores para controle de iluminação, temperatura e segurança, com foco em eficiência energética e conforto (Smart Housing).",
    
      // Certificados
      certificatetitle1: "Certificados &",
      certificatetitle2: "Prémios",
      item1_title: "Menção Honrosa Gondomar",
      item1_issuer: "Representação da câmara Municipal de Gondomar",
      item1_typeText: "Prémio",

      item2_title: "InCode 2030",
      item2_issuer: "Evento Incode 2030 de exposições",
      item2_typeText: "Convite de participação incode 2030",

      item3_title: "Certificados de representação escolar nacionalmente",
      item3_issuer: "AERT3",
      item3_typeText: "Prémio",

      item4_title: "Lisboa paptice competition internacional",
      item4_issuer: "Projeto Hina (Smart Housing com assistente virtual, IOT e soluções de IA) com CEO da empresa .PT (PORTUGAL TELECOM)",
      item4_typeText: "Prémio",

      item5_title: "Curso de eletricidade eletronica e automação nivel 4",
      item5_issuer: "AERT3",
      item5_typeText: "Diploma",

      item6_title: "nivel 5 tecnologias de programação e sistemas de informação",
      item6_issuer: "Cinel",
      item6_typeText: "Certificado",

      item7_title: "Ispgaya Licenciatura Engenharia Informática",
      item7_issuer: "De momento a acabar licenciatura faltando apenas matematica, em Engenharia informática",
      item7_typeText: "Certificado",

      item8_title: "Projeto na universidade de Lodz Polónia",
      item8_issuer: "Selecionado através de um processo seletivo para representar a minha universidade num projeto internacional na Polónia, com IA e IOT",
      item8_typeText: "Certificado",

      item9_title: "Projeto na universidade de Antuerpia Bélgica",
      item9_issuer: "Selecionado através de um processo seletivo para representar a minha universidade num projeto internacional na Bélgica, com infraestrutura de IOT e analise de dados, para comunidades pobres na Uganda Africa",
      item9_typeText: "Certificado",

      item10_title: "Projeto na universidade de Lens, França",
      item10_issuer: " Selecionado através de um processo seletivo para representar a minha universidade num projeto internacional na Lens, França, para uma aplicative web / mobile",
      item10_typeText: "Certificado",
    },
    en: {
      heroDescription: "Full-Stack Developer | Electronics & AI Development",
      copied: "Copied!",
      navHome: "Home",
      navAbout: "About",
      navCertificates: "Certificates",
      navContact: "Contact",
      aboutTitle: "About Me",
      certificatedescript:"A selection of my certificates and awards from different fields.",
      aboutContent: "I’m David Borges, a full-stack developer with 2 years of professional experience in web application development and database management, including systems that processed client data. In addition to professional work, I have completed internships and projects for companies, as well as personal and academic work. I am currently finishing my Bachelor’s degree in Computer Engineering / Software Development, with only Mathematics pending, and hold Level 4 and Level 5 certifications in Programming Technologies, Information Systems, Electronics, and Computers. I also have knowledge in artificial intelligence and mobile development. These qualifications have led to a wide range of projects, from IoT prototypes and AI experiments to cross-platform mobile applications. My experience spans frontend, backend, and data management, enriched by academic collaborations with institutions in France, Poland, and Belgium. I am passionate about writing clean code and building systems that are intuitive, reliable, and future-ready.",
      certificatetitle1: "Certificates ",
      certificatetitle2: "& Recognition",
      contactText: "Interested in working together? Get in touch!",
      contacttitle1: "LETS",
      contacttitle2: "TALK",
      worktitle: "Portfolio",
      worktitleWEB: "Web Development",
      worktitleAI: "AI Projects",
      worktitleMobile: "Mobile Apps",
      worktitleDesign: "Designs",
      worktitleBackend: "Backend Projects",
      worktitleIoT: "IoT Smart Projects",

      //DESCRIPTION projetos AI
      aiaerialview: "A aplication that trains a neural network to generate a mask of an aerial view image",
      aiimagegeneration: "A project with Comfyui and Stable Difusion trained to generate images of myself.",
      airobot1: "AI robot that uses ai to calculate the path it must follow, by the difference colors and lighting on reflected on the floor. (ultimately following a white line) Invited to University of Lodz Poland",
      // DESCRIÇÃO dos projetos web´
      oportocenter: "A web application for managing a shopping center, including a store directory, event calendar, and customer feedback system.",
      wondererDesignWebsite: "A personal portfolio website showcasing my design projects, built with React, Tailwind CSS and phpMySQL for the backend.",
      davidnekaPortfolio: "My personal portfolio website, built with React and Tailwind CSS, featuring my projects, skills, and contact information.",
      // DESCRIÇÃO dos projetos mobile
      parkkingApp: "Parking app that allows users to find and book parking spots in real-time, with map integration and notifications developed in flutter.",
      BirdHuntGame: "Bird hunting game developed in Unity with C# and 2D graphics, published on the playstore (Currently Disabled).",
      // DESCRIÇÃO dos projetos design
      parkkingAppDesign: "Design of the parking app, focusing on usability and aesthetics, using Figma.",
      GlobalBitesDesign: "Design of a food and cuisine forum platform from around the world, focusing on user experience and interface, using Figma.",
      SpeetCartAppWebDesign: "Design of a web app for booking carts, and other speed events, focusing on user experience and interface, using Figma.",
      campusSchoolLinkDesign: "Design of a school app for a school, focusing on user experience and interface for better experience and organization of school systems schedules and uploads.",
      // DESCRIÇÃO dos projetos backend
      oracleubuntuServer: "Ubuntu server configured with Oracle Database to manage client data, various APIs, and transactions, focusing on security and efficiency.",
      fishpondmonitoringSystem: "Fish pond monitoring infrastructure developed with, allowing remote control of water parameters and real-time notifications, for poor communities in Uganda Africa, Project by University of Antwerp Belgium.",
      DatabseOportocenter: "Database for Oporto Center, designed to manage customer information, bookings, with a focus on scalability and security.",
      // DESCRIÇÃO dos projetos IoT
      mqttZsuporteofficecompany: "Smart office monitoring system using MQTT and Node-red to control lights, temperature, and overall security of Zsuporte company offices, with IoT sensor integration.",
      MultipleIOTDevices: "Various projects and prototypes over the years, focusing on home automation and IoT device control, using ESP32, Raspberry Pi, Arduino, and other microcontrollers.",
      HinaProject: "Home automation project with Hina, a project that uses a 3D simulation in the real world, of a 3D virtual assistant, using Arduino and sensors to control lighting, temperature, and security, focusing on energy efficiency and comfort (Smart Housing).", 

      //Certificates
      certificatetitle1: "Certificates &",
      certificatetitle2: "Awards",
      item1_title: "Honorable Mention Gondomar",
      item1_issuer: "Representation of municipality of Gondomar",
      item1_typeText: "Award",

      item2_title: "InCode 2030",
      item2_issuer: "Event Incode 2030 with expositions",
      item2_typeText: "InCode 2030 Participation Invitation",

      item3_title: "National School Representation Certificates",
      item3_issuer: "AERT3",
      item3_typeText: "Certificate",

      item4_title: "Lisbon international paptice competition",
      item4_issuer: "Hina Project (Smart Housing with virtual assistant, IOT and AI solutions) with CEO of .PT (PORTUGAL TELECOM)",
      item4_typeText: "Award",

      item5_title: "Level 4 Electronics, Automation and Electricity Course",
      item5_issuer: "AERT3",
      item5_typeText: "Diploma",

      item6_title: "level 5 tecnologies of programming and sistems of information",
      item6_issuer: "Cinel",
      item6_typeText: "Certificate",

      item7_title: "Ispgaya Bachelor's Degree in Software Engineering",
      item7_issuer: "Currently finishing my Bachelor's degree with only Mathematics pending, in Software Engineering",
      item7_typeText: "Certificate",

      item8_title: "Project in university of Lodz Poland",
      item8_issuer: "Selected trough a selective process to represent my university in an international project in Poland, with AI and IoT",
      item8_typeText: "Certificate",

      item9_title: "Project in university of Antwerp Belgium",
      item9_issuer: "Selected trough a selective process to represent my university in an international project in Belgium, with IoT infrastructure and data analysis, for poor communities in Uganda Africa",
      item9_typeText: "Certificate",

      item10_title: "Project in university of Lens France",
      item10_issuer: "Selected trough a selective process to represent my university in an international project in Lens, France, for a web/mobile application",
      item10_typeText: "Certificate",
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
