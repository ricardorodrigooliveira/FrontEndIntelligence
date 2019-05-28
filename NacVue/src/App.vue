<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <br>
    Nome:<Texto v-on:mudou="digitouNome"/>
    Telefone:<Texto v-on:mudou="digitouFone"/>
    <br>
    <Button texto="Adicionar" classe="btn btn-primary" fundo="" v-on:clicou="this.inserir"/>
    <br>
    <div :key="indice" v-for="(valor, indice) in lista">
      <div v-on:click="excluir(indice)">{{valor[0]}}</div>
      <div v-on:click="excluir(indice)">{{valor[1]}}</div>
      <Button v-on:clicou="excluir(indice)" texto="excluir"/>
    </div>
  </div>
</template>

<script>
import Texto from './components/Texto.vue'
import Button from './components/Button.vue'

export default {
  name: 'app',
  components: {
    Texto,
    Button
  },
  data(){
    return { 
      valorNome: "",
      valorFone: "",
      lista: []
    }
  },
  methods:{
    inserir(){ 
      this.lista.push( [this.valorNome, this.valorFone] );
    },
    excluir(index){
      this.lista.splice(index, 1);
    },
    digitouNome(txtNome){
      this.valorNome = txtNome;
    },
    digitouFone(txtFone){
      this.valorFone = txtFone;
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
