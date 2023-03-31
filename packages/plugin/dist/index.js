
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./plugin.cjs.production.min.js')
} else {
  module.exports = require('./plugin.cjs.development.js')
}
