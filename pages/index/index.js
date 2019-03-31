//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    shopData: [{
      "id": "ys01",
      "name":"ys01",
      "price": "￥184",
      "imgUrl": "../../imgs/xmnz.png",
      "people":"2.5万",
      "place": "上海"
    }, {
        "id": "ys02",
        "name": "ys02",
        "price": "￥184",
        "imgUrl": "../../imgs/lvcha.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys03",
        "name": "ys03",
        "price": "￥184",
        "imgUrl": "../../imgs/xmn.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys04",
        "name": "ys04",
        "price": "￥184",
        "imgUrl": "../../imgs/purple.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys05",
        "name": "ys05",
        "price": "￥184",
        "imgUrl": "../../imgs/xiang.png",
        "people": "2.5万",
        "place": "上海"
      }]
  },
  choseItem (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      console.log(3)
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  }
})
