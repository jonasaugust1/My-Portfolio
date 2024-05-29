import comparadorAPI from '../assets/comparadorAPI.webp';
import cdesafetyapp from '../assets/cdesafetyapp.webp';
import jasa from '../assets/jasa.webp';

export const projects = [
  {
    id: 0,
    title: 'Jasa Reports',
    description: ' Innovative Business Management App Designed to Revolutionize Business Administration.',
    image: jasa,
    technologies: ['Flutter', 'Firebase'],
    github: 'https://play.google.com/store/apps/details?id=com.techmob.jasa'
  },
  {
    id: 1,
    title: 'API Comparer',
    description: 'In collaboration with my team to develop an API comparer for Sinqia\'s internal use. This tool enables users to compare two versions of APIs without worrying about exposing confidential files.',
    image: comparadorAPI,
    technologies: ['Razor Pages', 'C#', '.NET Core'],
    github: ''
  },
  {
    id: 2,
    title: 'CDESafety App',
    description: 'Powerful React Native mobile app for an Agricultural Aviation company, enabling streamlined operations, improved safety practices, and easy access to crucial information. The app allows users to generate detailed reports, access client and aircraft data, and obtain certifications. With a user-friendly interface and optimized performance, it enhances workflow processes and empowers employees to excel in their roles.',
    image: cdesafetyapp,
    technologies: ['React Native'],
    github: ''
  },
];