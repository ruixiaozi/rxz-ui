const fs = require('fs');
const path = require('path');

const declareComponentsPath = path.join(__dirname, '../components.d.ts');
const globalComponentsPath = path.join(__dirname, '../global.d.ts');

const fileContent = fs.readFileSync(declareComponentsPath).toString();

const newContent = fileContent.replace(/import\(.*\)/gu, 'import(\'rxz-ui\')');

fs.writeFileSync(globalComponentsPath, newContent);
