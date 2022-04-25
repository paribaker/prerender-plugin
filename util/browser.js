const puppeteer = require('puppeteer')

module.exports = {
  build: async (browserOptions = {}) => {
    try {
      return await puppeteer.launch(browserOptions)
    } catch (err) {
      throw err
    }
  },
}
