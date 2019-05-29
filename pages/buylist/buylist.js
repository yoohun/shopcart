//logs.js
const util = require('../../utils/util.js')
var jsonData = require('../../data/data.js');
const app = getApp()

Page({
  data: {
    // num: 1,
    buything:{},
    simple: false,
    addressInfor:[],
    allmoney: 0,
    allbuynum: 0
  },
  toaddress () {
    wx.navigateTo({
      url: '../place/place'
    })
  },
  add () {
    this.setData({
      num: ++this.buything[0].num
    })
  },
  pls () {
    if(this.data.num!=1) {
      this.setData({
        num: --this.buything[0].num
      })
    }
  },
  buySubmit (e) {

    // 把以及购买了的物品从购物车里删除掉
    if (this.data.buything[0].toshopCart) {  //toshopCart判断该产品是直接购买的还是放进购物车之后再来购买的，如果是从购物车里购买的，就需要从购物车里删除掉
      let arr = app.globalData.shoppingCart
      for (let i = 0; i < app.globalData.buyList.length; i++) {
        arr = arr.filter(item => item.id != app.globalData.buyList[i].id)
      }
      app.globalData.shoppingCart = arr
    }


    this.data.buything[0].address = this.data.addressInfor
    let id = util.randomNumber()  //利用时间戳自动生成订单号
    this.data.buything[0].orderID = id
    this.data.buything[0].allnum = this.data.allbuynum
    this.data.buything[0].allmoney = this.data.allmoney
    this.setData({
      buything: this.data.buything
    })
    // console.log(this.data.buything[0].address)
    app.globalData.orderList[id] = this.data.buything
    // console.log(app.globalData.orderList)
    wx.showToast({
      title: '结算成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    wx.redirectTo({
      url: '../order/order'
    })
    app.globalData.buyList = []
    this.setData({
      buything: []
    })
  },
  onShow: function (option) {
    let money = 0
    let num = 0
    app.globalData.buyList.forEach(item => {
      money = money + parseFloat(item.num * item.price)
      num = num + item.num
    })
    this.setData({
      buything: app.globalData.buyList,
      simple: app.globalData.simple,
      allmoney: money,
      allbuynum: num
    })
  },
  onLoad: function (option) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      recommond: jsonData.dataList,
      addressInfor: app.globalData.userAdderssInfo[1]
    })
  }
})
