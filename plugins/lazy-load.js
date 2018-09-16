import Vue from 'vue'; //eslint-disable-line
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  // error: '/images/loading.svg',
  // loading: '/images/loading-img.svg',
  attempt: 3,
  preLoad: 3,
  preLoadTop: 3,
});
