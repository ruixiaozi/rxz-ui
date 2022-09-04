/* eslint-disable prefer-named-capture-group */
const svgtofont = require('svgtofont');
const path = require('path');
const fs = require('fs');

svgtofont({
  src: path.resolve(__dirname, '../packages/icons'),
  dist: path.resolve(__dirname, '../packages/fonts'),
  styleTemplates: path.resolve(__dirname, './rxz-icon-template'),
  fontName: 'rxz-icon',
  css: true,
  startUnicode: 0xea01,
}).then(() => {
  const files = fs.readdirSync(path.join(__dirname, '../packages/fonts'))
    .filter((file) => /.+\.(less|scss|styl|symbol.svg)/u.test(file));
  files.forEach((file) => {
    fs.rmSync(path.join(__dirname, '../packages/fonts/', file));
  });
  fs.copyFileSync(path.join(__dirname, '../packages/fonts/rxz-icon.css'), path.join(__dirname, '../packages/style/rxz-icon.css'));
  fs.rmSync(path.join(__dirname, '../packages/fonts/rxz-icon.css'));
  const cssStr = fs.readFileSync(path.join(__dirname, '../packages/style/rxz-icon.css')).toString();
  const res = cssStr.matchAll(/\.rxz-icon-(.+):before/ug);
  const json = JSON.stringify([...res].map((item) => item[1]), undefined, 2);
  fs.writeFileSync(path.join(__dirname, '../docs/.vuepress/components/icon/rxz-icon.json'), json);
  console.log('done!');
});
