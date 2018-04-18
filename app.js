
App({
  globalData: {
  },
  /**
   * 用户登录
  */
  onLaunch: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'http://webapi.jz.com',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败' + res.errMsg);
        }
      }
    });
  }
});
