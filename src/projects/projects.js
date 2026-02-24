import comparadorAPI from '../assets/comparadorAPI.webp';
import cdesafetyapp from '../assets/cdesafetyapp.webp';
import jasa from '../assets/jasa.webp';
import xp from '../assets/xp_n1.webp';

export const projects = [
  {
    id: 0,
    title: 'New XP App',
    description: "I contributed to the development of the new XP mobile app, focusing on improving the user experience and optimizing app performance. Working as part of a multidisciplinary team, I helped implement key features such as account management, transaction history, and real-time balance updates. The app was designed to be more intuitive, customizable, and efficient, reflecting XP's commitment to innovation and user satisfaction.",
    image: xp,
    technologies: ['Flutter', '.NET'],
    github: '',
    playStore: 'https://play.google.com/store/apps/details?id=br.com.xp.carteira&hl=pt_BR',
    appStore: 'https://apps.apple.com/br/app/xp-investimentos/id1300713021'
  },
  {
    id: 1,
    title: 'Jasa Reports',
    description: ' Innovative Business Management App Designed to Revolutionize Business Administration.',
    image: jasa,
    technologies: ['Flutter', 'Firebase'],
    github: ''
  },
  {
    id: 2,
    title: 'API Comparer',
    description: 'In collaboration with my team to develop an API comparer for Sinqia\'s internal use. This tool enables users to compare two versions of APIs without worrying about exposing confidential files.',
    image: comparadorAPI,
    technologies: ['Razor Pages', 'C#', '.NET Core'],
    github: ''
  },
  {
    id: 3,
    title: 'CDESafety App',
    description: 'Powerful React Native mobile app for an Agricultural Aviation company, enabling streamlined operations, improved safety practices, and easy access to crucial information. The app allows users to generate detailed reports, access client and aircraft data, and obtain certifications. With a user-friendly interface and optimized performance, it enhances workflow processes and empowers employees to excel in their roles.',
    image: cdesafetyapp,
    technologies: ['React Native'],
    github: ''
  },
];