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
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;