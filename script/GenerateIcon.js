const path = require('path');
const fs = require('fs');

const iconFiles = fs.readdirSync(path.resolve(__dirname, '../packages/icons'));
const json = JSON.stringify(iconFiles.map((item) => item.split('.').shift()), undefined, 2);
fs.writeFileSync(path.join(__dirname, '../docs/.vuepress/components/icon/rxz-icon.json'), json);
console.log('write rxz-icon.json done!');
