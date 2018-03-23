<template>
  <div id="app">
     <v-toolbar color="grey darken-3" app fixed clipped-left>
      <v-toolbar-side-icon > <img src="./assets/logo.png" width="35" height="35"> </v-toolbar-side-icon>
      <v-toolbar-side-icon v-on:click="back()" style="color:white" class="contact">Contact</v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon v-on:click="change()" ><i  class="material-icons">person</i></v-toolbar-side-icon>
    </v-toolbar>
    
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
    <router-view></router-view>
  </div>
  
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  },
  methods: {
    change(){
      this.$router.push('/login')
    },
    back(){
      this.$router.push('/')
    }
  }

  
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.material-icons {
  
font-size: 35px;
color: white;
}

.contact {

  padding-left: 40px;
  margin: auto;
}
</style>
