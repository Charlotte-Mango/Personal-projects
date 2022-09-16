Page({
  flag: "",
  data: {
    //注意images文件夹和pages同路径
    // 首页轮播图
    banners1: [
      "/images/index/index-1-1.jpg",
      "/images/index/index-1-2.jpg",
      "/images/index/index-1-3.jpg",
      "/images/index/index-1-4.jpg"
    ],
    //首页新鲜出炉
    show1: [{
        wow: "!!!",
        new: "New",
        src: "/images/index/index-2-1.jpg",
        name: "可可甜酒奶茶"
      },
      {
        wow: "!!!",
        new: "New",
        src: "/images/index/index-2-2.jpg",
        name: "山核桃肉桂"
      },
      {
        wow: "!!!",
        new: "New",
        src: "/images/index/index-2-3.jpg",
        name: "彩虹茉莉"
      },
      {
        wow: "!!!",
        new: "New",
        src: "/images/index/index-2-4.jpg",
        name: "手捣芋头绿茶"
      }
    ],
    //首页茶·道
    show2: [
      "/images/index/index-3-1.jpg",
      "/images/index/index-3-2.jpg",
      "/images/index/index-3-3.jpg",
      "/images/index/index-3-4.jpg",
      "/images/index/index-3-5.jpg",
      "/images/index/index-3-6.jpg",
    ]
  },
  /* 点击开始点单，跳转页面至tab的点单页面 */
  TakeOrder:function(){
    wx.switchTab({
      url: '/pages/menu/menu',
    })
  },
  /* 点击茶白道的图，可以滚动至页面底端 */
  scrollPage:function(e){
    var that=this;
    var query=wx.createSelectorQuery().in(that);
    query.selectViewport().scrollOffset()
    query.select('#good_shows').boundingClientRect();
    query.exec(function(res){
      console.log(res);
      var data=res[0].scrollTop+res[1].top-10;
      wx.pageScrollTo({
        duration: 500,
        scrollTop:data
      });
    });
  }
})