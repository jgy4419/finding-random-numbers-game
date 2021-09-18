<template>
    <div class="body">
        <div class="ready">
            {{number}}
        </div>
        <div class="gameIn">
            <div class="countDown">
                {{ countDownNum }}
            </div>
            <div class="randomNum">
                {{randomNum}}
            </div>
            <ul class="numList">
                <li class="num" v-for="num in numList" :key="num"
                @click="result">{{num}}</li>
            </ul>
        </div>
        <button @click="homeLink" class="button">돌아가기</button>
        <div class="success">
            <div class="sucBox">
                <div class="text">성공하셨습니다!</div>
                <button @click="again" class="button again">Again!</button>
                <button @click="homeLink" class="button home">Home</button>
                <button @click="homeLink" class="button about">About</button>
            </div>
        </div>
        <div class="fall">
            <div class="fallBox">
                <div class="text">실패하셨습니다..</div>
                <button @click="again" class="button again">Again!</button>
                <button @click="homeLink" class="button home">Home</button>
                <button @click="homeLink" class="button about">About</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            number : 3, // 3으로 설정 
            countDownNum : 5, // 5으로 설정
            randomNum : 0,
            numList: []
        }
    },
    created(){
        this.ready();
        this.random();
        this.numRandom();
    },
    mounted(){
        this.randomList();
        // this.result();
    },
    methods:{
        randomList(){
            /* 50개 나열된 숫자 겹치지 않게 지정된 변수(값) */
            let arrayLength = Array(50).fill().map(function(a, i){return i + 1;})
            while(arrayLength.length > 0){
                let value = arrayLength.splice(Math.floor(Math.random() * arrayLength.length),1)[0];
                this.numList.push(value);
            }
        },
        ready(){
            setInterval(() => {
                this.number -= 1
                // this.ready에 ready()를 붙이면 값이 두 배로 계속 증가하는 이상현상이 생김..
                // this.ready
                // 시간이 0초가 되면 숫자가 사라짐.
                if(this.number == 0){
                    const delNumber = document.querySelector('.ready');
                    delNumber.style.display = "none";
                    const gameIn = document.querySelector('.gameIn')
                    gameIn.style.display = "block";
                    this.countDown()
                }
            }, 1000)
        },
        countDown(){
            setInterval(() => {
                this.countDownNum -= 1
                this.countDown
                if(this.countDownNum == 0){
                    var fall = document.querySelector('.fall');
                    fall.classList.add('event');
                    this.countDownNum += 1
                }
            }, 1000)
        },
        random(){
            // Math.floor로 소수 제거, 0부터 시작하므로 (Math.ramdom() * 50) + 1 해서 1~50숫자로 지정해줌.
            this.randomNum = Math.floor(Math.random() * 50) + 1
        },
         result(){
            let numListOne = document.querySelectorAll('.num');
            // 타입 변경
            let numChange = this.randomNum.toString();
            console.log(typeof numChange); // 위에 숫자 타입
            console.log(numChange); // 위에 숫자 값
            for(let i = 0; i < numListOne.length; i++){
                numListOne[i].addEventListener('click', function(){
                    let result = numListOne[i].innerHTML == numChange;
                    if(result){
                        const success = document.querySelector('.success');
                        success.classList.add('event');
                        this.countDownNum += 1;
                    }
                    else{
                        const fall = document.querySelector('.fall');
                        fall.classList.add('event');
                        this.countDownNum += 1;
                    }
                })
            }
        },
        again(){
            location.reload();
        },
        homeLink(){
                this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style scoped>
    /* template{
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        background-color: #FCF6F5;
    } */
    .gameIn{
        display: none;
    }
    ul, li{
        list-style: none;
    }
    li:hover{
        background-color: #333;
        color: #FCF6F5;
    }
    .body{
        position: relative;
        width: 1000px;
        height: 100vh;
        margin: auto;
        background-color: #FCF6F5;
    }
    .ready{
        text-align: center;
        font-size: 200px;
        color: #333;
        font-weight: 500;
    }
    .countDown{
        position: absolute;
        text-align: center;
        width: 70px;
        height: 70px;
        font-size: 70px;
        right: 0;
        margin: 30px;
        border: 8px solid #333;
        border-radius: 50%;
    }
    .randomNum{
        position: absolute;
        margin-left: 40%;
        margin-top: 5%;
        text-align: center;
        font-size: 150px;
        width: 170px;
        height: 160px;
        border: 5px solid #333;
        border-radius: 10px;
    }
    
    .numList{
        position: absolute;
        bottom: 0;
        margin-bottom: 15%;
        width: 700px;
        margin-left: 15%;
        display: flex;
        flex-wrap: wrap;
    }
    .num{
        width: 40px;
        height: 40px;
        font-size: 35px;
        margin: 10px;
        border: 3px solid #333;
        text-align: center;
        border-radius: 10px;
        cursor: pointer;
    }
    .button{
        position: absolute;
        width: 100px;
        height: 50px;
        font-size: 20px;
        font-weight: 500;
        border: 3px solid #333;
        border-radius: 10px;
        cursor: pointer;
        bottom: 0;
        right: 0;
        margin-bottom: 10px;
    }
    .success, .fall{
        position: absolute;
        z-index: -1;
        top: 10%;
        left: 25%;
        opacity: 0;
        width: 500px;
        height: 500px;
        border-radius: 10px;
        border: 3px solid rgb(167, 165, 165);
        background-color: #FCF6F5;
        transition: 1s;
        transform: translateY(20px);
    }
    .success.event, .fall.event{
        z-index: 1;
        transition: 1s;
        transform: translateY(0px);
        opacity: 1;
    }
    .sucBox .text,
    .fallBox .text{
        position: absolute;
        left: 18%;
        top: 10%;
        font-size: 50px;
        color:rgb(122, 122, 119);
        font-weight: 700;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: center;
    }
    .sucBox .button,
    .fallBox .button{
        position: absolute;
        bottom: 0;
        border: 2px solid rgb(243, 235, 235);
        background-color: rgb(230, 238, 156);
        width: 100%;
    }
    .sucBox .button:hover
    .fallBox .button:hover{
        background-color: #FCF6F5;
        border: 2px solid rgb(230, 238, 156);
        
    }
    .sucBox .button.again,
    .fallBox .button.again{
        margin-bottom: 20%;
    }
    .sucBox .button.home,
    .fallBox .button.home{
        margin-bottom: 10%;
    }
    .sucBox .button.about,
    .fallBox .button.about{
        margin-bottom: 0px;
    }
</style>
