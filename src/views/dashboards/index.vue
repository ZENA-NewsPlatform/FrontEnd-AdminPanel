<template>
    <router-view />
</template>
<script>
export default{
    created(){
        if(localStorage.getItem('token')===null){
            this.$router.push('/signIn')
        }
    }
}
</script>