<template>
  <div id="body">
    <main>
      <div class="block1 block">
        1
      </div>
      <div class="block2 block">
        50
      </div>
      <div class="block3 block">
        100
      </div>
      <div class="option">
        <button class="start" @click="gameLink">Start!</button>
        <button class="about" @click="aboutLink">About</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    mounted() {
        this.animation()
    },
    methods:{
        aboutLink(){
            this.$router.push({
                path: '/about'
            })
        },
        gameLink(){
            this.$router.push({
                path:'/game'
            })
        },
        animation(){
            const block1 = document.querySelector('.block1');
            setInterval(() => {
                block1.classList.toggle('event');
            }, 1200);
            const block2 = document.querySelector('.block2');
            setInterval(() => {
                block2.classList.toggle('event');
            }, 1000);
            const block3 = document.querySelector('.block3');
            setInterval(() => {
                block3.classList.toggle('event');
            }, 1000);
        }
    },
}
</script>

<style scoped>
  template{
    margin: 0;
    padding: 0;
  }
  #body{
      margin: 0;
      padding: 0;
      background-color: rgb(243, 242, 242);
  }
  main{
    position: relative;
    width: 1000px;
    height: 100vh;
    margin: auto;
  }
  .block{
    position: absolute;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(237, 250, 211);
    border-radius: 10px;
    border: 1px solid #333;
    font-size: 25px;
    font-weight: 700;
    color: #333;
  }
  .block1{
    margin: 100px 0%;
    transition: 3s;
    transform: translateY(0px);
  }
  .block1.event{
      transform: translateY(-40px);
  }
  .block2{
    margin: 100px 43%;
    transition: 1.2s;
    transform: translateY(0px);
  }
  .block2.event{
    transform: translateY(-30px);
  }
  .block3{
    margin: 100px 85%;
    transition: 4s;
    transform: translateY(30px);
  }
  .block3.event{
      transform: translateY(-30px);
  }
  .option{
    position: absolute;
    display: flex;
    right: 20%;
    align-items: center;
    bottom: 20%;
  }
  button{
    width: 300px;
    height: 100px;
    border-radius: 3%;
    border: 2px solid #333;
    background-color: rgb(250, 237, 224);
    font-size: 30px;
    font-weight: 600;
    color: #333;
  }
</style>
