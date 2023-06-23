# Requirements

## Node

You need to install a version of Node >= 10.18.1

## Gulp

Gulp is a task runner built on Node.js and npm, used for automation of time-consuming and repetitive tasks involved in web development like minification, concatenation, cache busting, unit testing, linting, optimization, etc.

You need to install it locally.

```
npm i gulp -g
```

[Documentation](https://gulpjs.com/)

# Theme

## Installation

### Dependencies

At the root of the theme, you need to install the dependencies with npm

```
npm install
```

At the end of this process, you should have a node_modules folder in your theme.

Then, you have to copy all needed dependency assets files from node_modules (bootstrap for example).

```
gulp copy-assets
```

At the end of this process, the dependencies define in the task 'copy-assets' should be copied in the assets/libs folder.

```
theme
└───assets
│   └───libs
│       └───js
│         └───bootstrap4
│           │   bootstrap.bundle.js
│           │   bootstrap.bundle.min.js
│           │   bootstrap.js
│           │   bootstrap.min.js
│       └───sass
│         └───bootstrap4
│           │   ...
│         └───fontawesome
│           │   ...
```

### Gulp tasks

#### sass

Compiles .scss to .css files.

```
gulp sass
```

#### minifycss

Minifies css files.

```
gulp minifycss
```

#### cleancss

Delete minified CSS files and their maps.

```
gulp cleancss
```

#### styles

Compiles .scss to .css minifies css files.

```
gulp styles
```

#### scripts

Uglifies and concat all JS files into one.

```
gulp scripts
```

#### imagemin

Optimizes images and copies images from src to dest.

```
gulp imagemin
```

#### copy-assets

Copy all needed dependency assets files from node_modules

```
gulp copy-assets
```

#### watch

Watches .scss, .js and image files for changes.

```
gulp watch
```

#### dist

Copies the files to the dist folder for distribution as simple theme.

```
gulp dist
```

#### clean-dist

Deletes all files inside the dist folder and the folder itself.

```
gulp clean-dist
```

#### dist-product

Copies the files to the /dist-prod folder for distribution as theme with all assets.

```
gulp dist-product
```

#### clean-dist-product

Deletes all files inside the dist-product folder and the folder itself.

```
gulp clean-dist-product
```

#### compile

Compiles the styles and scripts and runs the dist task.

```
gulp compile
```

