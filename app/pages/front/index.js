'use strict'

module.exports = exports = {
  id: 'home',
  title: 'Home',
  route: '/index.html',
  menu: [
    {
      context: 'navbar',
      label: 'Home',
      weight: 1
    }
  ],
  content : {
    localsource: 'content.main.html'
  },
  assets: {
    js: []
  }
}
