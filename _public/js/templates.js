module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('<!DOCTYPE html>');
 var beg = '<html class="no-js'
 var end = '" lang="en" ng-app="app">'
buf.push('<!--[if lte IE 7]>\n<script src="http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script><![endif]--><!--[if lt IE 7]>');
var __val__ = beg + ' lt-ie9 lt-ie8 lt-ie7' + end
buf.push(null == __val__ ? "" : __val__);
buf.push('\n<script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>\n<script defer>window.attachEvent(\'onload\',function(){CFInstall.check({mode:\'overlay\'})})</script><![endif]--><!--[if IE 7]>');
var __val__ = beg + ' lt-ie9 lt-ie8' + end
buf.push(null == __val__ ? "" : __val__);
buf.push('<![endif]--><!--[if IE 8]>');
var __val__ = beg + ' lt-ie9' + end
buf.push(null == __val__ ? "" : __val__);
buf.push('<![endif]--><!--[if gt IE 8]>');
var __val__ = '<!-->' + beg + end + '<!--'
buf.push(null == __val__ ? "" : __val__);
buf.push('<![endif]-->\n<head>\n  <meta charset="utf-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n  <title ng-bind-template="{{title}}"></title>\n  <meta name="description" content="">\n  <meta name="author" content="">\n  <meta name="viewport" content="width=device-width,initial-scale=1">\n  <link rel="stylesheet" href="css/app.css">\n  <script src="js/modernizr.js"></script>\n  <script>\n    window.brunch = window.brunch || {};\n    window.brunch[\'auto-reload\'] = { enabled: true };\n    \n  </script>\n</head>\n<body>\n  <div class="wrapper">\n    <div class="navbar navbar-static-top">\n      <div class="navbar-inner">\n        <div class="container">\n          <button data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a href="/" class="brand">Angular Brunch Seed</a>\n          <div class="nav-collapse">\n            <div ng-include="\'/partials/nav.html\'"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="container main-content">\n      <div ng-view></div>\n      <div>Angular Brunch seed app: v<span app-version></span></div>\n    </div>\n    <div class="push"></div>\n  </div>\n  <footer class="footer">\n    <div class="container">\n      <p><small><a href="https://github.com/scoarescoare/angular-brunch-true-north">angular-brunch-true-north | source</a></small></p>\n    </div>\n  </footer>\n  <script src="/js/vendor.js"></script>\n  <script src="/js/app.js"></script>\n</body>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<ul class="nav">\n  <li ng-class="getClass(\'/todo\')"><a ng-href="#/todo">todo</a></li>\n  <li ng-class="getClass(\'/view1\')"><a ng-href="#/view1">view1</a></li>\n  <li ng-class="getClass(\'/view2\')"><a ng-href="#/view2">view2</a></li>\n</ul>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>This is the partial for view 1.</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<p>This is the partial for view 2.</p>\n<p>\n  Showing of \'interpolate\' filter:\n  {{ \'Current version is v%VERSION%.\' | interpolate }}\n</p>');
}
return buf.join("");
};module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var __indent = [];
buf.push('\n<div>\n  <h2>Todo</h2><span class="icon-glass"></span>\n  <div><span>{{remaining()}} of {{todos.length}} remaining</span> [<a href="" ng-click="archive()">archive</a>]\n    <ul class="unstyled">\n      <li ng-repeat="todo in todos">\n        <label class="checkbox inline">\n          <input type="checkbox" ng-model="todo.done"/><span class="done{{todo.done}}">{{todo.text}}</span>\n        </label>\n      </li>\n    </ul>\n    <form ng-submit="addTodo()" class="form-inline">\n      <p>\n        <input type="text" ng-model="todoText" size="30" placeholder="add new todo here"/>\n        <input type="submit" value="add" class="btn btn-primary"/>\n      </p>\n    </form>\n  </div>\n</div>');
}
return buf.join("");
};