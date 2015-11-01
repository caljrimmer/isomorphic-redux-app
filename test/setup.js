var jsdom = require('jsdom-no-contextify');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;