// pages/login/login.js

var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    btnstate: "default",
    username: null,
    password: null,
    check: 0,
  },

  go: function() {
    var that = this;
    app.appData.userinfo = {
      username: this.data.username,
      password: this.data.password
    }
    wx.request({
      url: 'http://127.0.0.1/wx/suser.php',
      data: {
        username: that.data.username,
        password: that.data.password,
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          check: res.data,
        })
        if (that.data.check == 1) {
          wx.switchTab({
            url: '../index/index',
          })
        }
        else{
          wx.showToast({
            title: '用户名密码错误',
            icon: 'loading',
            duration: 1000,
            mask: true
          })
        }
      }
    })
  },

  usernameInput: function(event) {
    var content = event.detail.value;
    if (content != '')
      this.setData({
        disabled: false,
        btnstate: "primary",
        account: content
      });
    else
      this.setData({
        disabled: true,
        btnstate: "default",
      });
    this.setData({
      username: event.detail.value
    })
  },

  passwordInput: function(event) {
    this.setData({
      password: event.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})