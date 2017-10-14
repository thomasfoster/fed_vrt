/**
 * Builds HTML markup found in /src/assets/
 *
 * @usage casperjs test .\tests\vrt.js [param]
 */
//var casper = require('casperjs');
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
        'prod': 'mss.atomicsoftware.xyz',
        'qa': 'mss.atomicsoftware.xyz'
      },
      'local': 'mss.atomicsoftware.xyz'
    },

    urlArray: [{ // bring both of these into separate files? don't like the mess
        'targetName': 'explore-spir',
        'selector': '.page-banner_img',
        'url': {
          'live': '/explore-spiritual-experiences',
          'local': '/explore-spiritual-experiences'
        }
      }, {
        'targetname': 'about',
        'selector': '.page-banner_img',
        'url': {
          'live': '/about',
          'local': '/about'
        }
      }, {
        'targetname': 'hu',
        'selector': '.page-banner_img',
        'url': {
          'live': '/hu',
          'local': '/hu'
        }
      }, {
        'targetname': 'meet-spiritual-leader',
        'selector': '.page-banner_img',
        'url': {
          'live': '/meet-spiritual-leader-eckankar',
          'local': '/meet-spiritual-leader-eckankar'
        }
      }, {
        'targetname': 'study-classes',
        'selector': '.page-banner_img',
        'url': {
          'live': '/study-classes',
          'local': '/study-classes'
        }
      }, {
        'targetname': 'connect',
        'selector': '.page-banner_img',
        'url': {
          'live': '/connect',
          'local': '/connect'
        }
      }, {
        'targetname': 'free-events',
        'selector': '.page-banner_img',
        'url': {
          'live': '/free-eck-events',
          'local': '/free-eck-events'
        }
      }, {
        'targetname': 'calendar',
        'selector': '.page-banner_img',
        'url': {
          'live': '/events',
          'local': '/events'
        }
      }

    ],

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
      startVrt: function () {
        phantomcss.init(casper_vrt.init.initSettings);
        casper.start('http://mss.atomicsoftware.xyz/'); //this.urlArray.targets[0].derivedUrl) // firsst items derived url
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
      var _target_protocolVal = (target.url.secure && !_target_isLocal) ? casper_vrt.urlSettings.protocol['secure'] : casper_vrt.urlSettings.protocol['standard']; // http
      var _target_hostUrl = casper_vrt.urlSettings[_target_host]; // localhost:3000 
      var _target_pathname = (_target_isLocal != true) ? target.url.live : target.url.local; // '/roductblock/search' // 
      var _target_url = _target_protocolVal + _target_hostUrl + _target_pathname;

      return _target_url;
    },
    // need run function

    urlTestLoop: function () {
      casper.each(casper_vrt.urlArray, function (casper, target) {]
        var _thisUrl = casper_vrt.derivedUrl(target) // 'URLURLURLURLURfunction' CASPER WAY;;
        //console.log('this derived url: ' + _thisUrl);
        this.thenOpen(_thisUrl, function () {
          console.log('thenopened: ' + _thisUrl)

          this.each(casper_vrt.viewportArray, function (casper, viewport) {
            this.then(function () {
              console.log('inv iwoert')
              //            this.waitForResource('custom.css');
              //this.waitForSelector(target.selector);

              this.then(function () {
                this.viewport(viewport.width, viewport.height);
                phantomcss.screenshot(target.selector, target.targetName + "_" + viewport.name);
                console.log('fiund one : ' + target.selector + "<- ts, tn -> " +
                  target.targetName + ", viewport-name:  " + viewport.name)
              });
            });
          });
        });
      });
  },

  run: function (siteEnvironment) {
    casper_vrt.init.startVrt()
    casper_vrt.urlTestLoop()
    casper.run(function () {
      console.log('\nTHE END.');
      phantom.exit(phantomcss.getExitStatus());
    });
  }
}

casper_vrt.run();

// var captureMarkup = {}

// todo
// Add support for multiple targets on the page, segment by folder?
// sort out domains
// import json?
// document json structure? Can this be a class? or a return of a function?