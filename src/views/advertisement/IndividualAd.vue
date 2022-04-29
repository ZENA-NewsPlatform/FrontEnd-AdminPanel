<template>
  <p>Individual Advertisement</p>
</template>

<script>
export default {
    created(){
        this.$store.dispatch("adIndividual/fetchAd")
    }
}
</script>

<style>

</style>