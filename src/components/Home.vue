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
      <div class="backStyle"/>
      <div class="text">
        숫자 찾기 <br> 게임!
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
                path:'/playgame'
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
          background-color: #FDEFEF;
      width: 100vw;
      height: 100vh;

  }
  main{
    position: relative;
    width: 1000px;
    height: 100vh;
    background-color: #FDEFEF;
    margin: auto;
  }
  .block{
    position:  absolute;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CDBBA7;
    border-radius: 10px;
    border: 5px solid rgb(241, 238, 238);
    font-size: 35px;
    font-weight: 700;
    color: #FCF6F5;
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
  .text{
    position: absolute;
    font-size: 100px;
    font-weight: 900;
    color: #52514f;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    line-height: 130px;
    letter-spacing: 5px;
    margin-bottom: 10%;
    bottom: 0;
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
    position: relative;
    bottom: 30px;
    width: 250px;
    height: 100px;
    background-color: #FDEFEF;
    border-radius: 20px 20px;
    border: 5px solid rgb(142, 140, 140);
    font-size: 30px;
    font-weight: 600;
    color: #9c9999;
    cursor: pointer;
  }
  .start:active{
    background-image: url("https://user-images.githubusercontent.com/76980526/133887433-74566f48-6314-4a08-b0f9-0ed0706bb0f9.png");
    background-size: cover;
    color: #333;
  }
  .start{
      position: absolute;
  }
  .about{
      position: absolute;
      transform: translateY(120%);
  }
</style>
