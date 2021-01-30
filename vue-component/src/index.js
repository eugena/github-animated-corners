import GHAnimatedCorner from "./GHAnimatedCorner.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("gh-animated-corner", GHAnimatedCorner);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

GHAnimatedCorner.install = install;

export default GHAnimatedCorner;
