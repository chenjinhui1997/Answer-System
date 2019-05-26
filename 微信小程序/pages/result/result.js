// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score:'',
    correctResult:'',
    myError:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var score = getApp().globalData.score;
    var correctResult = getApp().globalData.correctResult;
    var myError = getApp().globalData.myError;
    that.setData({
      score:score,
      correctResult: correctResult,
      myError:myError
    })
    wx.request({
      url: 'http://127.0.0.1/wx/ceBank.php',
      data:{
        myError: getApp().globalData.myError,
      },
      method:"GET",
      success: function (res) {
        console.log(res)
      },
    })
  },
  goToError:function(){
    wx.redirectTo({
      url: '../error/error',
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
  onPullDownRefresh: function () {1

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