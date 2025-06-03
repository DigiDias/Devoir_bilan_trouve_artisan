const fs = require('fs');
const path = require('path');

function searchHttpInRoutes(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      searchHttpInRoutes(fullPath);
    } else if (file.endsWith('.js')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const lines = content.split('\n');
      lines.forEach((line, i) => {
        if (line.includes('http')) {
          console.log(`${fullPath} [ligne ${i+1}]: ${line.trim()}`);
        }
      });
    }
  }
}

// Lancer la recherche dans le dossier courant (backend)
searchHttpInRoutes(__dirname);
