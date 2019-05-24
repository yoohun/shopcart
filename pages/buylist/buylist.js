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
    this.data.buything[0].address = this.data.addressInfor
    let id = util.randomNumber()
    this.data.buything[0].orderID = id
    this.setData({
      buything: this.data.buything
    })
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
    // console.log(app.globalData.buyList)
    // console.log(this.data.buything)
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
