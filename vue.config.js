module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          $red: #ff0000;
          $green: #00ff00;
          $blue: #0000ff;
          $gray: #666666;
        `
      }
    }
  },
}
