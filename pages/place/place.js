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
  choseaddress (e) {
    console.log(e)
    let pages = getCurrentPages();  // 当前页的数据，可以输出来看看有什么东西
    let prevPage = pages[pages.length - 2];  // 上一页的数据，也可以输出来看看有什么东西
    console.log(prevPage.route)
    if (prevPage.route == 'pages/buylist/buylist') {
      console.log(prevPage.data)
      let city = prevPage.data.addressInfor.city;
      let other = prevPage.data.addressInfor.otheraddress
      prevPage.setData({
        [city]: e.currentTarget.dataset.city,
        [other]: e.currentTarget.dataset.other
      })
      console.log(prevPage.data)
    }
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
