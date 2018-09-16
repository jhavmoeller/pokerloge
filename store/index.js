export const state = () => ({
  initialized: false,
  locale: 'da',
  layout: '',
});

export const mutations = {
  initialized(s) {
    s.initialized = true;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    return dispatch('init');
  },
  async init(context) {
    // Avoid multiple inits
    // Init is both called when generating static pages and when the app is started.
    // The call from "app started" is need to make sure init is called when the page
    // is in SPA mode for eg. Product Detail Pages.
    if (context.state.initialized) {
      return;
    }
    context.commit('initialized');
  },
};
