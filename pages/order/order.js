const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[],
    allMoney: 0,
    allnum: 0
  },
  choseOrder (e) {
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../orderpage/orderpage?id=' + e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.orderList)
    this.setData({
      orderList: app.globalData.orderList
    })
    let money=0
    let num = 0
    // console.log(this.data.orderList)
    for(let key in this.data.orderList) {
      // console.log(this.data.orderList[key])
      this.data.orderList[key].filter(item=>{
        money = money + parseFloat(item.num * item.price)
        num = num + item.num
      })
    }

    this.setData({
      allMoney: money,
      allnum: num
    })
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
    wx.reLaunch({
      url: '../index/index'
    })
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