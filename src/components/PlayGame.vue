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
                <li class="num"
                    v-for="num, i in 50"
                    :key="num.randomNumList"
                    >
                    {{randomNumList[i]}}
                </li>
            </ul>
        </div>
        <button @click="homeLink" class="button">돌아가기</button>
        <div class="success">
            <div class="sucBox">
                <div class="text">성공하셨습니다!</div>
                <button @click="homeLink" class="button">Home</button>
                <button @click="homeLink" class="button">About</button>
            </div>
        </div>
        <!-- <div class="fall">
            <div class="sucBox">
                <div class="text">실패하셨습니다!</div>
                <button @click="homeLink" class="button home">Home</button>
                <button @click="homeLink" class="button about">About</button>
            </div>
        </div> -->
    </div>
</template>


<script>
export default {
    data(){
        return{
            number : 1, // 3으로 설정 
            countDownNum : 1, // 5으로 설정
            randomNum : 0,
            randomNumList : [
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1,
                Math.floor(Math.random() * 50) + 1
            ]
        }
    },
    created(){
        this.ready();
        this.random();
        this.numRandom();
        this.result();
    },
    mounted(){
        this.result();
    },
    methods:{
        ready(){
            setInterval(() => {
                this.number-= 1
                // this.ready에 ready()를 붙이면 값이 두 배로 계속 증가하는 이상현상이 생김..
                this.ready
                // 시간이 0초가 되면 숫자가 사라짐.
                if(this.number == 0){
                    const delNumber = document.querySelector('.ready');
                    delNumber.style.display = "none";
                    this.countDown()
                }
            }, 1000)
        },
        countDown(){
            setInterval(() => {
                this.countDownNum -= 1
                this.countDown
                if(this.countDownNum == 0){
                    // alert("실패하셨습니다.");
                }
            }, 1000)
        },
        random(){
            // Math.floor로 소수 제거, 0부터 시작하므로 (Math.ramdom() * 50) + 1 해서 1~50숫자로 지정해줌.
            this.randomNum = Math.floor(Math.random() * 50) + 1
        },
        // success(){
        //     const num = document.querySelector('.randomNum');
        //     const numList = document.querySelectorAll('.num');
        //     for(var i = 0; i < numList.length; i++){
        //         console.log(typeof num)
        //         console.log(typeof numList[i].innerHTML)
        //         // console.log(num.innerHTML);
        //         // console.log(numList[i].innerHTML)
        //         numList[i].addEventListener('click', function(){
        //             // numList에서 클릭한 곳 뜨도록 하기\ 
        //             if(num.innerHTML === numList[1].innerHTML){
        //                 console.log("성공" + num.innerHTML);
        //                 console.log("성공" + numList[i]);
        //             }
        //             else{
        //                 console.log("실패" + num.innerHTML);
        //                 console.log("실패" + numList[1].innerHTML);
        //             }
        //         })
        //     }
        // },
        result(){
            let randomNum = document.querySelector('.randomNum');
            let num = document.querySelectorAll('.num');
            for(var i = 0; i < num.length; i++){
                console.log(run[i]);
            }
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
    ul, li{
        list-style: none;
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
    .success{
        display: none;
        position: absolute;
        width: 500px;
        height: 700px;
        background-color: #333;
    }
    .sucBox .text{
        font-size: 50px;
        color:#FCF6F5;
        font-weight: 700;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: center;
    }
    .sucBox .button.home{
        margin: 10px;
    }
    .sucBox .button.about{
        margin-top: 200px;
    }
</style>