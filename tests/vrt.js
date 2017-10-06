/**
 * Builds HTML markup found in /src/assets/
 *
 * @usage casperjs test .\tests\vrt.js [param]
 */

var phantomcss = require('phantomcss');
var fs = require('fs');
//var casper = 'xyz';


var casper_vrt = {
  host: 'local', // Main switch! Should be variable in arguments? qa, prod, local

  viewportArray: [{ // bring both of these into separate files? don't like the mess
    'name': 'desktop',
    'width': 1200,
    'height': 400
  }, {
    'name': 'tablet',
    'width': 800,
    'height': 400
  }, {
    'name': 'mobile',
    'width': 400,
    'height': 400
  }],

  urlSettings: {
    'protocol': {
      'secure': 'https://',
      'standard': 'http://'
    },
    'live': {
      'prod': 'www.schwans.com',
      'qa': 'qa.schwans.com'
    },
    'local': 'localhost:3000'
  },

  urlArray: [{ // bring both of these into separate files? don't like the mess
    'targetName': 'specials-cat',
    'selector': '#main',
    'url': {
      'live': '/products/specials',
      'local': '/productblock/specialcat.html'
    }
  }, {
    'targetname': 'pizza-pdp',
    'selector': '#main',
    'url': {


      'live': '/products/product?id=56720&c1=11452',
      'local': '/productblock/pizzapdp.html'
    }
  }, {
    'targetname': 'pizza-cat',
    'selector': '#main',
    'url': {
      'live': '/products/category?c1=11452',
      'local': '/productblock/pizzacat.html'
    }
  }, {
    'targetname': 'search',
    'selector': '#main',
    'url': {
      'live': '/secure/account/login',
      'local': '/productblock/search',
      'secure': true
    }
  }],

  init: {
    initSettings: {
      screenshotRoot: './screenshots/placeholders', // possible variable for function of screenshot, relative to base folder
      failedComparisonsRoot: './screenshots/placeholders/failures', // possible variable for function of screenshot, relative to base folder
      outputSettings: {
        errorColor: {
          red: 255,
          green: 0,
          blue: 255
        },
        errorType: 'movement',
        transparency: 0.7
      }
    },
    start: function () {
      phantomcss.init(casper_vrt.init.initSettings);
      casper.start(___________________this.urlArray.targets[0].derivedUrl__________________________)
    }
  },

  derivedUrl: function (target) {
    // sample target:
    // {
    //   'targetname': 'search',
    //   'selector': '#main',
    //   'url': {
    //     'live': '/secure/account/login', // qa or prod
    //     'local': '/productblock/search',
    //     'secure': true
    //   }
    // }

    // global URL settings
    // urlSettings: {
    //   'protocol': {
    //     'secure': 'https://',
    //     'standard': 'http://'
    //   },
    //   'live': 'www.schwans.com',
    //   'qa': 'qa.schwans.com/secure/account/login',
    //   'local': 'localhost:3000'
    // },



    // Want to find the derived URL (local, qa or live - http or https)
    // url to consist of protocol + host + hostname
    var _target_host = casper_vrt.host; // local
    var _target_isLocal = _target_host == 'local' ? true : false;
    //console.log("\n\n target_islocal: " + _target_isLocal)
    var _target_protocolVal = (target.url.secure && !_target_isLocal) ? casper_vrt.urlSettings.protocol['secure'] : casper_vrt.urlSettings.protocol['standard']; // http
    var _target_hostUrl = casper_vrt.urlSettings[_target_host]; // localhost:3000 
    //console.log(_target_hostUrl);
    var _target_pathname = (_target_isLocal != true) ? target.url.live : target.url.local; // '/roductblock/search' // 
    var _target_url = _target_protocolVal + _target_hostUrl + _target_pathname;

    // console.log("\ntarget prot: " + _target_protocolVal + "\ntarget hostUrl: " + _target_hostUrl + ", \ntarget pathname: " + _target_pathname);
    return _target_url;
  },
  // need run function

  urlTestLoop: function () {
    console.log('runing');
    casper.each(casper_vrt.urlArray, function (casper, target) {
      var _thisUrl = casper_vrt.derivedUrl(target) // 'URLURLURLURLURfunction' CASPER WAY;;
      this.thenOpen(_thisUrl, function () {
        console.log(_thisUrl)

        this.each(casper_vrt.viewportArray, function (casper, viewport) {
          this.then(function () {
            this.waitForResource('custom.css');
            this.waitForSelector(target.selector);

            this.then(function () {
              this.viewport(viewport.vp.width, viewport.vp.height);
              phantomcss.screenshot(target.selector, target.name + "_" + viewport.name);
              console.log('fiund one : ' + target.selector + "<- ts, tn -> " +
                target.name + ", viewport-name:  " + viewport.name + "\n\n")
            });
          });
        });
      });
    });
  },

  run: function (siteEnvironment) {
    var xyz = xyz;
  }
}

for (i = 0; i <= casper_vrt.urlArray.length - 1; i++) {
  console.log("\n\n" + (i + 1) + ". Derived URL: " + casper_vrt.derivedUrl(casper_vrt.urlArray[i]));
}

casper_vrt.urlTestLoop();

//casper_vrt.derivedUrl(casper_vrt.urlArray[3])

var captureMarkup = {}





















// //var capture_markup = false;
// casper.each(url_arr, function (casper, url) {
//   this.thenOpen(url.url.local, function () {
//     console.log(url.url.local);

//     this.each(viewport_arr, function (casper, viewport) {
//       this.wait(4000, function () {
//         this.waitForResource('custom.css');
//         this.waitForSelector('#main');

//         this.then(function () {
//           this.viewport(viewport.vp.width, viewport.vp.height);
//           phantomcss.screenshot(url.selector, url.name + "_" + viewport.name);
//         });
//       });
//     });
//   });
// });





























































// phantomcss.init({
//   screenshotRoot: './screenshots/placeholders',
//   failedComparisonsRoot: './screenshots/placeholders/failures',
//   outputSettings: {
//     errorColor: {
//       red: 255,
//       green: 0,
//       blue: 255
//     },
//     errorType: 'movement',
//     transparency: 0.7
//   }
// });

// casper.start(url_local);