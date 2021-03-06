//logs.js
const util = require('../../utils/util.js')
var jsonData = require('../../data/data.js');
const app = getApp()

Page({
  data: {
    logs: [],
    imgheights: [],
    imgwidth: '100%',
    current: 0,
    buylist: true,
    num:1,
    pro:{ },
    allPrice: 55,
    recommond: []
  },
  closeTap () { //
    let animation = wx.createAnimation({});
    animation.bottom(-440).step()
    let pronum = 'pro.buynum'
    this.setData({
      buylist: true,
      [pronum]:1,
      allPrice: this.data.pro.price,
      ani: animation.export()
    })
    
  },
  myEventListener: function (e) {
    let pronum = 'pro.buynum'
    this.setData({
      [pronum]: e.detail.numbe
    })
  },
  putinShopCart(){ //点击加入购物车 出现选择

    //选择框的出现或者隐藏时候的动画
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease'
    });
    animation.bottom(0).step()
    this.setData({
      ani: animation.export()
    })

    //选择框出现
    this.setData({
      buylist: false
    })
  },
  buy() {
    //点击购买按钮
    let thing = {
      'id': this.data.pro.id,
      'name': this.data.pro.title,
      'imgUrl': this.data.pro.imgUrls[0],
      'num': 1,
      'price': this.data.pro.price,
      'toshopCart': false
    }
    app.globalData.buyList.push(thing)
    this.setData({
      simple: true
    })
    wx.navigateTo({
      url: '../buylist/buylist'
    })
  },
  successBuy(){
    var animation = wx.createAnimation({});
    animation.bottom(-440).step()  //选择框隐藏起来
    let have=0 //表示购物车里有没有该相同的产品
    let number=0
    app.globalData.shoppingCart.filter((item,index)=>{ //判断。在全局变量购物车里有没有存在着现在点击的这个物品，有的话就合并在一起（have为1）
      if (this.data.pro.id==item.id) {
        let number = app.globalData.shoppingCart[index].num
        let shop = app.globalData.shoppingCart
        item.num = item.num + this.data.pro.buynum
        this.setData({
          shop
        })
        have = 1
      }
    })
    if(!have){   //如果购物车里没有该产品，直接放入购物车
      let shop = {
        'id': this.data.pro.id,
        'name': this.data.pro.title,
        'imgUrl': this.data.pro.imgUrls[0],
        'num': this.data.pro.buynum + number,
        'price': this.data.pro.price,
        'checked': 0,
        'toshopCart': true
      }
      let shopList = app.globalData.shoppingCart.push(shop)
      this.setData({
        shoppingCart: shopList
      })
    }
    let pronum = 'pro.buynum'
    this.setData({
      buylist: true,
      ani: animation.export(),
      [pronum]: 1,
      allPrice:this.data.pro.price
    })
    wx.showToast({
      title: '成功加入购物车',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    
  },
  imageLoad: function (e) {//获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },
  bindchange: function (e) {
    this.setData({ current: e.detail.current })
  },
  // minus: function () {
  //   var pronum = 'pro.buynum'
  //   if (this.data.pro.buynum==0){
  //     return
  //   } else {
  //     this.setData({
  //       [pronum]: --this.data.pro.buynum,
  //       allPrice: this.data.pro.price * this.data.pro.buynum
  //     })
  //   }
  // },
  // add: function() {
  //   var price = this.data.pro.price
  //   var pronum = 'pro.buynum'
  //   this.setData({
  //     [pronum]: ++this.data.pro.buynum,
  //     allPrice: this.data.pro.price * this.data.pro.buynum
  //   })
  // },
  onLoad: function (option) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      recommond: jsonData.dataList
    })

    app.globalData.proList.filter(item=>{
      if (item.id == option.id){
        this.setData({
          pro: item
        })
      }
    })
    
    // wx.request({
    //   url: 'http://123.56.220.217:3031/list',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  }
})
