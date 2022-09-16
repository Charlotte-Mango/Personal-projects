<template>
  <div class="mv">
      <img class="mv_phrase animate__animated animate__bounceIn" src="../assets/images/phrase_txt.png">

      <div class="mv_01 animate__animated animate__zoomIn">
        <img src="../assets/images/cushion.gif" class="mv_01_1 animate__animated animate__pulse">
        <img src="../assets/images/mv01.png" class="mv_01_2 animate__animated animate__pulse" >
        <img src="../assets/images/poster.gif" class="mv_01_3 animate__animated animate__pulse">
      </div>

        <div class="mv_02 animate__animated animate__bounceIn">
          <img src="../assets/images/mv04.png" class="mv_02_1 animate__animated animate__pulse">
          <img src="../assets/images/t-shirt.gif" class="mv_02_2 animate__animated animate__pulse">
        </div>
      

      <div class="mv_03 animate__animated animate__bounceIn">
        <img src="../assets/images/mv03.png" class="mv_03_1 animate__animated animate__pulse">
      </div>

      <div class="mv_04 animate__animated animate__bounceIn">
        <img src="../assets/images/mv02.png" class="mv_04_1 animate__animated animate__pulse">
      </div>

      <div class="mv_news flex">
        <h3>NEWS</h3>
        <div class="text flex">
          <div class="info">
            <time class="time">2022-06-16</time>
          </div>
          <a href="#">公式サイトリニューアル</a>
        </div>
      </div>
  </div>
</template>

<script>
// animate.css动画库
import 'animate.css'

export default {
    name:'indexMv'
}
</script>

<style>
.mv{
    position: relative;
    height: 1062px;
    width: 100%;
    background-image: url(../assets/images/mv_background.png);
}
.mv_phrase{
  width: 32%;
  transform: translate(-50%,-50%);

  position: absolute;
  top:30%;
  left:33%;
}

.mv_01{
  width: 100%;
  position: relative;

  animation-delay: 0.25s;
  animation-direction: 1s;

}
.mv_01_1{
  width: 300px;
  height: auto;
  z-index: 1;

  position: absolute;
  top:146px;
  left:100px;

  animation-delay: 0.25s;
  animation-iteration-count:infinite;
}
.mv_01_2{
  width: 100%;

  position: absolute;
  top:-50px;

  animation-delay: 0.25s;
  animation-iteration-count:infinite;
  animation-duration:5s;
}
.mv_01_3{
  width: 300px;
  z-index: 1;

  position: absolute;
  top:480px;
  left:940px;

  animation-delay: 0.25s;
  animation-iteration-count:infinite;
}
.mv_02{
  width: 100%;
  position: relative;

  animation-delay: 0.5s;
  animation-direction: 1s;
}
.mv_02_1{
  width: 100%;

  animation-delay: 0.5s;
  animation-iteration-count:infinite;
  animation-duration:4s;
}
.mv_02_2{
  width: 300px;
  position: absolute;
  top:400px;
  left:1184px;

  animation-delay: 0.5s;
  animation-iteration-count:infinite;
  animation-duration:4s;
}
.mv_03{
  position: absolute;
  top:0;
  left:0;
  width: 100%;

  animation-delay: 0.6s;
  animation-direction: 1s;
}
.mv_03_1{
  width: 100%;

  animation-delay: 0.6s;
  animation-iteration-count:infinite;
  animation-duration:3s;
}
.mv_04{
  position: absolute;
  top:0;
  left:0;
  width: 100%;

  animation-delay: 0.65s;
  animation-direction: 1s;
}
.mv_04_1{
  width: 100%;

  animation-delay: 0.7s;
  animation-iteration-count:infinite;
  animation-duration:3s;
}
.mv_news{
  width: 286.325px;
  height: 40px;
  padding: 25px 120px 25px 30px;
  background-color: #4abbf7;
  border-radius: 0 44px 44px 0;
  background-image: url(../assets/images/icon_news.png);
  background-position: 92% center;
  background-size: 18px;
  background-repeat: no-repeat;

  position:absolute;
  top:70%;
  left:0;

  align-items: center;
}
.mv_news h3{
  color:#fff;
  font-size: 16px;
}
.mv_news .text{
   padding-left: 30px;
    margin-left: 30px;
    border-left: 1px solid #fff;
    align-items: center;
    flex-wrap: wrap;
}
.mv_news .text .time{
  font-size: 12px;
  letter-spacing: 0.05rem;
  color: #fff;
}
.mv_news .text a{
    display: block;
    font-weight: 700;
    line-height: 2;
    letter-spacing: 0.05em;
    font-size: 14px;
    color: #fff;
}
</style>