//logs.js
const util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    logs: [],
    shopCart: false,
    shopLists:[],
    allMoney:0,
    length:0,
    hideLen: 0,
    selectList:[],
    allSelect:{
      'checked': false
    },
    buylist: []
  },
  toShopping() {
    wx.switchTab({
      url: '../index/index'
    })
  },
  minus: function (o) {
    let list = app.globalData.shoppingCart
    this.data.shopLists.filter(item => {
      if (item.id == o.currentTarget.dataset.id) {
        if (item.num!=1) {
          --item.num
        } else{
          return
        }
        // console.log(this.data.shopLists)
      }
    })
    this.setData({
      list: this.data.shopLists,
      shopLists: this.data.shopLists
    })
    
  },
  add: function (o) {
    app.globalData.shoppingCart.filter(item => {
      let list = app.globalData.shoppingCart
      if (item.id == o.currentTarget.dataset.id) {
        ++item.num;
        return
      }
    })
    this.setData({
      list: app.globalData.shoppingCart,
      shopLists: app.globalData.shoppingCart
    })
  },
  selectIt:function(o){
    let money = 0;
    let arr = o.detail.value
    let that = this
    let chosedArr = []
    let len = chosedArr.length
    if (arr.length!=0){
      for (let i = 0; i < arr.length; i++) {
        that.data.shopLists.filter(item => {
          if (item.id == arr[i]) {
            chosedArr.push(item)
            money = money + parseFloat(item.num * item.price)
          }
        })
      }
      // console.log(chosedArr)
      // app.globalData.buyList = chosedArr
      // var a = app.globalData.buyList
      this.setData({
        allMoney: money,
        buylist: chosedArr
      })
      // console.log(app.globalData.buyList)
      if (chosedArr.length == this.data.length) {
        this.setData({
          allSelect: {
            'checked': true
          }
        })
      } else {
        this.setData({
          allSelect: {
            'checked': false
          }
        })
      }
    } else{
      this.setData({
        allMoney: 0,
        allSelect: {
          'checked': false
        }
      })
    }
    this.setData({
      buyList: app.globalData.buyList
    })
    // console.log(o)
    // let money = 0;
    // let arr= o.detail.value
    // let that = this
    // let chosedArr=[]
    // let len = chosedArr.length
    // for(let i=0;i<arr.length;i++){
    //   that.data.shopLists.filter(item=>{
    //     if(item.id == arr[i]){
    //       console.log(item)
    //       chosedArr.push(item)
    //     }
    //   })
    // }
    // console.log(chosedArr)
    // if(len!=0) {
    //   for (let i = 0; i < chosedArr.length; i++) {
    //     money = money + parseFloat(chosedArr[i].num * chosedArr[i].price)
    //   }
    //   this.setData({
    //     allMoney: money
    //   })
    //   if (len == this.data.length) {
    //     this.setData({
    //       allSelect: {
    //         'checked': true
    //       }
    //     })
    //   } else {
    //     this.setData({
    //       allSelect: {
    //         'checked': false
    //       }
    //     })
    //   }
    // }
    
    // var money = 0
    // let len = o.detail.value.length
    // if(o.detail.value.length!=0){
    //   for(let i=0; i<len; i++) {
    //     money = money + parseFloat(o.detail.value[i])
    //   }
    //   this.setData({
    //     allMoney: money
    //   })
    //   if (len == this.data.length) {
    //     this.setData({
    //       allSelect: {
    //         'checked': true
    //       }
    //     })
    //   } else {
    //     this.setData({
    //       allSelect: {
    //         'checked': false
    //       }
    //     })
    //   }
    // } else{
    //   this.setData({
    //     allMoney: 0,
    //     allSelect: {
    //       'checked': false
    //     }
    //   })
    // }
  },
  checkboxChange:function(o){
    var arr = this.data.shopLists
    let money = 0
    for (let i = 0; i < arr.length; i++) {
      arr[i].checked = o.detail.value.length;
      money = money + parseFloat(arr[i].price*arr[i].num)
    }
    if (!o.detail.value.length){
      this.setData({
        shopLists: arr,
        allMoney: 0
      })
    } else{
      this.setData({
        shopLists: arr,
        allMoney: money
      })
    }
    
  },
  delete: function(o) {
    var id = o.currentTarget.dataset.id;
    var list = app.globalData.shoppingCart;
    var all=list.filter(item=>item.id!=id)
    app.globalData.shoppingCart = all
    this.setData({
      shopLists: all,
      length: all.length
    })
    if (all.length!=0){
      this.setData({
        shopCart: true,
      })
    } else{
      this.setData({
        shopCart: false
      })
    }
  },
  toBuyList() {this.data.buylist
    app.globalData.buyList = this.data.buylist
    this.setData({
      simple: false
    })
    // console.log(app.globalData.buyList)
    wx.navigateTo({
      url: '../buylist/buylist'
    })
  },
  onShow :function(){
    if (app.globalData.shoppingCart.length != '0') {
      this.setData({
        shopCart: true,
        shopLists: app.globalData.shoppingCart,
        length: app.globalData.shoppingCart.length,
        allSelect: {
          'checked': false
        },
        allMoney:0
      })
    } else {
      this.setData({
        shopCart: false
      })
    }
    // console.log(app.globalData.shoppingCart)
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
