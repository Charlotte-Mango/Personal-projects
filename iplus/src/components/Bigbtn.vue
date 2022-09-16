<template>
   <a href="#" @mouseover="hideleft" @mouseout="showleft" class="bigbtn">
        {{title}}
        <div class="left" v-show="ishidden"></div>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiangyoujiantou"></use>
        </svg>
    </a>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'Bigbtn',
    props:["title"],
    setup(){
        let ishidden=ref(true)

        function hideleft(){
            ishidden.value=false
        }
        function showleft(){
            ishidden.value=true
        }

        return{
            ishidden,
            hideleft,
            showleft
        }
    }

}
</script>

<style>
.bigbtn{
    display: block;
    width: 347px;
    height: 90px;
    box-sizing: border-box;
    margin-top: 56px;
    background-color: #1e2f37;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 90px;
    font-weight: bold;

    position: relative;
    overflow: hidden;
}

.bigbtn .left{
    width: 112px;
    height: 112px;
    background: radial-gradient(circle,#fcce8c 0%,#f7b66a 51%,#f7966b 100%);
    border-radius: 50%;

    position: absolute;
    top:-11px;
    left:300px;
}
.bigbtn .icon{
    position: absolute;
    top:50%;
    transform: translate(0,-50%);
    left:312px;
}
.bigbtn:hover{
    background: radial-gradient(circle,#fcce8c 0%,#f7b66a 51%,#f7966b 100%);
}
</style>