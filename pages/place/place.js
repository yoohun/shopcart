//logs.js
const util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    show: false,
    openEdit: false,
    userAdderssInfo: [
    ],
    choseId: ''
  },
  choseEdit(e) {
    console.log(e)
    let that = this
    switch (e.target.dataset.id) {
      case 'a': 
        wx.navigateTo({
          url: '../address/address?addressid=' + this.data.choseId
        })
        break;
      default:
        app.globalData.userAdderssInfo = app.globalData.userAdderssInfo.filter(item=>item.id!==this.data.choseId)
        that.setData({
          userAdderssInfo: app.globalData.userAdderssInfo
        })
    }
  },
  edit(e) {
    this.setData({
      openEdit: true,
      choseId: e.currentTarget.dataset.id
    })
  },
  closeEdit () {
    this.setData({
      openEdit:false
    })
  },
  addAddress () {
    wx.navigateTo({
      url: '../address/address'
    })
  },
  onLoad () {
    
   
  },
  onShow() {
    this.setData({
      userAdderssInfo: app.globalData.userAdderssInfo
    })
    console.log(app.globalData.userAdderssInfo)
  }
})
