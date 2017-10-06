require.paths.push('C:/slimerjs/node_modules');
var webpage = require('webpage').create();
webpage
  .open('http://localhost:3000/productblock/pizzacat')
  .then(function () {
    // store a screenshot of the page
    webpage.viewportSize = {
      width: 650,
      height: 320
    };
    webpage.render('/page.png', {
      onlyViewport: true
    });
    slimer.exit();
  });