//logs.js
const util = require('../../utils/util.js')
var jsonData = require('../../sj/data.js');
const app = getApp()

Page({
  data: {
    show:false
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
