import React from 'react';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div>
      <a href="/JonasAraujoCV.docx" aria-label='Download CV' download className='btn'>Download CV</a>
      <a href="#contact" aria-label={t('contact')} className='btn btn-primary'>{t('contact')}</a>
    </div>
  );
};

export default CTA;