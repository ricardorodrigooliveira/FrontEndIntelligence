<template>
    <div>
        <iframe :width="altura" :height="largura" :src="url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    nome: 'YouTube',
    props: {
        url: String,
        altura: Number,
        largura: Number
    }
}
</script>

<style>

</style>
