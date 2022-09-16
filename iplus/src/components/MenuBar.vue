<template>
  <div class="meauBar flex">
    <h1 class="flex">
        <a href="javascript;" class="flex">
            <img src="../assets/images/logo.png">
        </a>
    </h1>
    <nav>
        <ul class="flex">
            <li @mousemove="showMenuList1" @mouseleave="hideMenuList1">
                <a href="javascript;"> 
                    <span >WORK</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-down-circle-fill"></use>
                    </svg>
                </a>
            </li>
            <li @mousemove="showMenuList2" @mouseleave="hideMenuList2">
                <a href="javascript;">
                    <span>PRODUCT</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-down-circle-fill"></use>
                    </svg>
                </a>
            </li>
            <li><a href="javascript;">MEMBER</a></li>
            <li><a href="javascript;">COMPANY</a></li>
            <li><a href="javascript;">OPLICY</a></li>
            <li><a href="javascript;">RECRUIT</a></li>
            <li class="flex"><a href="javascript;">CONTACT</a></li>
        </ul>
    </nav>

    <div class="workList" v-show="showlist1" @mousemove="showMenuList1" @mouseleave="hideMenuList1">
        <ul class="flex list">
            <li><a href="javascript;">グッズ</a></li>
            <li><a href="javascript;">システム開発</a></li>
            <li><a href="javascript;">新規開発</a></li>
        </ul>
    </div>

    <div class="workList2 " v-show="showlist2" @mousemove="showMenuList2" @mouseleave="hideMenuList2">
        <ul class="flex list">
            <li><a href="javascript;">ヒット商品</a></li>
            <li><a href="javascript;">レア商品</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'MeauBar',

    setup(){
        let showlist1=ref(false)
        let showlist2=ref(false)

        function showMenuList1(){
            showlist1.value=true
        }
        function hideMenuList1(){
            showlist1.value=false
        }
        function showMenuList2(){
            showlist2.value=true
        }
        function hideMenuList2(){
            showlist2.value=false
        }

        return{
            showlist1,
            showlist2,
            showMenuList1,
            showMenuList2,
            hideMenuList1,
            hideMenuList2,
        }
    }

}
</script>

<style lang="less">
.meauBar{
    width: 100%;
    height: 115px;

    /* 布局 */
    justify-content: space-between;
    align-items: center;

    /* 定位 */
    position: fixed;

    z-index: 5;
}


h1{
    width: 280px;
    height: 100%;
    background-color: #4abbf7;
    border-radius: 0 0 30px 0;

    // 布局
    justify-content: center;
    align-items: center;
    a{
        width: 213px;
        height: 46px;
        img{
            width: 100%;
            height: auto;
        }
    }
}


nav{
    width: 700px;
    height: 50px;
    margin-right: 40px;
    border-radius: 23px;
    box-shadow: 2px 2px 8px rgba(87, 74, 74,0.1);
    background-color: #fff;

    ul{
        margin-left: 46px;
        height: 100%;
        // 布局
        justify-content: space-around;
        li{
            font-size: 14px;
            padding-right: 10px;
            height: 55px;
            line-height: 50px;
        }
        li:last-child{
            width: 170px;
            height: 50px;
            border-radius: 23px;
            background-color: #4abbf7;
            

            justify-content: center;
            a{
                color: #ffffff;
                line-height: 50px;
            }
        }
    }
}

.workList{
    display: inline-block;
    border-radius: 10px;
    background-color: #42b2f7;;
    position: absolute;
    top:84px;
    left:800px;
}
.workList2{
    display: inline-block;
    border-radius: 10px;
    background-color: #42b2f7;;
    position: absolute;
    top:84px;
    left:875px;
    ul{
        width: 100px;
        height: 100px;
    }
}
.list{
    width: 100px;
    height: 130px;

    flex-direction: column;
    justify-content: space-around;
    li{
        flex:1;
        width: 100%;
        display: block;
        a{
            width: 100%;
            height: 100%;
            display: block;
            color: #fff;
            font-weight: bold;
            font-size: 14px;


            padding-left: 5px;
            padding-top: 10px;
        }
        a:hover{
            color:#42b2f7;
        }
    }
    li:hover{
        background-color: #fff;
        border-radius: 10px;
    }
}


.icon{
width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-left: 5px;
}

</style>