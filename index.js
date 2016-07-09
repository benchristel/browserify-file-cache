var watchify = require('watchify')

module.exports = function (browserifier) {
  browserifier._options.packageCache = {}
  browserifier._options.cache = {}

  return watchify(browserifier, {
    ignoreWatch: function () { return true }
  })
}

