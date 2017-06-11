var React = require('react');
var ReactDOM = require('react-dom');
//below is similar to var Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boilerplate 3 project</p>,
  document.getElementById('app')
);
