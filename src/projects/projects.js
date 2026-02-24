import comparadorAPI from '../assets/comparadorAPI.webp';
import cdesafetyapp from '../assets/cdesafetyapp.webp';
import jasa from '../assets/jasa.webp';
import xp from '../assets/xp_n1.webp';

export const projects = [
  {
    id: 0,
    title: 'portfolio.projects.xp.title',
    description: 'portfolio.projects.xp.description',
    image: xp,
    technologies: ['Flutter', '.NET'],
    github: '',
    playStore: 'https://play.google.com/store/apps/details?id=br.com.xp.carteira&hl=pt_BR',
    appStore: 'https://apps.apple.com/br/app/xp-investimentos/id1300713021'
  },
  {
    id: 1,
    title: 'portfolio.projects.jasa.title',
    description: 'portfolio.projects.jasa.description',
    image: jasa,
    technologies: ['Flutter', 'Firebase'],
    github: ''
  },
  {
    id: 2,
    title: 'portfolio.projects.apiComparer.title',
    description: 'portfolio.projects.apiComparer.description',
    image: comparadorAPI,
    technologies: ['Razor Pages', 'C#', '.NET Core'],
    github: ''
  },
  {
    id: 3,
    title: 'portfolio.projects.cdeSafety.title',
    description: 'portfolio.projects.cdeSafety.description',
    image: cdesafetyapp,
    technologies: ['React Native'],
    github: ''
  },
];