<template>
    <div class="bye">
        <h1>{{ msg }}</h1>
    </div>
    
</template>

<script>
export default {
    nome: 'GoodByeWorld',
    props: {
        msg: String
    }
}
</script>

<style scoped>
.alerta {
  color: red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
