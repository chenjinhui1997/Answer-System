// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    question: '',
    answer: '',
    contentA: '',
    contentB: '',
    contentC: '',
    contentD: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      username: getApp().globalData.userInfo.nickName,
    })

  },
  ques: function(e) {
    this.setData({
      question: e.detail.value,
    })
  },
  ans: function(e) {
    this.setData({
      answer: e.detail.value,
    })
  },
  A: function(e) {
    this.setData({
      contentA: e.detail.value,
    })
  },
  B: function(e) {
    this.setData({
      contentB: e.detail.value,
    })
  },
  C: function(e) {
    this.setData({
      contentC: e.detail.value,
    })
  },
  D: function(e) {
    this.setData({
      contentD: e.detail.value,
    })
  },
  upload: function() {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否上传本题？',
      success: function(res) {
        if (res.confirm) {
          wx.request({
            url: 'http://127.0.0.1/wx/upload.php',
            data: {
              question: that.data.question,
              answer: that.data.answer,
              contentA: that.data.contentA,
              contentB: that.data.contentB,
              contentC: that.data.contentC,
              contentD: that.data.contentD,
              username:that.data.username,
            },
            method: 'GET',
          });
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1000,
            mask: true
          })
        }
      }
    })
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