const fs = require('fs');
const path = require('path');

const BACKUP_FILE = path.join(__dirname, '../prompthive_json/vibe_coding_backup.json');
const PROMPTS_DIR = path.join(__dirname, '../prompts');
const README_FILE = path.join(__dirname, '../README.md');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function sync() {
  console.log('Starting synchronization...');

  if (!fs.existsSync(BACKUP_FILE)) {
    console.error(`Backup file not found at ${BACKUP_FILE}`);
    return;
  }

  const data = JSON.parse(fs.readFileSync(BACKUP_FILE, 'utf8'));
  const prompts = data.prompts;
  const collections = data.definedCollections;

  const collectionMap = {};
  collections.forEach(c => {
    collectionMap[c.id] = c.title;
  });

  // Ensure prompts directory exists
  if (!fs.existsSync(PROMPTS_DIR)) {
    fs.mkdirSync(PROMPTS_DIR);
  }

  // Clear existing prompts
  fs.readdirSync(PROMPTS_DIR).forEach(file => {
    fs.unlinkSync(path.join(PROMPTS_DIR, file));
  });

  const promptsByCollection = {};

  prompts.forEach(p => {
    // Get latest version
    const latestVersion = p.versions.reduce((prev, current) => {
      return (prev.versionNumber > current.versionNumber) ? prev : current;
    });

    const slug = slugify(p.title);
    const filename = `${slug}_v${latestVersion.versionNumber}.md`;
    const filepath = path.join(PROMPTS_DIR, filename);

    // Write prompt file
    fs.writeFileSync(filepath, latestVersion.content);
    console.log(`Created: ${filename}`);

    // Map to collections for README
    p.collectionIds.forEach(cid => {
      const cname = collectionMap[cid] || 'Uncategorized';
      if (!promptsByCollection[cname]) {
        promptsByCollection[cname] = [];
      }
      promptsByCollection[cname].push({
        title: p.title,
        description: p.description.replace(/\r?\n/g, ' '),
        version: `v${latestVersion.versionNumber}`,
        filename: filename
      });
    });
  });

  // Update README.md
  let readmeContent = fs.readFileSync(README_FILE, 'utf8');

  // We want to replace the sections between "## 📂 Prompt Collection" and "## 🚀 How to Use"
  const startMarker = '## 📂 Prompt Collection';
  const endMarker = '## 🚀 How to Use';

  const startIndex = readmeContent.indexOf(startMarker);
  const endIndex = readmeContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.error('Markers not found in README.md');
    return;
  }

  let newCollectionSection = `${startMarker}\n\nThe prompts are located in the \`prompts/\` directory.\n\n`;

  // Define order of collections to match existing README or be logical
  const order = [
    '🚀 Project Initialization',
    '💻 Development & Changes',
    '🐞 QA & Testing',
    '♻️ Review & Refactoring',
    '📄 Documentation',
    '📦 Release & Deployment',
    '🧠Agent / Agent skills',
    'Skill management'
  ];

  order.forEach(cname => {
    if (promptsByCollection[cname]) {
      newCollectionSection += `### ${cname.replace(/^[^a-zA-Z0-9]*/, '').trim()}\n`;
      newCollectionSection += `| Prompt Name | Description | Version |\n`;
      newCollectionSection += `| :--- | :--- | :--- |\n`;
      
      // Sort prompts by title within collection
      promptsByCollection[cname].sort((a, b) => a.title.localeCompare(b.title));

      promptsByCollection[cname].forEach(p => {
        newCollectionSection += `| **[${p.title}](prompts/${p.filename})** | ${p.description} | ${p.version} |\n`;
      });
      newCollectionSection += `\n`;
    }
  });

  // Handle any other collections not in the preferred order
  Object.keys(promptsByCollection).forEach(cname => {
    if (!order.includes(cname)) {
      newCollectionSection += `### ${cname}\n`;
      newCollectionSection += `| Prompt Name | Description | Version |\n`;
      newCollectionSection += `| :--- | :--- | :--- |\n`;
      promptsByCollection[cname].forEach(p => {
        newCollectionSection += `| **[${p.title}](prompts/${p.filename})** | ${p.description} | ${p.version} |\n`;
      });
      newCollectionSection += `\n`;
    }
  });

  const updatedReadme = readmeContent.substring(0, startIndex) + newCollectionSection + readmeContent.substring(endIndex);
  fs.writeFileSync(README_FILE, updatedReadme);
  console.log('README.md updated.');
}

sync();
