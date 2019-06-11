Component({
  options: {
    // multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    numbe: {
      value: 0,
      type: Number
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    // 弹窗显示控制
    // isShow: false
    numbe: 0
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    onTap: function (e) {
      console.log(e)
      console.log(this.properties.numbe)
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      if (e.currentTarget.dataset.id == 'add') {
        ++this.properties.numbe
        myEventDetail.numbe = this.properties.numbe
      } else {
        if (this.properties.numbe) {
          --this.properties.numbe
          myEventDetail.numbe = this.properties.numbe
        } else {
          this.properties.numbe = 0
          myEventDetail.numbe = 0
        }

      }
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})