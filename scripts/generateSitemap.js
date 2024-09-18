const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Generate sitemap
const generateSitemap = async () => {
  // Define all routes
  const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/PrivacyPolicy', changefreq: 'monthly', priority: 0.7 },
    { url: '/Native-Mobile-App-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Cross-Platform-App-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/About-Us', changefreq: 'monthly', priority: 0.7 },
    { url: '/Why-Choose-Us', changefreq: 'monthly', priority: 0.7 },
    { url: '/Blogs', changefreq: 'monthly', priority: 0.7 },
    { url: '/Blog/:blogTitle', changefreq: 'monthly', priority: 0.7 },
    { url: '/Contact-Us', changefreq: 'monthly', priority: 0.7 },
    { url: '/Affiliate-Website', changefreq: 'monthly', priority: 0.7 },
    { url: '/Android-Application-Development-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/Hybrid-Application-Development-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/Mobile-App-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/App-Backend-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Flutter-App-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/React-Native-App-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Mobile-App-Testingand-Testing-Quality-Assurance', changefreq: 'monthly', priority: 0.7 },
    { url: '/IOS-Application-Development-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/Search-Engine-Optimization', changefreq: 'monthly', priority: 0.7 },
    { url: '/Pay-Per-Click-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/Social-Media-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/Google-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/Facebook-&-Instagram-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/Content-Marketing', changefreq: 'monthly', priority: 0.7 },
    { url: '/Social-Media-Marketing', changefreq: 'monthly', priority: 0.7 },
    { url: '/Email-Marketing', changefreq: 'monthly', priority: 0.7 },
    { url: '/Analytics-and-Reporting', changefreq: 'monthly', priority: 0.7 },
    { url: '/Website-Traffic-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/E-Commerce-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/App-Install-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/Android-App-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/IOS-App-Advertising', changefreq: 'monthly', priority: 0.7 },
    { url: '/E-Commerce-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/FrontEnd-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Backend-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/FullStack-Development-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/Blog-or-Personal-Website', changefreq: 'monthly', priority: 0.7 },
    { url: '/Business-Website', changefreq: 'monthly', priority: 0.7 },
    { url: '/E-commerce-Website-Online-Store', changefreq: 'monthly', priority: 0.7 },
    { url: '/Online-Courses', changefreq: 'monthly', priority: 0.7 },
    { url: '/Podcast-Website', changefreq: 'monthly', priority: 0.7 },
    { url: '/JobBoard-Website', changefreq: 'monthly', priority: 0.7 },
    { url: '/Portfolio-Websites', changefreq: 'monthly', priority: 0.7 },
    { url: '/Travel-Website', changefreq: 'monthly', priority: 0.7 },
    { url: '/Fashion-Life-style-Website', changefreq: 'monthly', priority: 0.7 },
    { url: '/Mobile-App-UIUX-Design-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/Android-App-UIUX-Design-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/UIUX-Design-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/ISO-UIUX-Design-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/Website-UIUX-Design-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/ReactJs-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Nextjs-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Vuejs-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/ReactNative-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Angular-Dvelopment', changefreq: 'monthly', priority: 0.7 },
    { url: '/Nodejs', changefreq: 'monthly', priority: 0.7 },
    { url: '/Laravel', changefreq: 'monthly', priority: 0.7 },
    { url: '/Python', changefreq: 'monthly', priority: 0.7 },
    { url: '/API-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Database-Designand-Management', changefreq: 'monthly', priority: 0.7 },
    { url: '/Server-Architecture-and-Configuration', changefreq: 'monthly', priority: 0.7 },
    { url: '/Cloud-Services-Integration-SAP-Industry-Solutions', changefreq: 'monthly', priority: 0.7 },
    { url: '/Backend-Framework-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Web-Application-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Mobile-Backend-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Real-TimeData-Processing', changefreq: 'monthly', priority: 0.7 },
    { url: '/Performance-Optimization', changefreq: 'monthly', priority: 0.7 },
    { url: '/Integration-with-Third-Party-Services', changefreq: 'monthly', priority: 0.7 },
    { url: '/DevOps-and-Continuous-Integration', changefreq: 'monthly', priority: 0.7 },
    { url: '/Azure', changefreq: 'monthly', priority: 0.7 },
    { url: '/Aws', changefreq: 'monthly', priority: 0.7 },
    { url: '/Google-Cloud', changefreq: 'monthly', priority: 0.7 },
    { url: '/PopupOption', changefreq: 'monthly', priority: 0.7 },
    { url: '/App-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Cloud-Solutions', changefreq: 'monthly', priority: 0.7 },
    { url: '/Digital-Marketing', changefreq: 'monthly', priority: 0.7 },
    { url: '/Website-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/Word-Press-Development', changefreq: 'monthly', priority: 0.7 },
    { url: '/UIUX-Design', changefreq: 'monthly', priority: 0.7 },
  ];

  // Initialize sitemap stream
  const sitemap = new SitemapStream({ hostname: 'https://www.easyryt.com/' });

  // Add static routes to the sitemap
  staticRoutes.forEach(route => {
    sitemap.write(route);
  });

  // End sitemap stream
  sitemap.end();

  // Convert stream to promise and write to file
  const sitemapOutput = await streamToPromise(sitemap).then(sm => sm.toString());
  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemapOutput);

  console.log('Sitemap generated successfully.');
};

// Execute sitemap generation
generateSitemap();
