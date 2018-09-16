const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const _ = require('lodash');

const log = console.log;


function getClassName(name) {
  // Check if the name starts with Sf
  if (name.substring(0, 2) === 'Sf') {
    return _.kebabCase(name.substring(2));
  }

  if (name.substring(0, 3) === 'The') {
    return _.kebabCase(name.substring(3));
  }

  return _.kebabCase(name);
}
// Templates
function getAtomTemplate(name) {
  return `
<template>
  <div class="${getClassName(name)}">${name}</div>
</template>

<script>
export default {
  props: {
  },
};
</script>

<style lang="scss" scoped>
.${getClassName(name)} {
}
</style>

`;
}

function getMoleculeTemplate(name) {
  return `
<template>
  <div class="${getClassName(name)}">${name}</div>
</template>

<script>
export default {
  components: {
  },
  props: {
  },
};
</script>

<style lang="scss" scoped>
.${getClassName(name)} {
}
</style>

`;
}

function getOrganismTemplate(name) {
  getClassName(name);
  return `
<template>
  <div class="${getClassName(name)}">${name}</div>
</template>

<script>
export default {
  components: {
  },
  props: {
  },
};
</script>

<style lang="scss" scoped>
.${getClassName(name)} {
}
</style>

`;
}

function getTemplateVueTemplate(name) {
  return `
<template>
  <div>
    <h1>${name}</h1>
    ViewModel: {{ viewModel }}
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    viewModel: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
`;
}

function getAtomSpecTemplate(name) {
  return `
import { mount } from '@vue/test-utils';
import ${name} from './${name}.vue';

describe('${name}', () => {
  const wrapper = mount(${name});

  it('should mount as a VueInstance', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
`;
}

function getMoleculeSpecTemplate(name) {
  return `
import { mount } from '@vue/test-utils';
import ${name} from './${name}.vue';

describe('${name}', () => {
  const wrapper = mount(${name});

  it('should render a matching snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
`;
}

// Helpers
function createDir(dir) {
  // Check if the folder exits, if not - create one
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    log(chalk.bgGreen(`Created folder in ${dir}`));
  }
}

// function appendTemplateToMaster(name) {
//   const filePath = './pages/master.vue';
//   const newString = `
// const components = {
//   ${name}: () => import('@/components/templates/${name}/${name}'),
// `;
//   // Start by reading the file content
//   let content = fs.readFileSync(filePath, 'utf8');
//   content = content.replace('const components = {', newString);

//   fs.writeFile(filePath, content, (err) => {
//     if (err) throw err;
//     console.log('Saved!');
//   });
// }


function createAtom(name) {
  const dir = `./components/atoms/${name}`;
  createDir(dir);
  // Create the vue.file
  fs.writeFile(`${dir}/${name}.vue`, getAtomTemplate(name), { flag: 'wx' }, (err) => {
    if (err) {
      log(chalk.bgRed(`Atom already exits for ${name}`));
      return;
    }
    log(chalk.bgGreen(`${name}.vue was created`));
  });

  // Create the spec.file
  fs.writeFile(`${dir}/${name}.spec.js`, getAtomSpecTemplate(name), { flag: 'wx' }, (err) => {
    if (err) {
      log(chalk.bgRed(`Spec for already exits for ${name}`));
      return;
    }
    log(chalk.bgGreen(`${name}.spec.js was created`));
  });
}

function createMolecule(name) {
  const dir = `./components/molecules/${name}`;
  createDir(dir);
  // Create the vue.file
  fs.writeFile(`${dir}/${name}.vue`, getMoleculeTemplate(name), { flag: 'wx' }, (err) => {
    if (err) {
      log(chalk.bgRed(`Molecule already exits for ${name}`));
      return;
    }
    log(chalk.bgGreen(`${name}.vue was created`));
  });
  // Create the spec.file
  fs.writeFile(`${dir}/${name}.spec.js`, getMoleculeSpecTemplate(name), { flag: 'wx' }, (err) => {
    if (err) {
      log(chalk.bgRed(`Spec for already exits for ${name}`));
      return;
    }
    log(chalk.bgGreen(`${name}.spec.js was created`));
  });
}

function createOrganism(name) {
  const dir = `./components/organisms/${name}`;
  createDir(dir);
  // Create the vue.file
  fs.writeFile(`${dir}/${name}.vue`, getOrganismTemplate(name), { flag: 'wx' }, (err) => {
    if (err) {
      log(chalk.bgRed(`Organisms already exits for ${name}`));
      return;
    }
    log(chalk.bgGreen(`${name}.vue was created`));
  });
}

function createTemplate(name) {
  const dir = `./components/templates/${name}`;
  createDir(dir);


  // Create the vue.file
  fs.writeFile(`${dir}/${name}.vue`, getTemplateVueTemplate(name), { flag: 'wx' }, (err) => {
    if (err) {
      log(chalk.bgRed(`Template already exits for ${name}`));
      return;
    }
    log(chalk.bgGreen(`${name}.vue was created`));
  });
}


const type = args.t;
const name = args.n;
if (!type || !name) {
  log(chalk.red('Both type and name must be specificed - look in readme for more information'));
  return;
}
switch (type) {
  case 'a':
    createAtom(name);
    break;
  case 'm':
    createMolecule(name);
    break;
  case 'o':
    createOrganism(name);
    break;
  case 't':
    createTemplate(name);
    break;
  default:
    log(chalk.red('Could not recognize the type'));
    break;
}

