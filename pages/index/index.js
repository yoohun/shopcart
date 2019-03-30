//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    shopData: [{
      "id": "ys01",
      "name":"悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗",
      "price": "￥184",
      "imgUrl": "../../imgs/xmnz.png",
      "people":"2.5万",
      "place": "上海"
    }, {
        "id": "ys02",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟",
        "price": "￥184",
        "imgUrl": "../../imgs/lvcha.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys03",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟",
        "price": "￥184",
        "imgUrl": "../../imgs/xmn.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys04",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟",
        "price": "￥184",
        "imgUrl": "../../imgs/purple.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys05",
        "name": "asddasdsd",
        "price": "￥184",
        "imgUrl": "../../imgs/xiang.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys06",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟",
        "price": "￥184",
        "imgUrl": "../../imgs/sanfen.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys07",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗",
        "price": "￥184",
        "imgUrl": "../../imgs/fenbing.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys08",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟",
        "price": "￥184",
        "imgUrl": "../../imgs/sl.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys09",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟",
        "price": "￥184",
        "imgUrl": "../../imgs/fangshai.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys10",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟",
        "price": "￥184",
        "imgUrl": "../../imgs/mians.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys11",
        "name": "asddasdsd",
        "price": "￥184",
        "imgUrl": "../../imgs/jinghua.png",
        "people": "2.5万",
        "place": "上海"
      }, {
        "id": "ys12",
        "name": "悦诗风吟悦诗风AS吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟悦诗风吟",
        "price": "￥184",
        "imgUrl": "../../imgs/fs.png",
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
