<template>
  <div class="product-area">
    <h3>
        <div>
            <img src="../assets/images/heading_product.png">
        </div>
        <span>商品紹介</span>
    </h3>

    <a href="#" class="product_content flex">
        <div class="textarea flex">
            <h4>
                <img src="../assets/images/product_title1.svg">
            </h4>
            <p>
                人気アニメのオリジナルグッズ、
                <br>
                実はアイオウプラスの仕業かも？
            </p>
            <div class="btn">
                <span>
                    ヒット商品を見る
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiangyoujiantou"></use>
                    </svg>
                </span>
            </div>
        </div>
        <div class="picture">
            <img src="../assets/images/hit_img.png">
        </div>
    </a>

    <a href="#" class="product_content flex">
        <div class="picture">
            <img src="../assets/images/rare_img.png">
        </div>
        <div class="textarea flex" id="textarea2">
            <h4>
                <img src="../assets/images/product_title2.svg">
            </h4>
            <p>
                コミケでも話題に！アイオウプラスの
                <br>
                知る人ぞ知るアイテムをピックアップ！？
            </p>
            <div class="btn">
                <span>
                    ヒット商品を見る
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiangyoujiantou"></use>
                    </svg>
                </span>
            </div>
        </div>
        
    </a>
  </div>
  
</template>

<script>
import 'animate.css'
export default {
    name:'indexProduct',
}
</script>

<style lang="less">
.product-area{
    height: 1844.13px;
    width: 100%;
    background-image: url(../assets/images/bg_product.png);
    background-size: cover;
    box-sizing: border-box;
    padding: 240px 10% 0;
    h3{
        div{
            display: inline-block;
            width: 480px;
            margin-right: 80px;
            img{
                width: 100%;
            }
        }
        span{
            position: relative;
            font-size: 42px;
        }
        span:before{
            content: '';
            position: absolute;
            top:-9px;
            left:-18px;
            background-image: url(../assets/images/circle_head.png);
            background-size: 100%;
            width: 30px;
            height: 30px;
        }  
    }
}

.product_content{
    display: block;
    margin: 70px 0;
    width: 100%;
    border-radius: 10px;
    transition: all 0.75s ease;

    .picture{
        width: 62.5%;
        position: relative;
        img{
            width: 100%;
            position: absolute;
            top:0;
            left:0;
        }
    }
    #textarea2{
        border-radius: 0 10px 10px 0;
        background-image: url(../assets/images/rare_textarea_top.png),url(../assets/images/rare_textarea_bottom.png);
        .btn{
            span{
                background-color: #067cb8;
            }
        }
    }
    .textarea{
        width: 37.5%;
        height: 550.95px;
        border-radius: 10px 0 0 10px;
        flex-direction: column;
        justify-content: center;

        background-image: url(../assets/images/hit_textarea_top.png),url(../assets/images/hit_textarea_bottom.png);
        background-repeat: no-repeat,no-repeat;
        background-size: 100%;
        background-position: 0 0,0 100%;
        background-color: #fff;
        h4{
            width: 190px;
            height: 78px;
            margin: 0 auto;
            img{
                width: 100%;
                
            }
        }
        p{
            width: 100%;
            height: 72px;
            margin-top: 32px;
            font-size: 18px;
            text-align: center;
            font-weight: bold;
        }
        .btn{
            height: 60px;
            width: 100%;
            margin-top: 40px;
            text-align: center;
            span{
                display:inline-block;
                height: 100%;
                line-height: 60px;
                font-weight: bold;
                font-size: 20px;
                color: #fff;
                margin: auto;
                background-color: #4bbbf8;
                border-radius: 10px;

                padding: 0 10px;
            }
        }
    }
}

.product_content:hover{
    box-shadow: 2px 2px 10px #999;
    transition: all 0.75s ease;
}
.icon {
  width: 0.8em;
  height: 0.8em;
  fill: currentColor;
  vertical-align: 0;
  overflow: hidden;
}
</style>