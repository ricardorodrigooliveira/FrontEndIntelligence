<template>
    <div class="form-row">
        <div class="col">
            <input class="form-control" v-model="valorDaCaixa" type="text" v-on:keyup="this.mudou">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            valorDaCaixa: ""
        }
    },
    methods:{
        minhaFuncao: function(evt){
            if(evt.code == "Enter"){
                alert("Muito bom!", this.valorDaCaixa);
            }
        }
    }

}

</script>

<style>

</style>