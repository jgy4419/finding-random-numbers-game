<template>
  <div class="body">
    <div class="about">
      <div class="photo"/>
      <div class="text">
        <div>{{name}}</div>
        <div>e-mail : {{email}}</div>
        <div>Call : {{call}}</div>
        <button @click="homeLink">돌아가기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name : 'JGY_98',
      email : 'jgy_98@naver.com',
      call : '+82-10-2037-4553'
    }
  },
  methods:{
    homeLink(){
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped>
.body{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(238, 235, 235);
}
.about{
  position: relative;
  font-size: 30px;
  top: 200px;
  width: 1000px;
  margin: auto;
  text-align: center;
}
  .photo{
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 5px solid rgb(186, 182, 182);
    background-image: url("https://avatars.githubusercontent.com/u/76980526?v=4");
    background-size: cover;
  }
  .text{
    position: absolute;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    top: 20px;
    margin-left: 50%;
    margin-top: 5%;
    color: #333;
  }
</style>