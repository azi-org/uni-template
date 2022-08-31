export const navigate = {
  /**
   * 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。
   * @param url
   * @param needAuth
   * @returns
   */
  to: (url: string, needAuth = false) => {
    if (needAuth) {
      console.log('需要登录才能跳转')
      return
    }
    uni.navigateTo({
      url,
      fail: (err) => {
        console.log('navigate to: ', err)
      },
    })
  },
  /**
   * 关闭当前页面，跳转到应用内的某个页面。
   * @param url
   * @param needAuth
   * @returns
   */
  redirect: (url: string, needAuth = false) => {
    if (needAuth) {
      console.log('need auth')
      return
    }
    uni.redirectTo({
      url,
      fail: (err) => {
        console.log('redirect to: ', err)
      },
    })
  },
  relaunch: (url: string, needAuth = false) => {
    if (needAuth) {
      console.log('need auth')
      return
    }
    uni.reLaunch({
      url,
      fail: (err) => {
        console.log('relaunch to: ', err)
      },
    })
  },
}
