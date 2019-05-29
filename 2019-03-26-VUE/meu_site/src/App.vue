<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AumentaDiminui/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld alerta="Outro texto"/>
    <GoodByeWorld msg="see you tomorrow Vue.js App"/>
    <YouTube altura="400" largura="250" url="https://www.youtube.com/embed/FIHcU8e7WMA"/>
    <MeuComponente/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GoodByeWorld from './components/GoodByeWorld.vue'
import YouTube from './components/YouTube.vue'
import MeuComponente from './components/MeuComponente.vue'
import AumentaDiminui from './components/AumentaDiminui.vue'

export default {
  name: 'app',
  components: {
    AumentaDiminui, HelloWorld, GoodByeWorld, YouTube, MeuComponente
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
</style>