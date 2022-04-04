<template>
  <router-view/>
</template>
<script>
export default{
    created(){
      if(!localStorage.getItem('token'))
      this.$router.push('/signin')
    }
}
</script>