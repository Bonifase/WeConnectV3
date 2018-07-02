[![Build Status](https://travis-ci.org/Bonifase/WeConnectV3.svg?branch=master)](https://travis-ci.org/Bonifase/WeConnectV3) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=101)](https://github.com/ellerbrock/javascript-badges/)

# Login Flow

This application demonstrates what a React.js based register/login workflow might look like on the Frontend. The app thus uses Redux, react-router, ServiceWorker, AppCache, bcrypt and lots more.

---

## Features

- Using [**react-hot-loader**](https://github.com/gaearon/react-hot-loader), your changes in the CSS and JS get reflected in the app instantly without refreshing the page. That means that the **current application state persists** even when you change something in the underlying code! For a very good explanation and demo watch Dan Abramov himself [talking about it at react-europe](https://www.youtube.com/watch?v=xsSnOQynTHs).

- [**Redux**](https://github.com/rackt/redux) is a much better implementation of a flux–like, unidirectional data flow. Redux makes actions composable, reduces the boilerplate code and makes hot–reloading possible in the first place. For a good overview of redux check out the talk linked above or the [official documentation](https://gaearon.github.io/redux/)!

- [**react-router**](https://github.com/rackt/react-router) is used for routing in this application. react-router makes routing really easy to do and takes care of a lot of the work.

## Getting started

1.  Clone this repo using `git clone https://github.com/Bonifase/WeConnectV3.git`.

2.  Run `npm install` to install the dependencies.

3.  Run `npm start` to start the local web server.

4.  Go to `http://localhost:3000` and you should see the app running!

## CSS

The CSS modules found in the `css` subfolders all get imported into the `main.css` file, which get inlined and minified into the `compiled.css` file. To add/change the styling, either write the CSS into the appropriate module or make a new one and `@import` it in the `main.css` file at the appropriate place.

### Folder Structure

The boilerplate comes with a basic folder structure to keep the CSS files organised. This is what the folders are for:

- `components`: Component specific styling, e.g. buttons, modals,...

- `layout`: Global layouts, e.g. businesses, reviews homepage,...

## JS

All files that are `import`ed/`require`d somewhere get compiled into one big file at build time. (`build/bundle.js`) Webpack automatically optimizes your JavaScript with `UglifyJS`, so you do not have to worry about that.

### Folder Structure

The folder structure of the JS files reflects how [Redux](https://github.com/gaearon/redux) works, so if you are not familiar with Redux check out the [official documentation](https://gaearon.github.io/redux/).

- `actions`: Actions get dispatched with this/these utility module(s)

- `components`: The main JS folder. All the React components are in this folder, with pages (routes) saved in the `pages` subfolder. E.g. a navigation component `Nav.react.js`

- `reducers`: Reducers manage the state of this app, basically a simplified implementation of Stores in Flux. For an introduction to reducers, watch [this talk](https://www.youtube.com/watch?v=xsSnOQynTHs) by @gaearon.

- `utils`: Utility files.

## License

This project is not licenced.
