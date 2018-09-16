import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', date => moment(date).format('DD. MMM. YYYY'));
