<template>
    <div>
        <input type="button" value="botão" :style="{backgroundColor: this.fundo}" value:="this.texto" v-on:click="this.clicou" fundo="red"/>
    </div>
</template>

<script>
export default {
    props: ['texto', 'fundo'],
    methods:{
        clicou: function(){
            this.$emit("clicou");
        }
    }
}
</script>

<style>

</style>
