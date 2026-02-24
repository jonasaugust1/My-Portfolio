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
          "contact-section-title-small": "Contact",
          "contact-section-title": "Send a Message",

          "email": "Email",
          "whatsapp": "WhatsApp",

          "send-email": "Send an email",
          "get-in-touch": "Get in touch",

          "full-name": "Full Name",
          "your-email": "Your Email",
          "your-message": "Your Message",

          "invalid-email": "Please enter a valid email address.",
          "message-success": "Message sent successfully.",
          "send-message-btn": "Send a message",
          "experience-section-title-small": "Technologies I Work With",
          "experience-section-title": "Professional Experience",

          "frontend-development": "Frontend Development",
          "backend-development": "Backend Development",

          "experienced-at": "Experience at {{companies}}",
          "footer-home": "Home",
          "footer-about": "About",
          "footer-experience": "Experience",
          "footer-portfolio": "Portfolio",
          "footer-contact": "Contact",
          "footer-rights": "All rights reserved",
          "portfolio-real-cases": "Real Cases",
          "portfolio-title": "Portfolio",
          "portfolio-other-works": "Other Works",
          "portfolio-projects": "Projects",
          "live-demo": "Live Demo",
          "portfolio": {
            "projects": {
              "xp": {
                "title": "New XP App",
                "description": "I contributed to the development of the new XP mobile app, focusing on improving user experience and optimizing performance. Working within a multidisciplinary team, I helped implement key features such as account management, transaction history, and real-time balance updates. The app was designed to be more intuitive, customizable, and efficient."
              },
              "jasa": {
                "title": "Jasa Reports",
                "description": "Innovative business management application designed to revolutionize business administration processes."
              },
              "apiComparer": {
                "title": "API Comparer",
                "description": "Developed in collaboration with my team for internal use at Sinqia. This tool allows secure comparison between two API versions without exposing confidential files."
              },
              "cdeSafety": {
                "title": "CDESafety App",
                "description": "A powerful React Native mobile application for an agricultural aviation company, enabling streamlined operations, improved safety practices, detailed report generation, and easy access to client and aircraft data."
              },
            },
            "githubProjects": {
              "Jammming": {
                "description": "React web application integrated with the Spotify API, allowing users to search tracks, create custom playlists, and save them directly to their Spotify account."
              },
              "dsmeta": {
                "description": "Fullstack application built with Java and Spring Boot on the backend and React on the frontend."
              },
              "Esports": {
                "description": "Fullstack system composed of a React web app, a Node.js backend with Prisma, and a React Native mobile app for finding gaming partners."
              },
              "FilmesAPI-Dotnet": {
                "description": "REST API developed with C# and .NET to learn API creation and consumption concepts."
              },
              "GeekShopping": {
                "description": "Microservices-based project developed to study distributed system architecture."
              },
              "XamarinApp": {
                "description": "Mobile application developed to practice Xamarin concepts."
              }
            }
          }
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
          "contact-section-title-small": "Contato",
          "contact-section-title": "Envie uma Mensagem",

          "email": "Email",
          "whatsapp": "WhatsApp",

          "send-email": "Enviar email",
          "get-in-touch": "Entrar em contato",

          "full-name": "Nome Completo",
          "your-email": "Seu Email",
          "your-message": "Sua Mensagem",

          "invalid-email": "Por favor, insira um email válido.",
          "message-success": "Mensagem enviada com sucesso.",
          "send-message-btn": "Enviar mensagem",
          "experience-section-title-small": "Tecnologias que Utilizo",
          "experience-section-title": "Experiência Profissional",

          "frontend-development": "Desenvolvimento Frontend",
          "backend-development": "Desenvolvimento Backend",

          "experienced-at": "Experiência na {{companies}}",
          "footer-home": "Início",
          "footer-about": "Sobre",
          "footer-experience": "Experiência",
          "footer-portfolio": "Portfólio",
          "footer-contact": "Contato",
          "footer-rights": "Todos os direitos reservados",
          "portfolio-real-cases": "Casos Reais",
          "portfolio-title": "Portfólio",
          "portfolio-other-works": "Outros Trabalhos",
          "portfolio-projects": "Projetos",
          "live-demo": "Demo Online",
          "portfolio": {
            "projects": {
              "xp": {
                "title": "Novo App XP",
                "description": "Contribuí para o desenvolvimento do novo aplicativo mobile da XP, focando na melhoria da experiência do usuário e otimização de performance. Atuei na implementação de funcionalidades como gestão de contas, histórico de transações e atualização de saldo em tempo real."
              },
              "jasa": {
                "title": "Jasa Reports",
                "description": "Aplicativo inovador de gestão empresarial desenvolvido para transformar processos administrativos."
              },
              "apiComparer": {
                "title": "Comparador de APIs",
                "description": "Ferramenta desenvolvida em colaboração com minha equipe para uso interno na Sinqia, permitindo comparar duas versões de APIs com segurança, sem exposição de arquivos confidenciais."
              },
              "cdeSafety": {
                "title": "CDESafety App",
                "description": "Aplicativo mobile em React Native para empresa de aviação agrícola, permitindo operações mais eficientes, melhoria em práticas de segurança, geração de relatórios detalhados e acesso facilitado a dados de clientes e aeronaves."
              },
            },
            "githubProjects": {
              "Jammming": {
                "description": "Aplicação web em React integrada com a API do Spotify, permitindo buscar músicas, criar playlists personalizadas e salvá-las na conta do usuário."
              },
              "dsmeta": {
                "description": "Aplicação fullstack construída com Java e Spring Boot no backend e React no frontend."
              },
              "Esports": {
                "description": "Sistema fullstack composto por aplicação web em React, backend em Node.js com Prisma e aplicativo mobile em React Native para encontrar parceiros de jogo."
              },
              "FilmesAPI-Dotnet": {
                "description": "API REST desenvolvida com C# e .NET para aprendizado de criação e consumo de APIs."
              },
              "GeekShopping": {
                "description": "Projeto baseado em microserviços desenvolvido para estudo de arquitetura distribuída."
              },
              "XamarinApp": {
                "description": "Aplicação mobile criada para prática e aprendizado de Xamarin."
              }
            }
          }
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;