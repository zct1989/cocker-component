import CMenu from './src/components/menu'
import CMenuItem from './src/components/menu-item'
import CSubMenu from './src/components/sub-menu'

const components = {
  CMenu,
  CMenuItem,
  CSubMenu
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