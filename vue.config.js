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

    }
  }
});


