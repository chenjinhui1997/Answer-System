// pages/error/error.js
const app = getApp()
Page({
  data: {
    // text:"这是一个页面"
    myContent: [],
    index: 0,
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    questionId: ''
  },
  onLoad: function() {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1/wx/errorBank.php',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          myContent: res.data
        })
        if (that.data.myContent.length == 0) {
          wx.redirectTo({
            url: '../noerror/noerror',
          })
        }
      }
    })
  },

  nextQuestion: function() {
    var that = this;
    if (that.data.index < that.data.myContent.length - 1) {
      this.setData({
        index: that.data.index + 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '错题都复习完啦！',
        success: function(res) {
          if (res.confirm) {
            wx.switchTab({
              url: '../index/index',
            })
          }
        }
      })
    }
  },
  lastQuestion: function() {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
      });
    }
  },
  showAnswer: function() {
    var that = this;
    var result = that.data.myContent[that.data.index].answer;
    if (result == 'A') {
      this.setData({
        bcA: that.data.bc_right
      });
    } else if (result == 'B') {
      this.setData({
        bcB: that.data.bc_right
      });
    } else if (result == 'C') {
      this.setData({
        bcC: that.data.bc_right
      });
    } else if (result == 'D') {
      this.setData({
        bcD: that.data.bc_right
      });
    }
  },
  delete: function() {
    var that = this;
    var questionId = that.data.questionId;
    var myContent = that.data.myContent;
    that.setData({
      questionId: that.data.myContent[that.data.index].id,
    })
    wx.showModal({
      title: '提示',
      content: '是否删除本题？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://127.0.0.1/wx/dQuestion.php',
            data: {
              questionId: that.data.questionId,
            },
          });
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1000,
            mask: true
          })
          if (that.data.index < that.data.myContent.length - 1) {
            myContent.splice(that.data.index, 1);
            that.setData({
              myContent: myContent,
              index: that.data.index,
              bcA: that.data.bc_default,
              bcB: that.data.bc_default,
              bcC: that.data.bc_default,
              bcD: that.data.bc_default,
            })
          } else {
            myContent.splice(that.data.index, 1);
            that.setData({
              myContent: myContent,
            })
            wx.showModal({
              title: '提示',
              content: '错题都复习完啦！',
              success: function (res) {
                if (res.confirm && that.data.myContent.length != 0) {
                  wx.switchTab({
                    url: '../index/index',
                  })
                }
              }
            })
            if(that.data.myContent.length == 0){
              wx.redirectTo({
                url: '../noerror/noerror',
              })
            }
          }
        }
      }
    })
   

  }
})