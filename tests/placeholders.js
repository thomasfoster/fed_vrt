/*
	Require and initialise PhantomCSS module
	Paths are relative to CasperJs directory
*/

var phantomcss = require('phantomcss');
var url = 'http://qa.schwans.com';

var viewport_arr = [{
  'name': 'desktop',
  'vp': {
    width: 1200,
    height: 400
  }
}, {
  'name': 'tablet',
  'vp': {
    width: 800,
    height: 400
  }
}, {
  'name': 'mobile',
  'vp': {
    width: 400,
    height: 400
  }
}];

phantomcss.init({
  screenshotRoot: './screenshots/placeholders',
  failedComparisonsRoot: './screenshots/placeholders/failures',
  outputSettings: {
    errorColor: {
      red: 255,
      green: 0,
      blue: 0
    },
    errorType: 'movement',
    transparency: 0.9
  }
});

casper.start(url);


casper.page.evaluate(function () {
  document.body.bgColor = 'white';
});


casper.then(function () {
  casper.click('.modal-content-close.js-modal-close');
});

casper.then(function () {
  phantomcss.screenshot('body', 'body_desktop');
});

casper.each(viewport_arr, function (casper, viewport) {
  this.then(function () {
    this.viewport(viewport.vp.width, viewport.vp.height);
    this.then(function () {
      phantomcss.screenshot('body', 'body' + "_" + viewport.name);
    });
  });
});

for (i = 999; i < viewport_arr.length; i++) {

  var v_arr = viewport_arr[i];
  // casper.viewport({
  //   width: viewport_arr[i].width,
  //   height: 600
  // }); // the 600 is arbitrary to have any value
  //casper.then(function (i) {
  //console.log('height: ' + v_arr.vp.height + ', width: ' + v_arr.vp.width + ', name: ' + v_arr.name);
  console.log('height: ' + v_arr.vp.height + ', width: ' + v_arr.vp.width + ', name: ' + v_arr.name);
  casper.viewport(v_arr.vp.width, v_arr.vp.height, function () {
    //phantomcss.screenshot('body', 'body_desktop_' + viewport_arr[i].name);
    console.log(i + ',' + i + ',' + i + ',' + i);
    // });

    casper.then(function () {
      this.wait(10000, function () {
        phantomcss.screenshot('body', 'body' + "_" + v_arr.name);
        console.log('height: ' + v_arr.vp.height + ', width: ' + v_arr.vp.width + ', name: ' + v_arr.name);
      });
    });
  });


  // casper.then(function () { 
  //   casper.viewport(viewport_arr[i].vp);
  // });

  // casper.then(function () {
  //   phantomcss.screenshot('body', 'body_desktop_' + viewport[i].name);
  // });
}

/*
var scLoop = function (viewports, regions) {
  // casper.viewport(viewport.width, viewport.height);
  // casper.then(function () {
  //   phantomcss.screenshot(initScreenSelector.selector, initScreenSelector.title + "_" + viewport.name);
  // });

  casper.thenOpen('http://reddit.com', function() {
    this.test.assertUrlMatches("http://www.reddit.com/",
            "On Reddit");
});
}

*/



// function getScreenElementsBySelectorList(initScreenSelectors, viewport) {
//   while (initScreenSelectors.length > 0) {

//     initScreenSelector = initScreenSelectors.pop();
//     (function (initScreenSelector) {
//       casper.then(function () {
//         phantomcss.screenshot(initScreenSelector.selector, initScreenSelector.title + "_" + viewport.name);
//       });

//     })(initScreenSelector);
//   }
// }






// casper.viewport(viewport.width, viewport.height);



//Begin initScreenSelectors tests
// var initScreenSelectors = [{
//     selector: 'body',
//     title: 'homepage'
//   },
//   {
//     selector: 'header',
//     title: 'header'
//   },
//   {
//     selector: 'nav',
//     title: 'navigation-bar'
//   },
//   {
//     selector: '#main-boxes',
//     title: 'homepage-main-boxes'
//   },
//   {
//     selector: 'aside.span4',
//     title: 'main-content-left-column'
//   },
//   {
//     selector: 'section.span8',
//     title: 'main-content-right-column'
//   },
//   {
//     selector: 'footer',
//     title: 'footer'
//   }
// ];

// getScreenElementsBySelectorList(initScreenSelectors, viewport);


// function getScreenElementsBySelectorList(initScreenSelectors, viewport) {
//   while (initScreenSelectors.length > 0) {

//     initScreenSelector = initScreenSelectors.pop();
//     (function (initScreenSelector) {




/*














                            casper.then(function () {
                              casper.click('.modal-content-close.js-modal-close');
                            });

                            casper.then(function () {
                              phantomcss.screenshot('body', 'body_desktop');
                            });









*/

//     })(initScreenSelector);
//   }
// }



//end initScreenSelectors tests

