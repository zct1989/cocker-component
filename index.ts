import SimpleBox from './src/components/simple-box'

const components = {
  SimpleBox
}

const install = (Vue) => {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

const plugins = {
  version: '0.0.1',
  install
}

const API = {
  ...plugins,
  ...components
}

export default API