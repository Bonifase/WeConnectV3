[![Build Status](https://travis-ci.org/Bonifase/WeConnectV3.svg?branch=develop)](https://travis-ci.org/Bonifase/WeConnectV3) [![Maintainability](https://api.codeclimate.com/v1/badges/7bd10832894d14f11f58/maintainability)](https://codeclimate.com/github/Bonifase/WeConnectV3/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/Bonifase/WeConnectV3/badge.svg?branch=develop&service=github)](https://coveralls.io/github/Bonifase/WeConnectV3?branch=develop)

# WeConnect App

WeConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with. The app uses ReactJS, Redux, react-router and lots more. Live site is at https://weconnectwebapp.herokuapp.com/

---

## Features

- Users can `create an account` and `log in`
- Authenticated Users can `register a business`.
- Only the user that creates the business can `update and delete a business`
- Users can `view businesses`.
- Users can `give reviews about a business`.
- Users can `search for businesses based on business location or business category`.

## Getting started

1.  Clone this repo using `git clone https://github.com/Bonifase/WeConnectV3.git`.
2.  Run `npm install` to install the dependencies.

3.  Run `npm start` to start the local web server.

4.  Go to `http://localhost:3000` and you should see the app running!

## CSS

The CSS modules found in the `css` subfolders all get imported into the `main.css` file, which get inlined and minified into the `compiled.css` file. To add/change the styling, either write the CSS into the appropriate module or make a new one and `@import` it in the `main.css` file at the appropriate place.

## JS

All files that are `import`ed/`require`d somewhere get compiled into one big file at build time. (`build/bundle.js`) Webpack automatically optimizes your JavaScript with `UglifyJS`, so you do not have to worry about that.

### Folder Structure

The folder structure of the JS files reflects how [Redux](https://github.com/gaearon/redux) works, so if you are not familiar with Redux check out the [official documentation](https://gaearon.github.io/redux/).

- `actions`: Actions get dispatched with this/these utility module(s)

- `components`: The main JS folder. All the React components are in this folder, with pages (routes) saved in the `pages` subfolder. E.g. a navigation component `Navbar.js`

- `reducers`: Reducers manage the state of this app, basically a simplified implementation of Stores in Flux. For an introduction to reducers, watch [this talk](https://www.youtube.com/watch?v=xsSnOQynTHs) by @gaearon.

- `utils`: Utility files.

## License

Designed and developed by [Bonifase Orwa](https://github.com/Bonifase).
