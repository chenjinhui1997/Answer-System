//index.js


Page({
  data: {

  },
  click: function() {
    wx.navigateTo({
      url: '../test/test',
    })
  },
  click2: function () {
    wx.navigateTo({
      url: '../test2/test2',
    })
  },
  click3: function () {
    wx.navigateTo({
      url: '../test3/test3',
    })
  },
  click4: function () {
    wx.navigateTo({
      url: '../error_text/error_text',
    })
  }
})