import { createSSRApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/state';
import 'uno.css';
import uviewPlus from 'uview-plus';
import tmui from './tmui';

export function createApp() {
  const app = createSSRApp(App);

  // Configure store
  setupStore(app);

  // use uview-plus, https://uiadmin.net/uview-plus/
  app.use(uviewPlus);

  // use tmui, https://tmui.design/doc/start/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.html#cli%E6%96%B9%E5%BC%8F%E5%AE%89%E8%A3%85
  app.use(tmui);

  return {
    app,
  };
}
