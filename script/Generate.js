const fs = require('fs');
const path = require('path');

// const __currentDir = process.cwd();
const [,, __currentDir, cmd, param, ...options] = process.argv;
console.log(__currentDir);
const tsDeclareTpl = (name) => `export class ${name}Declare {

  declare name: '${name}';

  declare $props: {

  };

  declare $emit: {
    // example: (e: 'test', ...args: any[]): any;
  }

}
`;

const tsTpl = (name, version = '2.0.0', des = '') => `import { Options, Vue } from 'vue-class-component';

/**
 * Component: ${name}
 * @description: ${des || name}
 * @author: ruixiaozi
 * @since: ${version}
 */
@Options({
  name: '${name}',
})
export class ${name}Cnt extends Vue {
  // props and provide

  // injects

  // refs

  // injectServices

  // setup

  // entity

  // computes

  // watchs

  // hooks

  // methods
}
`;

const vueTpl = (name) => `<template>
  <div></div>
</template>

<script lang="ts">
import { ${name}Cnt } from './${name}.component';
export default ${name}Cnt;
</script>

<style lang="scss" scoped>
@import "./${name}.scss";
</style>
`;

const indexTpl = (name) => `import { install } from '@/common';
import { App } from 'vue';
import _${name} from './${name}.vue';

export * from './${name}.declare';

export const ${name} = {
  ..._${name},
  install: install((app: App) => {
    app.component(_${name}.name, _${name});
  }),
};
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

function generateComponent(name, needUpdate = 'true', version = '2.0.0', des = '') {
  const dir = path.join(__currentDir, name);
  const scssPath = path.join(dir, `${name}.scss`);
  const tsPath = path.join(dir, `${name}.component.ts`);
  const declarePath = path.join(dir, `${name}.declare.ts`);
  const vuePath = path.join(dir, `${name}.vue`);
  const indexPath = path.join(dir, 'index.ts');
  const parentIndexPath = path.join(__currentDir, 'index.ts');

  if (needUpdate === 'true' && !fs.existsSync(parentIndexPath)) {
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
  fs.writeFileSync(declarePath, tsDeclareTpl(name));
  createFileSuccess(declarePath);
  fs.writeFileSync(tsPath, tsTpl(name, version, des));
  createFileSuccess(tsPath);
  fs.writeFileSync(vuePath, vueTpl(name));
  createFileSuccess(vuePath);
  fs.writeFileSync(indexPath, indexTpl(name));
  createFileSuccess(indexPath);

  if (needUpdate === 'true') {
    const res = fs.readFileSync(parentIndexPath).toString();
    let nRes = insertStrNextLine(res, 'import { ', `import { ${name} } from './${name}';`);
    nRes = insertStrNextLine(nRes, 'export *', `export * from './${name}';`);
    nRes = insertStrNextLine(nRes, ' = [', `  ${name},`);
    fs.writeFileSync(parentIndexPath, nRes);
    updateFileSuccess(parentIndexPath);

    const cntDeclarePath = path.join(__dirname, '../typings/components.d.ts');
    const declareRes = fs.readFileSync(cntDeclarePath).toString();
    let nDeclareRes = insertStrNextLine(
      declareRes,
      'GlobalComponents {',
      `    ${name}: typeof import('../packages/index')['${name}Declare'],`,
    );
    fs.writeFileSync(cntDeclarePath, nDeclareRes);
    updateFileSuccess(cntDeclarePath);
  }
}


const serviceTpl = (name, version = '2.0.0', des = '') => `import { Injectable } from '@tanbo/vue-di-plugin';

/**
 * Service: ${name}Service
 * @description: ${des || name}
 * @author: ruixiaozi
 * @since: ${version}
 */
@Injectable({
  provideIn: 'root',
})
export class ${name}Service{

}
`;

function generateService(name, version = '2.0.0', des = '') {
  const dir = path.join(__currentDir);
  const servicePath = path.join(dir, `${name}.service.ts`);

  if (fs.existsSync(servicePath)) {
    console.log('service is exist');
    return;
  }

  fs.writeFileSync(servicePath, serviceTpl(name, version, des));
  createFileSuccess(servicePath);
}

function generateDeclare(name, needUpdate = 'true') {
  const dir = path.join(__currentDir);
  const declarePath = path.join(dir, `${name}.declare.ts`);
  const indexPath = path.join(dir, 'index.ts');

  if (needUpdate === 'true' && !fs.existsSync(indexPath)) {
    console.log('index is not exist');
    return;
  }

  if (fs.existsSync(declarePath)) {
    console.log('declare is exist');
    return;
  }

  fs.writeFileSync(declarePath, tsDeclareTpl(name));
  createFileSuccess(declarePath);

  if (needUpdate === 'true') {
    const indexRes = fs.readFileSync(indexPath).toString();
    let nIndexRes = insertStrNextLine(indexRes, 'import ', `\nexport * from './${name}.declare';`);
    fs.writeFileSync(indexPath, nIndexRes);
    updateFileSuccess(indexPath);

    const cntDeclarePath = path.join(__dirname, '../typings/components.d.ts');
    const declareRes = fs.readFileSync(cntDeclarePath).toString();
    let nDeclareRes = insertStrNextLine(
      declareRes,
      'GlobalComponents {',
      `    ${name}: typeof import('../packages/index')['${name}Declare'],`,
    );
    fs.writeFileSync(cntDeclarePath, nDeclareRes);
    updateFileSuccess(cntDeclarePath);
  }
}

switch (cmd) {
  case 'c':
  case 'component':
    if (param) {
      generateComponent(param, ...options);
    }
    break;
  case 'd':
  case 'declare':
    if (param) {
      generateDeclare(param, ...options);
    }
    break;
  case 's':
  case 'service':
    if (param) {
      generateService(param, ...options);
    }
    break;
  default:
    break;
}