//begin boxSelectors tests
// var boxSelectors = [{
//     moveto: '.box-style-2.green a',
//     selector: '#main-boxes',
//     title: 'main-box-courses.hover'
//   },
//   {
//     moveto: '.box-style-2.orange a',
//     selector: '#main-boxes',
//     title: 'main-box-apply-now.hover'
//   },
//   {
//     moveto: '.box-style-2.red a',
//     selector: '#main-boxes',
//     title: 'main-box-plan-a-visit.hover'
//   }
// ];

//getBoxSelectorsBySelectorList(boxSelectors, viewport);
//end boxSelectors tests

//casper.reload(); //reloading makes sure any residual mouseover effects are reset to default states

//mengamenu selectors, run only on screen widths >= 980	

// var megamenuSelectors = [{
//     click: 'a.courses-megamenu',
//     selector1: 'body',
//     title1: 'homepage-with-courses-megamenu',
//     selector2: 'div.courses-megamenu',
//     title2: 'courses-megamenu',
//     failmsg: 'Should see the Courses MegaMenu'
//   },
//   {
//     click: 'a.academics-megamenu',
//     selector1: 'body',
//     title1: 'homepage-with-academics-megamenu',
//     selector2: 'div.academics-megamenu',
//     title2: 'academics-megamenu',
//     failmsg: 'Should see the Academics MegaMenu'
//   },
//   {
//     click: 'a.about-megamenu',
//     selector1: 'body',
//     title1: 'homepage-with-about-megamenu',
//     selector2: 'div.about-megamenu',
//     title2: 'about-megamenu',
//     failmsg: 'Should see the About MegaMenu'
//   },
//   {
//     click: 'a.pages-megamenu',
//     selector1: 'body',
//     title1: 'homepage-with-pages-megamenu',
//     selector2: 'div.pages-megamenu',
//     title2: 'pages-megamenu',
//     failmsg: 'Should see the Pages MegaMenu'
//   },
//   {
//     click: 'a.contact-us-megamenu',
//     selector1: 'body',
//     title1: 'homepage-with-contact-us-megamenu',
//     selector2: 'div.contact-us-megamenu',
//     title2: 'contact-us-megamenu',
//     failmsg: 'Should see the Contact Us MegaMenu'
//   }
// ];

// if (viewport.width >= 980) {
//   getMegamenusBySelectorList(megamenuSelectors, viewport);
// }
//end megamenuSelectors tests

//Do comparison on all base and comparative screenshots
casper.then(function now_check_the_screenshots() {
  // compare screenshots
  phantomcss.compareAll();
});

/*
Casper end tests signal
*/
casper.then(function end_it() {
  casper.test.done();
});

/*
 Casper run tests
*/
casper.run(function () {
  console.log('\nTHE END.');
  //slimer.exit();
  phantom.exit(phantomcss.getExitStatus());
});

/**
 * functions to execute snapshot tests
 */

// function getScreenElementsBySelectorList(initScreenSelectors, viewport) {
//   while (initScreenSelectors.length > 0) {

//     initScreenSelector = initScreenSelectors.pop();
//     (function (initScreenSelector) {
//       casper.then(function () {
//         phantomcss.screenshot(initScreenSelector.selector, initScreenSelector.title + "_" + viewport.name);
//       });

//     })(initScreenSelector);
//   }
// }

// function getBoxSelectorsBySelectorList(boxSelectors, viewport) {
//   while (boxSelectors.length > 0) {
//     boxSelector = boxSelectors.pop();
//     (function (boxSelector) {
//       casper.then(function () {
//         casper.mouse.move('#logo a');
//         casper.wait(500);
//         casper.mouse.move(boxSelector.moveto);
//         casper.wait(2000, function () {
//           phantomcss.screenshot(boxSelector.selector, boxSelector.title + "_" + viewport.name);
//         });
//       });
//     })(boxSelector);
//   }
// }

// function getMegamenusBySelectorList(megamenuSelectors, viewport) {
//   while (megamenuSelectors.length > 0) {
//     megamenuSelector = megamenuSelectors.pop();
//     (function (megamenuSelector) {
//       casper.then(function () {
//         casper.click(megamenuSelector.click);
//         // wait for modal to fade-in 
//         //casper.waitForSelector('div.courses-megamenu:not([style*="display: none"])',

//         //wait 2 seconds after clicking the menu item, then take screenshot
//         casper.wait(2000,
//           function success() {
//             phantomcss.screenshot(megamenuSelector.selector1, megamenuSelector.title1 + "_" + viewport.name);
//             phantomcss.screenshot(megamenuSelector.selector2, megamenuSelector.title2 + "_" + viewport.name);
//           },
//           function timeout() {
//             casper.test.fail(megamenuSelector.failmsg);
//           }
//         );
//       });
//       casper.reload();
//     })(megamenuSelector);
//   }
// }