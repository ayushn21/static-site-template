# Static site template using Bridgetown

[Bridgetown](https://bridgetownrb.com) is an awesome new static site generator forked from [Jekyll](http://jekyllrb.com). [Webpack](https://webpack.js.org) is integrated as a first class citizen which instantly gives it a leg up from Jekyll.

While the default site structure Bridgetown creates is great, it had a number of shortcomings in my opinion which I've attempted to address in this template.


## Directory structure

```
├── Gemfile
├── Gemfile.lock
├── bridgetown.config.yml
├── package.json
├── start.js
├── sync.js
├── webpack.config.js
├── postcss.config.js
├── yarn.lock
├── plugins
│   ├── builders
│   └── site_builder.rb
├── src
│   ├── 404.html
│   ├── _components
│   ├── _data
│   ├── _frontend
│   │   ├── application.js
│   │   ├── assets
│   │   ├── fonts
│   │   ├── javascript
│   │   │   └── index.js
│   │   └── styles
│   │       ├── _reset.css
│   │       └── index.js
│   ├── _layouts
│   ├── _posts
│   ├── about.md
│   ├── assets
│   │   └── images
│   ├── favicon.ico
│   ├── index.md
│   └── posts.md
```


## Problems this template solves

### Move front end code into src directory

I didn't like the fact that the `frontend` directory lived outside `src` even though it forms part of your application. This template moves it within `src` and renames it to `_frontend`.

### PostCSS instead of SASS

[PostCSS](https://postcss.org) is all the rage these days. It's awesome because it's comprised of plugins that you can use like building blocks. I've replaced the default SASS with a PostCSS configuration that includes Node SASS as a plugin. This way you can still write SASS; but you can use plugins like autoprefixer to enhance browser compatibility. 

The default PostCSS configuration is inspired by the config used in Ruby on Rails and includes autoprefixer among other niceties. See `postcss.config.js` for details.

### Autoload (S)CSS files

All (S)CSS files that don't start with `_` will be autoloaded into your bundle. The default config will look in the `styles` and `_components` directories.

### Add a conventional location for fonts

Fonts should be placed under `src/_frontend/fonts`. Each font should have its own directory that contains all the font files and a stylesheet with the `@font-family` declarations. This will be automatically added to your bundle.

### Allow images to be referenced from CSS

The `_frontend` directory now has an `assets` subdirectory where you can put any image files you want to reference in your CSS. Ideally these should be SVG files as they will be automatically inlined in your CSS using PostCSS. Image files will be copied over as-is during compilation.

### Compress CSS

CSS is compressed at the end of the PostCSS pipeline using [cssnano](https://cssnano.co).

### Add a CSS reset by default

I can't imagine starting a site without the [CSS Reset](https://meyerweb.com/eric/tools/css/reset/). This template includes it by default and loads it before all your other styles.

## Suggestions

If you've got any ideas for improvements, just open a PR or an issue! 

This project is meant to be a barebones starting point following a "convention over configuration" mindset. So please keep this in mind with your suggestions :).

## Licence

This project is available under the MIT Licence. See LICENSE.md for more info.