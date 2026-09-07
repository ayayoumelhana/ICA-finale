/**
 * INTELLIQUEST CANADA ACADEMY (ICA) - STATIC SITE & CMS COMPILER
 * Zero-dependency, ultra-fast builder that compiles modular components + centralized data into pristine HTML pages.
 */
const fs = require('fs');
const path = require('path');

const data = require('./data');
const pages = require('./pages');

function build() {
  const startTime = Date.now();
  console.log('🚀 Starting ICA CMS-Ready Template Build...');

  const outputFiles = [
    {
      file: 'index.html',
      render: () => pages.HomePage({
        siteConfig: data.siteConfig,
        homeData: data.homeData
      })
    },
    {
      file: 'etudes.html',
      render: () => pages.EtudesPage({
        siteConfig: data.siteConfig,
        etudeData: data.etudeData,
        testimonialsData: data.testimonialsData
      })
    },
    {
      file: 'formations.html',
      render: () => pages.FormationsPage({
        siteConfig: data.siteConfig,
        formationData: data.formationData
      })
    },
    {
      file: 'contact.html',
      render: () => pages.ContactPage({
        siteConfig: data.siteConfig,
        contactData: data.contactData
      })
    },
    {
      file: 'temoignages.html',
      render: () => pages.TemoignagesPage({
        siteConfig: data.siteConfig,
        testimonialsData: data.testimonialsData
      })
    }
  ];

  let totalSize = 0;

  outputFiles.forEach(({ file, render }) => {
    const filePath = path.join(__dirname, file);
    try {
      const htmlContent = render();
      fs.writeFileSync(filePath, htmlContent, 'utf8');
      const stats = fs.statSync(filePath);
      totalSize += stats.size;
      console.log(`  ✓ Built ${file.padEnd(18)} (${(stats.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  ✗ Error building ${file}:`, err);
    }
  });

  const duration = Date.now() - startTime;
  console.log(`✨ Build completed in ${duration}ms! Total size: ${(totalSize / 1024).toFixed(1)} KB`);
}

// Export for programmatic use in CMS API / server.js
module.exports = build;

// Run directly if executed via CLI (node build.js)
if (require.main === module) {
  build();
}
