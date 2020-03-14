module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          $black: #21211e;
          $red: #ff0000;
          $green: #00ff00;
          $blue: #074f9b;
          $gray: #999999;
          $lightgray: #eeeeee;
        `
      }
    }
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'СтройМодульБыт',
    },
  },
}
