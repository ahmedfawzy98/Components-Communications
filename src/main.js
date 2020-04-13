import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
// export const eventBus = new Vue();  
export const eventBus = new Vue({
  /* data: {

  }, */
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});  

new Vue({
  render: h => h(App),
}).$mount('#app')
