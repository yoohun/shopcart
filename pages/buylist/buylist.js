//logs.js
const util = require('../../utils/util.js')
var jsonData = require('../../sj/data.js');
const app = getApp()

Page({
  data: {
    num: 1,
    buything:[],
    simple: false
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
  onShow: function (option) {
    this.setData({
      buything: app.globalData.buyList,
      simple: app.globalData.simple
    })
    console.log(app.globalData.buyList)
    console.log(this.data.buything)
  },
  onLoad: function (option) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      recommond: jsonData.dataList
    })
  }
})
