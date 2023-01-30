import { createSSRApp } from 'vue';
import App from './App.vue';
import { setupStore } from '@/state';
// import 'uno.css';
import tmui from './tmui';
// import 'virtual:windi.css'; // 会生成 * {} 样式，小程序端不支持而报错，用以下两行代替
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';

export function createApp() {
  const app = createSSRApp(App);

  // Configure store
  setupStore(app);

  // use tmui, https://tmui.design/doc/start/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.html#cli%E6%96%B9%E5%BC%8F%E5%AE%89%E8%A3%85
  app.use(tmui);

  return {
    app,
  };
}
