<template>
  <div>
    <!--router-view를 해줘야 경로 지정 시 해당 페이지로 이동한다.-->
    <router-view/> 
  </div>
</template>

<script>
import Main from './components/Home.vue'
export default {
  components:{
    Main
  }
}
</script>