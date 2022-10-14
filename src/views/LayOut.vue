<template>
  <div>
    
       <NavMenu/>
        <router-view></router-view>
      
  </div>
</template>

<script>
import NavMenu from '../components/NavMenu.vue'
export default {
    components:{
        NavMenu
    }

}
</script>

<style>

</style>