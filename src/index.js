import Cell from '../packages/cell';
import CellSwipe from '../packages/cell-swipe';
import Button from '../packages/button';
import Toast from '../packages/toast';
import Indicator from '../packages/indicator';
import MessageBox from '../packages/message-box';
import InfiniteScroll from '../packages/infinite-scroll';
import Lazyload from '../packages/lazyload';
import '../src/assets/font/iconfont.css';
import merge from './utils/merge';

const version = '1.0.0';
const install = function(Vue, config = {}) {
  if (install.installed) return;

  Vue.component(Cell.name, Cell);
  Vue.component(CellSwipe.name, CellSwipe);
  Vue.component(Button.name, Button);
  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, merge({
    loading: require('./assets/loading-spin.svg'),
    attempt: 3
  }, config.lazyload));

  Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$indicator = Vue.prototype.$indicator = Indicator;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  install,
  version,
  Cell,
  CellSwipe,
  Button,
  Toast,
  Indicator,
  MessageBox,
  InfiniteScroll,
  Lazyload
};
