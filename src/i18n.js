import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "greeting-intro": "Jonas Augusto — Software Engineer",
          "greeting-info": "Designing backends, frontends & mobile applications",
          "greeting-info2": "Cloud-ready • API-driven • Performance-focused",
          "greeting-conclusion": "Turning complex problems into elegant solutions",
          "contact": "Get in touch",
          "scroll-down": "Scroll Down",
          "get-to-know-me": "Get to Know Me",
          "about-me": "About Me",
                "experience": "Experience",
          "work": "Work",
          "projects": "Projects",
          "years": "4 years",
          "projects-count": "+90 Projects",

          "about-description": "From an early age, I have been fascinated by the ability of technology to transform the world around us. I chose to become a software developer because I believe in the power of creating solutions that positively impact the lives of millions of people. The possibility of streamlining daily life and accelerating processes motivates me with every line of code I write.\n\nMy journey in software development is driven by the desire to break patterns and discover new ways of building things. Contributing to innovative projects fuels my passion, and I am constantly seeking opportunities to apply my skills to initiatives that truly make a difference.\n\nFeel free to reach out to discuss collaboration opportunities, networking, or simply to exchange ideas about the exciting world of software development. Let’s build something amazing together!",

        }
      },
      pt: {
        translation: {
          "greeting-intro": "Jonas Augusto — Engenheiro de Software",
          "greeting-info": "Designing backends, frontends & aplicações mobile",
          "greeting-info2": "Preparado para Cloud • Orientado a APIs • Focado em Performance",
          "greeting-conclusion": "Transformando problemas complexos em soluçoes elegantes",
          "contact": "Entre em contato",
          "scroll-down": "Role para baixo",
          "get-to-know-me": "Conheça",
          "about-me": "Sobre Mim",
          "experience": "Experiência",
          "work": "Trabalho",
          "projects": "Projetos",
          "years": "4 anos",
          "projects-count": "+90 Projetos",

          "about-description": "Desde cedo, sempre fui fascinado pela capacidade da tecnologia de transformar o mundo ao nosso redor. Escolhi me tornar desenvolvedor de software porque acredito no poder de criar soluções que impactam positivamente a vida de milhões de pessoas. A possibilidade de otimizar o dia a dia e acelerar processos me motiva a cada linha de código que escrevo.\n\nMinha jornada no desenvolvimento é guiada pelo desejo de quebrar padrões e encontrar novas formas de construir soluções. Contribuir para projetos inovadores é o que me impulsiona, e estou sempre em busca de oportunidades para aplicar minhas habilidades em iniciativas que realmente façam a diferença.\n\nSinta-se à vontade para entrar em contato para discutirmos oportunidades de colaboração, networking ou simplesmente trocar ideias sobre o fascinante mundo do desenvolvimento de software. Vamos construir algo incrível juntos!",
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;