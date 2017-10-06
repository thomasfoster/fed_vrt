/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/

var fs = require('fs');
// var system = require('system');
// var args = system.args;
// var casper = require('casperjs');

//var casper = require("casper").create();

// casper.echo("Casper CLI passed args:");
// require("utils").dump(casper.cli.args);

// casper.echo("Casper CLI passed options:");
// require("utils").dump(casper.cli.options);

// if (casper.cli.args === 1) {
//   console.log('Try to pass some arguments when invoking this script!');
// } else {
//   casper.cli.args.forEach(function (arg, i) {
//     console.log(i + ': ' + arg);
//   });
// }



// var _https = casper.cli.args[0],
//   _targeturl = casper.cli.args[1],
//   _protocol = 'http',
//   _sitebase = '://qa.schwans.com/',
//   _filename = casper.cli.args[2];
// var _writepath = 'c:\\inetpub\\wwwroot\\sdc_template\\code_factory\\' + _filename + '.njk';

// if (_https == true) {
//   _protocol = 'https';
// }

// _targeturl = _protocol + _sitebase + _targeturl;
// console.log(_targeturl);
// /************************************
//  * Grab markup
//  ***********************************/
casper.start("http://www.schwans.com/products/specials", function () {
  this.echo(this.getTitle());
  console.log(this.getTitle());
});

console.log(': content');
casper.open("http://www.schwans.com/products/specials", function () {
  this.echo(this.getTitle());
  // console.log(': content');
  // this.waitForSelector('#main');
  // var _content = casper.getHTML('#main');
  // var _writepath = 'c:\\inetpub\\wwwroot\\sdc_template\\code_factory\\asdfasdf.njk';
  // console.log(_content + ': content');
  // if (fs.isFile(_writepath)) {
  //   fs.write(_writepath, _content);
  // } else {
  //   fs.touch(_writepath);
  //   fs.write(_writepath, _content);
  // }
  // console.log(_content);


  // this.then(function () {
  //   this.waitForSelector('#main');
  //   //this.waitForSelector('#cssLoaded');

  //   if (capture_markup == true) {
  //     var _path = 'c:\\inetpub\\wwwroot\\sdc_template\\code_factory\\' + url.name + '-' + url.selector + '.njk',
  //       _content = this.getHTML('#main');

  //     if (fs.isFile(_path)) {
  //       fs.write(_path, _content);
  //     } else {
  //       fs.touch(_path);
  //       fs.write(_path, _content);
  //     }
  //   }
});

console.log("\nDone!\n")
casper.exit();