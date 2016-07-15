module.exports = {
  port: process.env.PORT || 3090,
  secret: 'planoinvest',
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://planoinvest:planoinvest@ds023054.mlab.com:23054/planoinvest',
    options: {
      db: {
        safe: true
      }
    }
  }
}
