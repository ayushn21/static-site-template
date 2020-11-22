module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require("postcss-url")([
      { filter: 'frontend/styles/**/*.svg', url: 'inline' }
    ]),
    require('postcss-node-sass'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    require('cssnano')({ 
      preset: 'default' 
    })
  ]
}
