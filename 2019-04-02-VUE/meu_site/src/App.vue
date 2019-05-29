<template>
  <div id="app">
    <div class="container">
      <div class="shadow-lg p-3 mb-5 bg-white rounded">
        <!--<Botao texto="blablabla" fundo="red" v-on:clicou="this.minhaFuncao"/>-->
        <textBox v-on:digitou="this.minhaFuncao"/>
      </div>
    </div> 
  </div> 
</template>

<script>
//import Botao from "./components/Botao.vue";
import textBox from "./components/textBox.vue";

export default {
  name: 'app',
  components: {
    textBox
  },
  methods:{
    minhaFuncao: function(valor){
      alert("Muito bom!" + valor);
    }
  }  
}
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>