const fs = require('fs');
const path = require('path');

// const __currentDir = process.cwd();
const [, , __currentDir, cmd, param, ...options] = process.argv;
console.log(__currentDir);

function toLowerCamelCase(str) {
  return str.replace(/^[A-Z]/, (first) => first.toLowerCase());
}

const tsTpl = (name, version = '2.0.0', des = '') =>
  `/**
 * ${name}
 * @description: ${des || name}
 * @author: ruixiaozi
 * @since: ${version}
 */
import { definePropsUtil, defineEmitsUtil } from '@/utils';

export default {
  ${toLowerCamelCase(name)}Props: definePropsUtil({

  }),
  ${toLowerCamelCase(name)}Emits: defineEmitsUtil({

  }),
};

`;

const vueTpl = (name) => `<template>
  <div>${name}</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import define from './${name}.define';
defineProps(define.${toLowerCamelCase(name)}Props);
defineEmits(define.${toLowerCamelCase(name)}Emits);

</script>

<style lang="scss" scoped>
@import "./${name}.scss";
</style>
`;

const indexTpl = (name, ) =>
  `import _${name} from './${name}.vue';
export const ${name} = _${name};
export * from './${name}.define';

`;



const createFileSuccess = (filePath) => {
  console.log(`create file ${filePath} success.`);
};

const updateFileSuccess = (filePath) => {
  console.log(`update file ${filePath} success.`);
};

function insertStrNextLine(source, searchStr, str) {
  let inx = source.lastIndexOf(searchStr);

  if (inx === -1) {
    console.error('no find');
    return source;
  }
  const endLineIndex = source.substring(inx).indexOf('\n');
  if (endLineIndex === -1) {
    console.error('no find endline');
    return source;
  }
  inx += endLineIndex + 1;
  return `${source.substring(0, inx) + str}\n${source.substring(inx)}`;
}


function generateComponent(name, version = '2.0.0', des = '') {
  const dir = path.join(__currentDir, name);
  const scssPath = path.join(dir, `${name}.scss`);
  const tsPath = path.join(dir, `${name}.define.ts`);
  const vuePath = path.join(dir, `${name}.vue`);
  const indexPath = path.join(dir, 'index.ts');
  const parentIndexPath = path.join(__currentDir, 'index.ts');

  if (!fs.existsSync(parentIndexPath)) {
    console.log('parent index is not exist');
    return;
  }

  if (fs.existsSync(scssPath)) {
    console.log('component is exist');
    return;
  }

  fs.mkdirSync(dir);
  fs.writeFileSync(scssPath, '');
  createFileSuccess(scssPath);
  fs.writeFileSync(tsPath, tsTpl(name, version, des));
  createFileSuccess(tsPath);
  fs.writeFileSync(vuePath, vueTpl(name));
  createFileSuccess(vuePath);
  fs.writeFileSync(indexPath, indexTpl(name));
  createFileSuccess(indexPath);

  // 添加导出到父index
  const res = fs.readFileSync(parentIndexPath).toString();
  let nRes = insertStrNextLine(res, 'import { ', `import { ${name} } from './${name}';`);
  nRes = insertStrNextLine(nRes, 'export *', `export * from './${name}';`);
  nRes = insertStrNextLine(nRes, ' = [', `  ${name},`);
  fs.writeFileSync(parentIndexPath, nRes);
  updateFileSuccess(parentIndexPath);

  // 写入声明
  const cntDeclarePath = path.join(__dirname, '../components.d.ts');
  const declareRes = fs.readFileSync(cntDeclarePath).toString();
  let nDeclareRes = insertStrNextLine(
    declareRes,
    'GlobalComponents {',
    `    ${name}: typeof import('./packages/index')['${name}'],`,
  );
  fs.writeFileSync(cntDeclarePath, nDeclareRes);
  updateFileSuccess(cntDeclarePath);
}


const docVueTpl = (name) => `<template>
  <div>${name}</div>
</template>

<script setup lang="ts">
defineProps<{

}>();
defineEmits<{

}>();

</script>

<style lang="scss" scoped>

</style>
`;


function generateDocComponent(name, version = '2.0.0', des = '') {
  const vuePath = path.join(__currentDir, `${name}.vue`);
  const docComponentIndex = path.join(__dirname, '../docs/.vuepress/components/index.ts');

  if (!fs.existsSync(docComponentIndex)) {
    console.log('docComponentIndex is not exist');
    return;
  }

  fs.writeFileSync(vuePath, docVueTpl(name));
  createFileSuccess(vuePath);

  // 添加导出到doc index
  const res = fs.readFileSync(docComponentIndex).toString();
  let nRes = insertStrNextLine(res, 'import ', `import ${name} from '${path.relative(docComponentIndex, vuePath).replace(/\\/ug, '/').replace('..', '.')}';`);
  nRes = insertStrNextLine(nRes, ' = [', `  ${name},`);
  fs.writeFileSync(docComponentIndex, nRes);
  updateFileSuccess(docComponentIndex);
}

