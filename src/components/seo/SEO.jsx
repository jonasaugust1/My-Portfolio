import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = () => {
    const { t, i18n } = useTranslation();

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jonas Augusto",
        "url": "https://jonasaugusto.com/",
        "jobTitle": "Software Engineer",
        "knowsAbout": [".NET", "Flutter", "React", "Azure", "Angular", "MongoDB"],
        "description": t('seo.description'),
        "sameAs": [
            "https://www.linkedin.com/in/jonasaug/",
            "https://github.com/jonasaugust1"
        ]
    };

    return <Helmet>
        <html lang={i18n.language} />

        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />

        <meta property="og:title" content={t('seo.title')} />
        <meta property="og:description" content={t('seo.description')} />
        <meta property="og:locale" content={i18n.language === 'pt' ? 'pt_BR' : 'en_US'} />

        <meta name="twitter:title" content={t('seo.title')} />
        <meta name="twitter:description" content={t('seo.description')} />

        <script type="application/ld+json">
            {JSON.stringify(schemaData)}
        </script>
    </Helmet>
}

export default SEO;