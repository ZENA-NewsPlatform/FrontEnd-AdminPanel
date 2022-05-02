<template>
  <p>{{id}}</p>
</template>

<script>
export default {
  data(){
    return{
    id: this.$route.params.id
    }
  },
    created(){
        this.$store.dispatch("publisherIndividual/fetchPublisher")
    }
}
</script>

<style>

</style>