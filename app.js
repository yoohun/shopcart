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
    shoppingCart:[],
    proList: [{
      id: 'ys01',
      title: 'ytfguygugu',
      imgUrls: [
        '../../imgs/xmnz.png',
        '../../imgs/xmnz1.png',
        // '../../imgs/xmnz3.png',
        // '../../imgs/xmnz4.png'
      ],
      price: 75,
      sellNum: 0,
      buynum: 1
    }, {
        id: 'ys02',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/lvcha.png',
          '../../imgs/lvcha2.png',
          // '../../imgs/lvcha3.png'
        ],
        price: 34,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys03',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/xmn.png',
          '../../imgs/xmn2.png',
          // '../../imgs/xmn3.png'
        ],
        price: 74,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys04',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/purple.png',
          '../../imgs/purple3.png',
          // '../../imgs/purple2.png'
        ],
        price: 34,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys05',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/xiang.png',
          '../../imgs/xiang2.png',
          // '../../imgs/xiang3.png'
        ],
        price: 53,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys06',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/sanfen.png',
          '../../imgs/sanfen2.png',
          // '../../imgs/sanfen3.png'
        ],
        price: 75,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys07',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/fenbing.png',
          '../../imgs/fenbing2.png',
          // '../../imgs/fenbing3.png'
        ],
        price: 35,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys08',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/sl.png',
          '../../imgs/sl2.png',
          // '../../imgs/sl3.png'
        ],
        price: 64,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys09',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/fangshai.png',
          '../../imgs/fangshai2.png',
          // '../../imgs/fangshai3.png'
        ],
        price: 25,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys10',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/mians.png',
          '../../imgs/mians2.png',
          // '../../imgs/mians3.png'
        ],
        price: 345,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys11',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/jinghua.png',
          '../../imgs/jinghua2.png',
          // '../../imgs/jinghua3.png'
        ],
        price: 1235,
        sellNum: 0,
        buynum: 1
      }, {
        id: 'ys12',
        title: 'ytfguygugu',
        imgUrls: [
          '../../imgs/fs.png',
          '../../imgs/fs2.png',
          // '../../imgs/fs3.png'
        ],
        price: 213,
        sellNum: 0,
        buynum: 1
      }]
  }
})