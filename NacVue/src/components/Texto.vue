<template>
    <div class="container">
        <div class="col-md-12">
            <input type="text" v-model="txt" v-on:keyup.enter="limpar" v-on:change="enter"/>
        </div>
    </div>
</template>

<script>
export default {
    data(){
       return { txt: "" }
    },methods:{
        enter(){
            this.$emit("mudou", this.txt);
        },
        limpar(){
            this.$emit("mudou", this.txt);
            this.txt="";
        }
    }
}
</script>

<style scoped>

</style>
