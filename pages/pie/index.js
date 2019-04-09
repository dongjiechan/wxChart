//index.js
//获取应用实例
const app = getApp()
const wxCharts = require('../../utils/wxCharts.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
    new wxCharts({
      animation: true, //是否有动画
      canvasId: 'pieCanvas',
      type: 'pie',
      legend: true,
      series: [{
          name: '比例1',
          data: 35,
      }, {
          name: '比例2',
          data: 5,
      }, {
          name: '比例3',
          data: 50,
      }],
      width: windowWidth,
      height: 300,
      dataLabel: true,
   })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
