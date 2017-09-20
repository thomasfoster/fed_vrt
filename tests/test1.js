/**
 * xxxxxxxxNotify user of happenings with system notifications.
 */

// var fs = require('fs');


// fs.readFile('C:/inetpub/wwwroot/scss_master/scss_main/_screen.scss', function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });




// Make sure we got a filename on the command line.
// if (process.argv.length < 3) {
//   console.log('Usage: node ' + process.argv[1] + ' FILENAME');
//   process.exit(1);
// }
// Read the file and print its contents.
// var fs = require('fs'),
//   filename = "C:/inetpub/wwwroot/scss_master/scss_main/_screen.scss"; //process.argv[2];
// fs.readFile(filename, 'utf8', function(err, data) {
//   if (err) throw err;
//   console.log('OK: ' + filename);
//   console.log(data)
// });




// var fs = require('fs');


// fs.readFile('C:/inetpub/wwwroot/scss_master/scss_main/_screen.scss', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });




// //Make sure we got a filename on the command line.
// if(process.argv.length < 3) {
//   console.log('Usage: node ' + process.argv[1] + ' FILENAME');
//   process.exit(1);
// }
// //Read the file and print its contents.
var fs = require('fs'),
  filename = "C:/inetpub/wwwroot/scss_master/scss_main/_screen.scss"; //process.argv[2];
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data)
});









// var casper = require('casper').create({
//   verbose: true,
//   logLevel: 'debug',
//   pageSettings: {
//     loadImages: false, // The WebPage instance used by Casper will
//     loadPlugins: false, // use these settings
//     userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4'
//   }
// });

// // print out all the messages in the headless browser context
// casper.on('remote.message', function (msg) {
//   this.echo('remote message caught: ' + msg);
// });

// // print out all the messages in the headless browser context
// casper.on("page.error", function (msg, trace) {
//   this.echo("Page Error: " + msg, "ERROR");
// });

// var url = 'https://qa.schwans.com/secure/account/login';

// casper.start(url, function () {
//   console.log("page loaded");
//   this.test.assertExists('form#aspnetForm', 'form is found');
//   this.fill('form#aspnetForm', {
//     email: '**<put your email here>**',
//     pass: '**<put your password here>**'
//   }, true);
// });

// casper.thenEvaluate(function () {
//   console.log("Page Title " + document.title);
//   console.log("Your name is " + document.querySelector('.headerTinymanName').textContent);
// });

// casper.run();