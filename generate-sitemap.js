const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const { writeFileSync } = require('fs');

const generateSitemap = async () => {
  try {
    const staticLinks = [
      { url: '/', changefreq: 'daily', priority: 1.0 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.8 },
      { url: '/experience', changefreq: 'monthly', priority: 0.8 },
    ];

    const stream = new SitemapStream({ hostname: 'https://www.jonasaugusto.com' });
    const data = await streamToPromise(Readable.from(staticLinks).pipe(stream));

    // Salva na pasta public para o build do React copiar automaticamente
    writeFileSync('./public/sitemap.xml', data.toString());
    console.log('Sitemap gerado com sucesso em ./public/sitemap.xml');
  } catch (error) {
    console.error('Erro ao gerar sitemap:', error);
  }
};

generateSitemap();