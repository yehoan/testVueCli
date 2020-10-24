<template>
  <div class="appContainer">
      <img alt="Vue logo" src="@/assets/logo.png">
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.appContainer{
   width:100%;
   height: 100vh;
   background: url('./assets/bg.png') no-repeat;
   background-size:100%;
}
</style>
