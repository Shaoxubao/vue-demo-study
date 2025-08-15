import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 注册全局过滤器(时间格式化)
Vue.filter('formatDate', function(value) {
  if (!value) return '';
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
});

new Vue({
  render: h => h(App),
}).$mount('#app')
