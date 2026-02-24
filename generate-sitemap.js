import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'

const sitemap = new SitemapStream({
  hostname: 'https://www.jonasaugusto.com',
})

const writeStream = createWriteStream('./public/sitemap.xml')

sitemap.pipe(writeStream)

sitemap.write({
  url: '/',
  changefreq: 'monthly',
  priority: 1.0,
})

sitemap.end()

streamToPromise(sitemap).then(() => {
  console.log('Sitemap generated successfully.')
})