'use strict'

const agartha = process.agartha
const appUrl = agartha.get('EXAMPLE_APP_URL')
const appRoot = agartha.get('EXAMPLE_APP_ROOT')

module.exports = exports = {
  appName: 'Examples: Hephaestus bare site',
  shortName: 'hephaestus-site-bare',
  appUrl: (appUrl) ? appUrl : 'http://127.0.0.1:8080',
  appRoot:  (appRoot) ? appRoot : 'http://127.0.0.1:8080',
  relic: 'scaffold',
  version: '0.0.1',
  hephaestus: '2.0.0'
}
