//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    logs: [],
    imgheights: [],
    imgwidth: '100%',
    current: 0,
    buylist: true,
    num:1,
    pro:{
      id:'ys01',
      title:'ytfguygugu',
      imgUrls: [
        '../../imgs/xmn.png',
        '../../imgs/xmn2.png',
        '../../imgs/xmn3.png'
      ],
      price: 55,
      sellNum: 0,
      buynum:1
    },
    allPrice: 55
  },
  closeTap () {
    this.setData({
      buylist: true,
      num:1,
      allPrice: this.data.pro.price
    })
    var animation = wx.createAnimation({
    });
    animation.bottom(-435).step()
    this.setData({
      ani: animation.export()
    })
  },
  putinShopCart(){
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease'
    });
    animation.bottom(0).step()
    this.setData({
      ani: animation.export()
    })
    this.setData({
      buylist: false
    })
  },
  buy() {
    var shop = {
      'id': this.data.pro.id,
      'name': this.data.pro.title,
      'imgUrl': this.data.pro.imgUrls[0],
      'num': 1,
      'price': this.data.pro.price
    }
    var shopList = app.globalData.shoppingCart.push(shop)

    var pronum = 'pro.buynum'
    wx.showToast({
      title: '购买成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    console.log(app.globalData.shoppingCart)
  },
  successBuy(){
    wx.showToast({
      title: '成功加入购物车',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    var animation = wx.createAnimation({
    });
    animation.bottom(-435).step()
    var shop = {
      'id': this.data.pro.id,
      'name': this.data.pro.title,
      'imgUrl': this.data.pro.imgUrls[0],
      'num': this.data.pro.buynum,
      'price': this.data.pro.price
    }
    var shopList = app.globalData.shoppingCart.push(shop)
    var pronum = 'pro.buynum'
    this.setData({
      buylist: true,
      ani: animation.export(),
      shoppingCart:shopList,
      [pronum]: 1,
      allPrice:this.data.pro.price
    })
    console.log(app.globalData.shoppingCart)

    
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
  minus: function () {
    var pronum = 'pro.buynum'
    if (this.data.pro.buynum==0){
      return
    } else {
      this.setData({
        [pronum]: --this.data.pro.buynum,
        allPrice: this.data.pro.price * this.data.pro.buynum
      })
    }
  },
  add: function() {
    var price = this.data.pro.price
    var pronum = 'pro.buynum'
    this.setData({
      [pronum]: ++this.data.pro.buynum,
      allPrice: this.data.pro.price * this.data.pro.buynum
    })
  },
  onLoad: function (option) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    console.log(option.id)
  }
})
