<template>
    <div>
        <div v-on:click=clicou>
            {{ nome }}<br/>
            {{ idade + 1 }}
        </div>
        <div v-if="this.idade < 32" v-on:click=clicou>
            {{ nome }}<br/>
            {{ idade }}
        </div>
        <div v-else>
            teste
        </div>

        <div v-show="this.idade > 30">
            maior que 30!
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nome: "Um Nome Qualquer!",
            idade: 30
        }
    },
    methods:{
        clicou(){
            this.idade = this.idade+1;
        }
    }
}
</script>

<style>

</style>
