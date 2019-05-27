// pages/orderpage/orderpage.js
const app = getApp()
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: {},
    orderId: '',
    totalMoney: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    console.log(app.globalData.orderList)

    let money = 0
    let num = 0
    for (let key in app.globalData.orderList) { //获取所点击的订单的内容
      if (key == options.id) {
        this.setData({
          orderList: app.globalData.orderList[key],
          orderId: options.id
        })
        console.log(this.data.orderList)
        this.data.orderList.filter(item=> {
          console.log(item.price)
          money = money + parseFloat(item.num * item.price)
        })
        this.setData({
          totalMoney: money,
          allnum: num
        })
      
      }
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})