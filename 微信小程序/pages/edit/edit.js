// pages/edit/edit.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    password:'',
    disabled: true,
    btnstate: "default",
    password1:'',
    password2:'',
    username:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      userInfo: app.globalData.userInfo,
    })
    wx.request({
      url: 'http://127.0.0.1/wx/password.php',
      data: {
        username: app.globalData.userInfo.nickName,
      },
      method: "GET",
      success: function (res) {
        console.log(res.data)
        that.setData({
          password:res.data.password,
        })
      }
    })
  },
  usernameInput: function (event) {
    this.setData({ username: event.detail.value })
    if (this.data.username != this.data.userInfo.nickName && this.data.username!=''){
      if (this.data.password1 == this.data.password2 && this.data.password2 == ''){
        this.setData({
          password1: this.data.password,
          password2: this.data.password,
        });
        this.setData({
        disabled: false,
        btnstate: "primary",
        });
      }
    }
    else if (this.data.username == '')
      this.setData({
        username: this.data.userInfo.nickName,
      })
    else
      this.setData({
        disabled: true,
        btnstate: "default",
      }); 
  },
  passwordInput1: function (event) {
    this.setData({ password1: event.detail.value })
    if (this.data.password1 == '')
      this.setData({
        password1: this.data.password,
      });
    if (this.data.password2 == '')
      this.setData({
        password2: this.data.password,
      });
    if (this.data.username == '')
      this.setData({
        username: this.data.userInfo.nickName,
      });
    if (this.data.password1 != this.data.password2 || this.data.password1 == '' || this.data.username == ''){
      this.setData({
        disabled: true,
        btnstate: "default",
      });
    }
    else
      this.setData({
        disabled: false,
        btnstate: "primary",
      });
  },
  passwordInput2: function (event) {
    this.setData({ password2: event.detail.value })
    if (this.data.password2 == '')
      this.setData({
        password2: this.data.password,
      });
    if (this.data.username == '')
      this.setData({
        username: this.data.userInfo.nickName,
      });
    if (this.data.password1 != this.data.password2 || this.data.password2 == '' || this.data.username == '')
      this.setData({
        disabled: true,
        btnstate: "default",
      });
    else
      this.setData({
        disabled: false,
        btnstate: "primary",
      });
  },
  update:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '您确定要更新数据吗？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://127.0.0.1/wx/update.php',
            data: {
              nickName: app.globalData.userInfo.nickName,
              username: that.data.username,
              password: that.data.password1,
            },
            method: "GET",
            success: function (res) {
              console.log(res)
              app.globalData.userInfo.nickName = that.data.username;
              wx.showToast({
                title: '成功',
                icon: 'succes',
                duration: 1000,
                mask: true
              })
            }
          })
        }
      }
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