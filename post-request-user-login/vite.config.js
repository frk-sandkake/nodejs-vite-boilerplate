const {resolve} = require('path');

export default {
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        welcome: resolve(__dirname, 'welcome.html')
      },
    },
  },
};
