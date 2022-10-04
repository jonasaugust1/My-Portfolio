import React from 'react';
import CV from '../../assets/JonasAugustoCV.pdf';

const CTA = () => {
  return (
    <div>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Get in touch</a>
    </div>
  );
};

export default CTA;