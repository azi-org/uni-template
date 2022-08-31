export const storage = {
  get: (key: string) => {
    const value = uni.getStorageSync(key)
    try {
      return JSON.parse(value)
    } catch (err) {
      console.log('storag get error: ', JSON.stringify(err))
      return value
    }
  },
  set: (key: string, value: any) => {
    if (value) {
      value = JSON.stringify(value)
    }
    uni.setStorageSync(key, value)
  },
  remove: (key: string) => {
    uni.removeStorageSync(key)
  },
  clear: () => {
    uni.clearStorageSync()
  },
}
