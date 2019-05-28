<template>
    <div>
        <div class="texto">
            Digita aqui:<input type="text" v-model="nome"/>
            <button v-on:click=Limpa type="button">Limpa</button>
            <br>
            {{ nome }}
        </div>
        <br>
        <div>
            <button v-on:click=Aumenta type="button">Aumenta</button>
        </div>
        <br>
        <div :class="negativo">{{ numero }}</div>
        <br>
        <div>
            <button v-on:click=Diminui type="button">Diminui</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            numero:0,
            nome:""
        }
    },
    computed:{
        negativo(){
            return this.numero < 0 ? "sim" : "nao";
        }
    },
    methods:{
        Aumenta(){
            this.numero = this.numero+1
        },
        Diminui(){
            this.numero = this.numero-1
        }
    }
}
</script>

<style scoped> /* scoped limita o objeto a ser usado somente nesse componente */
.sim{
    background-color: red;
    width: 80px;
    margin-left: 626px;
}
.nao{
    background-color: aqua;
    width: 80px;
    margin-left: 626px;
}
.texto{
    margin-right: 30px;
}
</style>
