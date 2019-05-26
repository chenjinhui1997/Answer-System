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
    score: 0,
    maskFlag: 'true',
    correctResult: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    myError: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://127.0.0.1/wx/errorTextBank.php',
      data: {

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
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
  nextQuestion: function () {
    var that = this;
    this.setData({
      maskFlag: true
    });
    if (that.data.index < that.data.myContent.length - 1) {
      this.setData({
        index: that.data.index + 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
      });
    }
  },
  btnOpClick: function (e) {
    var that = this;
    var select = e.currentTarget.id;
    var result = that.data.myContent[that.data.index].answer;
    var score = that.data.score;
    var questionId = that.data.myContent[that.data.index].id;
    var errorFlag = "myError[" + that.data.index + "]";
    var anwserFlag = "correctResult[" + that.data.index + "]";
    this.setData({
      maskFlag: false
    });
    //选择正确
    if (select == result) {
      if (that.data.index < that.data.myContent.length - 1) {
        if (select == 'A') {
          this.setData({
            bcA: that.data.bc_right
          });
        } else if (select == 'B') {
          this.setData({
            bcB: that.data.bc_right
          });
        } else if (select == 'C') {
          this.setData({
            bcC: that.data.bc_right
          });
        } else if (select == 'D') {
          this.setData({
            bcD: that.data.bc_right
          });
        }
        score = score + 10;
        getApp().globalData.score = score;
        that.setData({
          score: score,
          [anwserFlag]: 1,
          [errorFlag]: 0
        });
      }
      //最后一题
      else {
        if (select == 'A') {
          this.setData({
            bcA: that.data.bc_right
          });
        } else if (select == 'B') {
          this.setData({
            bcB: that.data.bc_right
          });
        } else if (select == 'C') {
          this.setData({
            bcC: that.data.bc_right
          });
        } else if (select == 'D') {
          this.setData({
            bcD: that.data.bc_right
          });
        }
        score = score + 10;
        getApp().globalData.score = score;
        that.setData({
          score: score,
          [anwserFlag]: 1,
          [errorFlag]: 0
        });
        setTimeout(function () {
          that.gotonext();
        }, 500)
      }
    }
    //选择错误
    else {
      if (that.data.index < that.data.myContent.length - 1) {
        if (select == 'A') {
          this.setData({
            bcA: that.data.bc_wrong
          });
        } else if (select == 'B') {
          this.setData({
            bcB: that.data.bc_wrong
          });
        } else if (select == 'C') {
          this.setData({
            bcC: that.data.bc_wrong
          });
        } else if (select == 'D') {
          this.setData({
            bcD: that.data.bc_wrong
          });
          score = score + 0;
          getApp().globalData.score = score;
          that.setData({
            score: score,
            [anwserFlag]: 0,
          });
        }
        //选错情况下显示正确答案
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
        that.setData({
          [errorFlag]: questionId,
        })
      }
      //最后一题
      else {
        if (select == 'A') {
          this.setData({
            bcA: that.data.bc_wrong
          });
        } else if (select == 'B') {
          this.setData({
            bcB: that.data.bc_wrong
          });
        } else if (select == 'C') {
          this.setData({
            bcC: that.data.bc_wrong
          });
        } else if (select == 'D') {
          this.setData({
            bcD: that.data.bc_wrong
          });
          score = score + 0;
          getApp().globalData.score = score;
          that.setData({
            score: score,
            [anwserFlag]: 0,
          });
        }
        //选错情况下显示正确答案
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
        that.setData({
          [errorFlag]: questionId,
        })
        setTimeout(function () {
          that.gotonext();
        }, 500)
      }
    }
    setTimeout(function () {
      that.nextQuestion();
    }, 500)
  },
  gotonext: function () {
    var that = this;
    var correctResult = that.data.correctResult;
    var myError = that.data.myError;
    app.globalData.correctResult = correctResult;
    app.globalData.myError = myError;
    wx.redirectTo({
      url: './../result/result'
    })
  }
})