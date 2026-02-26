import React, { Suspense, lazy } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import SEO from './components/seo/SEO';
import { HelmetProvider } from 'react-helmet-async';
import Skeleton from './components/skeleton/Skeleton';

const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));

const App = () => {

  return (
    <HelmetProvider>
      <SEO />
      <Header />
      <Nav />
      <main>
        <About />
        <Experience />
        <Suspense fallback={<Skeleton />}>
          <Portfolio />
        </Suspense>
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default App;