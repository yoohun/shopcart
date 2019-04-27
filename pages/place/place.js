//logs.js
const util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    show: false
  },
  edit(e){
    console.log(123)
    wx.navigateTo({
      url: '../address/address'
    })
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})
