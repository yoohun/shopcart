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
    switch (e.target.dataset.id) {
      case 'a': 
        console.log('修改')
        wx.navigateTo({
          url: '../address/address?addressid=' + this.data.choseId
        })
        break;
      default:
        console.log('删除')
    }
  },
  edit(e) {
    this.setData({
      openEdit: true,
      choseId: e.currentTarget.dataset.id
    })
    console.log(e.currentTarget.dataset.id)
    
    // wx.navigateTo({
    //   url: '../address/address'
    // })
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