const useTsTpl = (name, version = '2.0.0', des = '') =>
  `/**
 * use${name}
 * @description: ${des || name}
 * @author: ruixiaozi
 * @since: ${version}
 */

export function use${name}() {
  return {

  };
}
`;

function generateUse(name, version = '2.0.0', des = '') {
  const dir = path.join(__currentDir);
  const usePath = path.join(dir, `use${name}.ts`);
  const indexPath = path.join(dir, 'index.ts');

  if (fs.existsSync(usePath)) {
    console.log('use is exist');
    return;
  }

  fs.writeFileSync(usePath, useTsTpl(name, version, des));
  createFileSuccess(usePath);

  const res = fs.readFileSync(indexPath).toString();
  fs.writeFileSync(indexPath, `${res}export * from './use${name}';\n`);
  updateFileSuccess(indexPath);
}

const utilTsTpl = (name, version = '2.0.0', des = '') =>
  `/**
 * ${name}
 * @description: ${des || name}
 * @author: ruixiaozi
 * @since: ${version}
 */


`;

function generateUtil(name, version = '2.0.0', des = '') {
  const dir = path.join(__currentDir);
  const utilPath = path.join(dir, `${name}.ts`);
  const indexPath = path.join(dir, 'index.ts');

  if (fs.existsSync(utilPath)) {
    console.log('utilPath is exist');
    return;
  }

  fs.writeFileSync(utilPath, utilTsTpl(name, version, des));
  createFileSuccess(utilPath);

  const res = fs.readFileSync(indexPath).toString();
  fs.writeFileSync(indexPath, `${res}export * from './${name}';\n`);
  updateFileSuccess(indexPath);
}

const propTsTpl = (name, version = '2.0.0', des = '') =>
  `/**
 * $${name}
 * @description: ${des || name}
 * @author: ruixiaozi
 * @since: ${version}
 */

export const $${name} = null;
`;

function generateProperty(name, version = '2.0.0', des = '') {
  const dir = path.join(__currentDir);
  const propertyPath = path.join(dir, `$${name}.ts`);
  const indexPath = path.join(dir, 'index.ts');

  if (fs.existsSync(propertyPath)) {
    console.log('propertyPath is exist');
    return;
  }

  fs.writeFileSync(propertyPath, propTsTpl(name, version, des));
  createFileSuccess(propertyPath);

  // 添加导出到index
  const res = fs.readFileSync(indexPath).toString();
  let nRes = insertStrNextLine(res, 'import { ', `import { $${name} } from './$${name}';`);
  nRes = insertStrNextLine(nRes, 'export *', `export * from './$${name}';`);
  nRes = insertStrNextLine(nRes, ' = [', `  $${name},`);
  fs.writeFileSync(indexPath, nRes);
  updateFileSuccess(indexPath);

  // 写入声明
  const apiDeclarePath = path.join(__dirname, '../components.d.ts');
  const declareRes = fs.readFileSync(apiDeclarePath).toString();
  let nDeclareRes = insertStrNextLine(
    declareRes,
    'ComponentCustomProperties {',
    `    $${name}: typeof import('./packages/index')['$${name}'];`,
  );
  fs.writeFileSync(apiDeclarePath, nDeclareRes);
  updateFileSuccess(apiDeclarePath);
}


const directivesTsTpl = (name, version = '2.0.0', des = '') =>
  `/**
 * v${name}
 * @description: ${des || name}
 * @author: ruixiaozi
 * @since: ${version}
 */
import { ObjectDirective } from 'vue';

export const v${name}: ObjectDirective<elType, valueType> = {

}
`;

function generateDirectives(name, version = '2.0.0', des = '') {
  const dir = path.join(__currentDir);
  const directivesPath = path.join(dir, `v${name}.ts`);
  const indexPath = path.join(dir, 'index.ts');

  if (fs.existsSync(directivesPath)) {
    console.log('directivesPath is exist');
    return;
  }

  fs.writeFileSync(directivesPath, directivesTsTpl(name, version, des));
  createFileSuccess(directivesPath);

  // 添加导出到index
  const res = fs.readFileSync(indexPath).toString();
  let nRes = insertStrNextLine(res, 'import { ', `import { v${name} } from './v${name}';`);
  nRes = insertStrNextLine(nRes, 'export *', `export * from './v${name}';`);
  nRes = insertStrNextLine(nRes, ' = {', `  v${name},`);
  fs.writeFileSync(indexPath, nRes);
  updateFileSuccess(indexPath);

}

switch (cmd) {
  case 'c':
  case 'component':
    if (param) {
      generateComponent(param, ...options);
    }
    break;
  case 'doc-c':
    if (param) {
      generateDocComponent(param, ...options);
    }
    break;
  case 'view':
    if (param) {
      generateView(param, ...options);
    }
    break;
  case 'use':
    if (param) {
      generateUse(param, ...options);
    }
    break;
  case 'util':
    if (param) {
      generateUtil(param, ...options);
    }
    break;
  case 'prop':
    if (param) {
      generateProperty(param, ...options);
    }
    break;
  case 'd':
    if (param) {
      generateDirectives(param, ...options);
    }
    break;
  default:
    break;
}
