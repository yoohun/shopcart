const util = require('../../utils/util.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfor: [],
    inputShowed: false,
    numberShow: false,
    addressShow: false,
    falseText: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  sure (e) {
    if (this.data.addressInfor[0].city.length==1 || !this.data.addressInfor[0].name || !this.data.addressInfor[0].number) {
      this.setData({
        falseText: true
      })
      return 
    }
    // console.log(1)
    this.setData({
      falseText: false
    })
    let that = this
    let have= false
    app.globalData.userAdderssInfo.filter((item,index)=>{
      if (item.id == this.data.addressInfor[0].id) {
        app.globalData.userAdderssInfo[index] = this.data.addressInfor[0]
        have = true
        return
      }
    })
    if(!have) {
      // console.log('1231231' + this.data.addressInfor[0])
      app.globalData.userAdderssInfo.push(this.data.addressInfor[0])
      // console.log(app.globalData.userAdderssInfo)
    }
    wx.navigateBack({
      url: '../place/place'
    })
  },
  dataChange(e) {
    // console.log(e)
    switch (e.currentTarget.dataset.id) {
      case '1': //名字
        this.setData({
          'addressInfor[0].name': e.detail.value
        })
        // console.log(1)
        break;
      case '2': //电话
        this.setData({
          'addressInfor[0].number': Number(e.detail.value)
        })
        // console.log(2)
        break;
      case '3': //城市
        this.setData({
          'addressInfor[0].city': e.detail.value
        })
        // console.log(3)
        break;
      default: 
        this.setData({
            'addressInfor[0].otheraddress': e.detail.value.replace((this.data.addressInfor[0].city.join('')), '')
        })
        console.log(this.data.addressInfor[0].otheraddress)
    }
    // console.log(e)
  },
  onLoad: function (options) {
    let address = app.globalData.userAdderssInfo.filter(item => item.id == options.addressid)
    // console.log(address)
    if (address.length) {
      this.setData({
        addressInfor: address
      })
    } else {
      let list = [{
        'city': ['所在地区'],
        'id': 'address0' + (app.globalData.userAdderssInfo.length+1)
      }]
      this.setData({
        addressInfor: list
      })
    }
  },
  onShow(options) {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // console.log('aaaaaa')
  }
})