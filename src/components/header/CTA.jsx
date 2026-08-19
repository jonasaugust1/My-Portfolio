import React from 'react';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t, i18n } = useTranslation();
  const cvFile = i18n.language?.startsWith('pt')
    ? '/Jonas_Augusto_CV_PT.docx'
    : '/JonasAraujoCV.docx';

  return (
    <div>
      <a href={cvFile} aria-label={t('download_cv')} download className='btn'>{t('download_cv')}</a>
      <a href="#contact" aria-label={t('contact')} className='btn btn-primary'>{t('contact')}</a>
    </div>
  );
};

export default CTA;