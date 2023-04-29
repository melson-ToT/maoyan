const { defineConfig } = require("@vue/cli-service");
const URL = 'https://i.maoyan.com/api/'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target: URL,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      },
      "/ajax":{
        target: 'https://i.maoyan.com/ajax/',
        changeOrigin:true,
        pathRewrite:{
          '^/ajax':''
        }
      },
    },
  }
});


