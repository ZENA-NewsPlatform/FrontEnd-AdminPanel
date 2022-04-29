<template>
  <p>Individual Publisher</p>
</template>

<script>
export default {

    created(){
        this.$store.dispatch("publisherIndividual/fetchPublisher")
    }
}
</script>

<style>

</style>