/**
 * CMS CONTENT API ENDPOINT
 * Allows an Admin Dashboard to GET and POST content dynamically.
 */
const fs = require('fs');
const path = require('path');
const dataRegistry = require('../data');

function handleContentApi(req, res, reqUrl) {
  // Extract section name: /api/content/:section
  const parts = reqUrl.split('/');
  const sectionName = parts[3] || 'all';

  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });

    if (sectionName === 'all') {
      res.end(JSON.stringify({ success: true, data: dataRegistry }, null, 2));
      return;
    }

    if (dataRegistry[sectionName]) {
      res.end(JSON.stringify({ success: true, section: sectionName, data: dataRegistry[sectionName] }, null, 2));
      return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: false, error: `Section '${sectionName}' not found` }));
    return;
  }

  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const dataPath = path.join(__dirname, '..', 'data', `${sectionName}.js`);

        if (!fs.existsSync(dataPath)) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: `File data/${sectionName}.js does not exist` }));
          return;
        }

        // Save new content back to data file
        const newFileContent = `/**\n * UPDATED VIA CMS API\n */\nconst ${sectionName} = ${JSON.stringify(payload, null, 2)};\n\nmodule.exports = ${sectionName};\n`;
        fs.writeFileSync(dataPath, newFileContent, 'utf8');

        // Trigger immediate rebuild of HTML pages
        const build = require('../build');
        build();

        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ success: true, message: `Section '${sectionName}' updated and site re-compiled successfully` }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  res.writeHead(405, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Method Not Allowed' }));
}

module.exports = handleContentApi;
