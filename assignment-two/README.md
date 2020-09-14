# React-Starter
React Starter App - setup with webpack and babel

### To get started
clone this repo:
```
git clone https://github.com/AlexanderHeo/React-Starter [new repo]
```
install npm dependencies:
```
npm install
```
run npm script to build webpack:
```
npm run build
```
or use this script to automate building:
```
npm run watch
```
launch dist/index.html from your code editor

### The steps taken to create this starter app
if you would like to replicate the project in this repo, follow these steps:
```
npm init -y
npm install react react-dom
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/plugin-transform-react-jsx
mkdir dist src
touch dist/index.html src/index.js webpack.config.js
```

Add the following scripts to package.json:
```
"build": "webpack",
"watch": "webpack --watch"
```

Configure webpack:
```
module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
      },
    ],
  },
};
```

add the <body> of dist/index.html:
```
<div id="root"></div>
<script src="main.js"></script>
```

src/index.js:
```
import React from 'react';
import ReactDOM from 'react-dom';

class ReactApp extends React.Component {
  render() {
    return <h1>React Boilerplate</h1>
  }
}

ReactDOM.render(
  <ReactApp />,
  document.querySelector('#root')
);
```
