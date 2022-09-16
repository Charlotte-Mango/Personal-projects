// pages/menu/menu.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num: 0,
        rightViewId: '',
        currentIndex: 0,
        //注意images文件夹和pages同路径
        //点单banner
        banner2: [
            "/images/menu/menu-1-1.jpg",
            "/images/menu/menu-1-2.jpg",
            "/images/menu/menu-1-3.jpg",
            "/images/menu/menu-1-4.jpg",
        ],
        //点单列表
        menu_list: [{
                id: "0",
                main_name: '可可甜酒奶茶',
                main_pic: '/images/menu/2-1.png',
                //右侧区域
                rightlist: [{
                        id: 1,
                        pic: '/images/menu/3-1.png',
                        title: '可可甜酒奶茶（厚乳版）',
                        words: '香滑的百利甜酒与阿华田可可粉的奇妙融合~',
                        price: '¥21起',
                    },
                    {
                        id: 2,
                        pic: '/images/menu/3-2.png',
                        title: '可可甜酒奶茶',
                        words: '香滑的百利甜酒与阿华田可可粉的奇妙融合~',
                        price: '¥18起',
                    }
                ]
            },
            {
                id: "1",
                main_name: '云朵轻乳茶',
                main_pic: '/images/menu/2-2.png',
                //右侧区域
                rightlist: [{
                        id: 1,
                        pic: '/images/menu/3-3.png',
                        title: '山核桃肉桂',
                        words: '经小分子提纯技术处理的茶百道特制厚牛乳，带来更鲜更纯的滋味 ',
                        price: '¥19起',
                    },
                    {
                        id: 2,
                        pic: '/images/menu/3-4.png',
                        title: '海盐焦糖云红',
                        words: '选用鲜感物质明显提升的茶百道特制厚牛乳与滇南大叶红茶茶底 ',
                        price: '¥19起',
                    },
                    {
                        id: 3,
                        pic: '/images/menu/3-5.png',
                        title: '彩虹茉莉',
                        words: '通过小分子提纯技术后，茶百道特制厚牛乳获得了鲜味及顺滑度的双提升，奶香醇厚 ',
                        price: '¥19起',
                    }
                ]
            },
            {
                id: "2",
                main_name: '超人气奶茶',
                main_pic: '/images/menu/2-3.png',
                //右侧区域
                rightlist: [{
                        id: 1,
                        pic: '/images/menu/3-6.png',
                        title: '海盐焦糖奶茶',
                        words: '茶百道将海盐、黑朗姆酒以精妙工艺融入焦糖之中，造就微带黑朗姆香气但不含酒精的特制海盐焦糖浆。 ',
                        price: '¥17起',
                    },
                    {
                        id: 2,
                        pic: '/images/menu/3-7.png',
                        title: '豆乳玉麒麟',
                        words: '精选武夷山名丛玉麒麟奶茶底与特磨黄豆粉迸发出加倍的豆香咸甜芝士甜而不腻的口感将香醇无限延伸，香气悠远绵长。',
                        price: '¥14起',
                    },
                    {
                        id: 3,
                        pic: '/images/menu/3-8.png',
                        title: '血糯米铁观音',
                        words: '严选优质铁观音，兰香雅致，韵感十足，制成奶茶底清爽香甜且余味回甘，加入香软Q弹的血糯米，入口清甜，大有嚼头。 ',
                        price: '¥14起',
                    },
                    {
                        id: 4,
                        pic: '/images/menu/3-9.png',
                        title: '红豆奶冻',
                        words: '严选优质红豆久煮起沙，秘制奶冻香甜嫩滑，融入甘香顺滑的滇南大叶红茶奶茶底，口感细腻、香气宜人，赋予传统甜品新的趣味。',
                        price: '¥13起',
                    },
                    {
                        id: 5,
                        pic: '/images/menu/3-10.png',
                        title: '奥利奥奶茶',
                        words: '选用滇南大叶红茶为底制成的奶茶甘香顺滑，覆盖咸香丝滑的芝士奶盖，撒上香脆奥利奥碎，滋味浓郁，风味十足。',
                        price: '¥14起',
                    }
                ]
            },
            {
                id: "3",
                main_name: '四季水果茶',
                main_pic: '/images/menu/2-4.png',
                //右侧区域
                rightlist: [{
                        id: 1,
                        pic: '/images/menu/3-11.png',
                        title: '葡萄冻冻',
                        words: '手剥葡萄颗颗晶莹剔透，龙芽茉绿的清冽甘香混合沁凉葡萄沙冰，让花香浸润果肉，给味蕾带来优雅的清甜享受。',
                        price: '¥16起',
                    },
                    {
                        id: 2,
                        pic: '/images/menu/3-12.png',
                        title: '杨枝甘露',
                        words: '精选优质芒果、特制红西柚果粒、泰国小西米铺于杯底，搭配浓香椰浆，酸甜清爽丝毫不腻。开创杯装杨枝甘露酸甜鲜爽新喝法。 ',
                        price: '¥18起',
                    },
                    {
                        id: 3,
                        pic: '/images/menu/3-13.png',
                        title: '西瓜啵啵',
                        words: 'Q弹脆啵啵与爽口西瓜的组合，小啜一口，口腔里回荡着清新的西瓜味道，冰爽的感觉由口到心。 ',
                        price: '¥13起',
                    },
                    {
                        id: 4,
                        pic: '/images/menu/3-14.png',
                        title: '超级杯水果茶',
                        words: '1L装超大杯水果茶，加入多种水果及Q弹冻冻，饱满果肉搭配清香龙芽茉绿茶底，每一口都暗藏惊喜。 ',
                        price: '¥15起',
                    }
                ]
            },
            {
                id: "4",
                main_name: '米麻薯',
                main_pic: '/images/menu/2-5.png',
                //右侧区域
                rightlist: [{
                        id: 1,
                        pic: '/images/menu/3-15.png',
                        title: '豆乳米麻薯',
                        words: '精选玉麒麟奶茶底加入芝士奶盖，搭配嫩滑麻薯和Q软血糯米，再撒上一层豆香味十足的黄豆粉，丰富的口感层次值得细细品味。推荐喝法:先打开盖子尝一尝豆乳奶盖，再搅一搅糯米麻薯，让豆香、茶味伴随Q软底料，同时感受多重滋味。',
                        price: '¥15起',
                    },
                    {
                        id: 2,
                        pic: '/images/menu/3-16.png',
                        title: '红豆麻薯双拼',
                        words: '优选红豆久煮后甘香起沙，糯米麻薯奶香浓郁，与Q弹的芋圆一同铺于杯底，配合清新龙芽茉绿奶茶，口感层层递进，缤纷的香甜感受在口中层层展现。',
                        price: '¥15起',
                    }
                ]
            },
            {
                id: "5",
                main_name: '生打椰 ',
                main_pic: '/images/menu/2-6.png',
                //右侧区域
                rightlist: [{
                        id: 1,
                        pic: '/images/menu/3-17.png',
                        title: '生椰大满贯',
                        words: '椰肉与椰汁制成生打椰，加入香软有嚼劲的血糯米、爽滑清甜的冻冻以及Q弹椰果，给你一口大满足。',
                        price: '¥16起',
                    },
                    {
                        id: 2,
                        pic: '/images/menu/3-18.png',
                        title: '芒芒生打椰',
                        words: '优选香甜多汁的芒果制成细腻沙冰，混入由Q弹冻冻及清爽生打椰打底的杯中，再铺上一-层芒果粒，入口即是果香椰香充盈，凉意沁人。',
                        price: '¥16起',
                    }
                ]
            }
        ]
    },
    changeMenu(e) {
        // event事件
        // console.log(e);
        wx.clearStorage(); // 清除缓存
        let rightViewId = e.currentTarget.dataset.id;
        // console.log(rightViewId);
        let currentIndex = e.currentTarget.dataset.i;
        // console.log(currentIndex);
        this.setData({
            // 设置数据返回， 直接将id渲染到scroll - into - view的对应的值
            rightViewId,
            // 返回到右侧菜单scroll-view的对应值
            currentIndex
        })
        console.log(rightViewId);
        console.log(currentIndex);
    },
    getScroll(e) {
        let that = this;
        let sTop = e.detail.scrollTop; //通过e获取右侧菜单，滚到顶部，隐藏部分的高度
        let menu_list = that.data.menu_list; //这是一个数组，包含所有菜类和该分类下菜品
        let sumHeight = 0; //自定义一个变量，用来存放每个菜单和菜品的高度(滑动到顶部的))
        for (let index in menu_list) { //循环所有菜类和菜品
            index = menu_list[index] //menu_list数组里面索引值所对应的菜单
            let dishSize = index.rightlist.length; //菜单里面菜品的数量
            sumHeight += 15 + parseInt(dishSize * 75);
            //用于定义的变量加等于 每个菜单标题的高度（15）+每个菜单下菜品的数量（dishSize)*每个菜品的高度（75）sumHeight就是右侧每个菜单的总高度
            if (sTop <= sumHeight) { //判断当前滚动到顶部隐藏的高度如果小于等于右侧每个菜单的总高度，那就把当前高度的菜单的id传给左侧菜单对应的ID，显示高亮
                let id = index.id;
                this.setData({
                    currentIndex: id
                })
                break
            }
        }
    }
})