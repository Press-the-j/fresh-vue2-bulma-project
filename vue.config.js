module.exports = {
  //^ modify the option of HtmlPlugIn
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "DynamicForms";
              return args;
          })
  },
  //^ autoinjection of the main.scss in script with lang="scss"
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/design/main.scss";` 
      }
    }
  }
};