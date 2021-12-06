<template>
<div>
    <div class="background_" :class="{'background_show':start}">
        <login-component></login-component>
    </div>
    <div class="text_div" :class="{'after_finish':active}">
        <div class="texts">
            <span>{{ typeValue }}</span>
            <span :class="{'typing': typeStatus}">&nbsp;</span>
        </div>
  </div>

</div>
</template>

<script>
import login from "./login2.vue"
  export default {
    data() {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: ['No Compromise With Security'],
            typingSpeed: 70,
            typeArrayIndex: 0,
            charIndex: 0,
            active:false,
            start:false
        }
    },
    components:{
        "login-component":login
    },
    methods: {
        typeText() {
            if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
            if(!this.typeStatus)
                this.typeStatus = true;
                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            }
            else {
                this.typeStatus = false;
                setTimeout(() => this.finish() , 500);
            }
        },
        finish(){
            this.active=true;
            setTimeout(() => this.start = true, 1000);
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap');
.background_{
    position: absolute;
    opacity: 0;
    z-index: -1;
}
.background_show{
    position: relative;
    opacity: 1;
    animation-delay: 3s;
    transition: 1s;
}
.after_finish{
    position: fixed;
    opacity: 0;
    transition: 1s;
    z-index: -11;
    // display: none !important;
}
.text_div {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Cinzel', serif;
}
.texts{
    font-size: 4vw;
    font-weight: 800;
}

@media all and (max-width:900px) {
    .texts{
        font-size: 6vw;
    }
}
</style>