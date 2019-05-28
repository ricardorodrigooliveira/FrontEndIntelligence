<template>
    <div>
        <input type="button" :class="this.classe" :value="this.texto" v-on:click="clicou" :style="{backgroundColor: this.fundo}">
    </div>
</template>

<script>
export default {
    props: ['texto','alerta','fundo','classe'],
    methods: {
        clicou: function() {
            this.$emit("clicou");
        }
    }
}
</script>

<style scoped>

</style>
