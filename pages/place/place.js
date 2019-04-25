//logs.js
const util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    show: false
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})
