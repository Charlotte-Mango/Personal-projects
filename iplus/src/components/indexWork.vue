<template>
  <div class="workarea flex">
    <div class="textarea">
        <img src="../assets/images/heading_work.png">
        <span >事業紹介</span>
        <p>
            アイオウプラスは「好き」をカタチにする会社。
            <br/>
			ヒット商品を多数手がけるアニメグッズ制作のほか、
            <br/>
			スイーツブランド、アパレルなど、
            <br/>
			幅広い事業を展開しています。
        </p>
        <Bigbtn :title="title"></Bigbtn>
    </div>
    <div class="picarea">
        <img src="../assets/images/work_ill.png">
        <div></div>
    </div>
  </div>
</template>

<script>
import{ref} from 'vue'
import Bigbtn from './Bigbtn.vue'
export default {
    name:'indexWork',
    components:{ Bigbtn, },
    setup(){
        let title="事業紹介"
        return{
            title
        }
    }

}
</script>

<style lang="less">
.workarea{
    width: 100%;
    height: 741px;
    box-sizing: border-box;
    padding: 150px 10% 80px;

    .textarea{
        width: 50%;
        height: auto;
        flex-direction: column;
        position: relative;
        img{
            display: block;
            width: 336px;
        }
        span{
            display: block;
            margin-top: 42px;
            color: #222;
            font-size: 42px;
            font-weight: bold;
        }
        span:before{
            content: '';
            position: absolute;
            top:115px;
            left:-12px;
            background-image: url(../assets/images/circle_head.png);
            background-size: 100%;
            width: 30px;
            height: 30px;
        }
        p{
            margin-top: 32px;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.05em;
            line-height: 2;
        }
    }
    .picarea{
        width: 40.7%;
        height: auto;
        position: relative;
        div{
            position: absolute;
            left:22%;
            top:0;
            width: 60%;
            height: 100%;
            border-radius: 10px;
            background: linear-gradient(90deg,#81b9e5 0%,#2ea7e0 50%,#006fb6 100%);
        }
        img{
            position: absolute;
            width: 100%;
            height: auto;
            z-index: 1;
        }
    }
}

</style>