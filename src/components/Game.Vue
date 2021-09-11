<template>
    <div class="body">
        <div class="ready">
            {{count}}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        let lefId
        return{
            
            count : 0,
            tweenCount : 3
        }
    },
    computed:{
        readyCount : function(){
            this.count -= 1;
            lefId = requestAnimationFrame(readyCount);
        }
    },
    watch: {
        number: function(newValue){
            TweenLite.to(this.$data, 0.5, {tweenedNumber: newValue})
        }
    }
}
</script>