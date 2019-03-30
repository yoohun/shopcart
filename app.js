//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.globalData.replaceName = res.code
        // console.log(res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
        }
      }
    })
  },
  globalData: {
    userInfo: {},
    shoppingCart:[{
      'id': 'ys02',
      'name': 'wefrehgdvfd',
      'imgUrl': '../../imgs/xmn.png',
      'price': 1.4,
      'num': 1,
      'checked': 0
    }, {
        'id': 'ys03',
        'name': 'asdasasd',
        'imgUrl': '../../imgs/xmn.png',
        'price': 0.6,
        'num': 1,
        'checked': 0
      }, {
        'id': 'ys04',
        'name': '无法违法',
        'imgUrl': '../../imgs/xmn.png',
        'price': 0.7,
        'num': 1,
        'checked': 0
      }, {
        'id': 'ys06',
        'name': '123123123',
        'imgUrl': '../../imgs/xmn.png',
        'price': 0.3,
        'num': 9,
        'checked': 0
      }, {
        'id': 'ys08',
        'name': '1sda3123',
        'imgUrl': '../../imgs/xmn.png',
        'price': 0.3,
        'num': 9,
        'checked': 0
      }]
  }
})