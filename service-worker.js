/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "47955b57d0c7ee1b7200310a6d6fa552"
  },
  {
    "url": "assets/css/0.styles.412a3f04.css",
    "revision": "5ecc9a649b2d627eb0295c2880bb1061"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2513877e.js",
    "revision": "6f904edd1b8bc9d2ad44f367f1295e34"
  },
  {
    "url": "assets/js/11.72946aaf.js",
    "revision": "c751dfc81b05bd4116e7809b6ba5f811"
  },
  {
    "url": "assets/js/12.ecc33a26.js",
    "revision": "6e50e1407095bbe00938d6144de323e2"
  },
  {
    "url": "assets/js/13.1b77f117.js",
    "revision": "a6ba2f9679c9cae553349897f72d8ff9"
  },
  {
    "url": "assets/js/14.1b455c97.js",
    "revision": "a387e46cb073911184290c1e862fafd0"
  },
  {
    "url": "assets/js/15.fb4ccaf7.js",
    "revision": "dca072ddfed92699a63a0b987ac91c49"
  },
  {
    "url": "assets/js/16.d1de1e80.js",
    "revision": "a560850d94263f743ee055959c3eaa19"
  },
  {
    "url": "assets/js/17.6f45c46f.js",
    "revision": "17de8ab43c1d4fe972289dc5239f3c69"
  },
  {
    "url": "assets/js/18.1ed9fefd.js",
    "revision": "d9f671d318751cbd3ff9044fa722fba7"
  },
  {
    "url": "assets/js/19.24d2906a.js",
    "revision": "a51329721b13b0d08c3cc2ae39b1b87a"
  },
  {
    "url": "assets/js/2.1ad97ad7.js",
    "revision": "9eaa532b07c8d2112a6cff0fd5ed2fd0"
  },
  {
    "url": "assets/js/20.2b74e3bd.js",
    "revision": "8b59e2d64e83474e04d632223cd0123a"
  },
  {
    "url": "assets/js/21.64660ffa.js",
    "revision": "93b4078c380379f8a2f71412d65c952b"
  },
  {
    "url": "assets/js/22.a0396291.js",
    "revision": "d9f228b597498efba060e839f0303e73"
  },
  {
    "url": "assets/js/23.7b3d5bb1.js",
    "revision": "7f6e793e695c0512af00c6392b0a198b"
  },
  {
    "url": "assets/js/24.e4245bbe.js",
    "revision": "e5fc20dbb6e9c1b93695a8c2730258b9"
  },
  {
    "url": "assets/js/25.721df1f6.js",
    "revision": "5f296b6d6a903874463ec2475b6e3891"
  },
  {
    "url": "assets/js/26.cc7266f1.js",
    "revision": "f80b75738802694a6b9df9a6aee27c74"
  },
  {
    "url": "assets/js/27.bc0f3925.js",
    "revision": "9000768a3606c7a92193ba67ff7547ca"
  },
  {
    "url": "assets/js/28.1936b5e1.js",
    "revision": "2ecbccc18a9b39443af0b6fc7cc1ff6d"
  },
  {
    "url": "assets/js/29.20e997f0.js",
    "revision": "0f495ad21d73bf13706578d2304e94f7"
  },
  {
    "url": "assets/js/3.254ebf84.js",
    "revision": "33a91bdab22aaacd62f385a163b58941"
  },
  {
    "url": "assets/js/30.d93dc16d.js",
    "revision": "37efff153222faab8dc7697335c97ffb"
  },
  {
    "url": "assets/js/31.e2e163ec.js",
    "revision": "3d47ad4ef281969830223b75dd2ca135"
  },
  {
    "url": "assets/js/32.421fad6d.js",
    "revision": "105d16792894848a3765811aead9289a"
  },
  {
    "url": "assets/js/33.01ee9f8d.js",
    "revision": "093fbdc2c73023e2f299b5f60e72d5c3"
  },
  {
    "url": "assets/js/34.a874e5c9.js",
    "revision": "a8a6e98af4752e9f7793051256b27a54"
  },
  {
    "url": "assets/js/35.fcfae229.js",
    "revision": "6f706ad2675bea295996c2437aa94b00"
  },
  {
    "url": "assets/js/36.25e2e074.js",
    "revision": "336bda50c76382ed9b6be879e02e7e97"
  },
  {
    "url": "assets/js/37.823abdcc.js",
    "revision": "ac195602b1996bafbc86ce55558b25d2"
  },
  {
    "url": "assets/js/38.b56040ac.js",
    "revision": "4f4e7503dfedfde855fb3dd9ba3796b7"
  },
  {
    "url": "assets/js/39.11810a26.js",
    "revision": "7ee674f48c6ed72cf6ab140bc5e185c0"
  },
  {
    "url": "assets/js/4.b212ff52.js",
    "revision": "f14c56cbe3abd37b3726203eaf63e2f7"
  },
  {
    "url": "assets/js/40.94da3484.js",
    "revision": "fad2b08a22d18eb0ea91dff628634c2f"
  },
  {
    "url": "assets/js/41.78faf4ae.js",
    "revision": "9264a8e4e6967121d60c243303abc5d9"
  },
  {
    "url": "assets/js/42.ab8e059c.js",
    "revision": "2df94e7744214e0c6b0ef7ee350d1be9"
  },
  {
    "url": "assets/js/5.f8b48296.js",
    "revision": "167b5aaa644c2036f77ee0fe313724d8"
  },
  {
    "url": "assets/js/6.bfb71bab.js",
    "revision": "a8d3dcea39aa4d7f769fe20b29dbc05a"
  },
  {
    "url": "assets/js/7.1522543f.js",
    "revision": "d73a4904c6f9e41b0510596a236fe963"
  },
  {
    "url": "assets/js/8.8fa16fc7.js",
    "revision": "c66af7149ec428301a2e2f715e1ec017"
  },
  {
    "url": "assets/js/9.eb695c72.js",
    "revision": "4bc5706351da9272ab0beb023512b7e5"
  },
  {
    "url": "assets/js/app.075b034a.js",
    "revision": "40cb03c8cba69b992f7047f3500c49e3"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "487ca0e0fdbd45a66a2186ad31c463fe"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "c6742b83e70ecaf5060deb744f41b09f"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "6afd316d8ff4ed5ce8399d8711189b20"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "9a2cda0a6f1520bef792374d0d0eaf88"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "3e6efdeb7abb0117f2c4695489c0f0c7"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "0454e05b4b94c9db69fd9b1f60e432bf"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "2cf980148ee45a2eaea6a2bcf78e74b4"
  },
  {
    "url": "base/build/2.webpack.html",
    "revision": "e452cb57b12eaa7141b68fddd2a2ed43"
  },
  {
    "url": "base/build/3.file.html",
    "revision": "07235be80bcaad1e82f1df357885a986"
  },
  {
    "url": "base/build/4.single.html",
    "revision": "79a06d085c05770487012a309c9e32a0"
  },
  {
    "url": "base/build/5.page.html",
    "revision": "461409e4561d7a2f7ab17a9a426d93f7"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "b6570439a623cfcb75209726fc7b631f"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "8530d16daaa230cb0b81702c6c2d748b"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "37e072fb478a8046d53148cc63d599a6"
  },
  {
    "url": "base/practice/1.MongoDB.html",
    "revision": "f763b1ac9663792110c0319c3910ee3f"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "2653c4eb672c5f7735d6b99bc39f7f30"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "86ccf54e31c0e12f3b7612a709894009"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "133fd260e77d44e7a0ae17e328c11211"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "f7b79b335f2eec7be8aeb8d34f50474f"
  },
  {
    "url": "base/practice/test.html",
    "revision": "490919d8cedb824b3625afed58d0c7ad"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "6c6577d43ecfcbac9930c559fd1fd3e5"
  },
  {
    "url": "index.html",
    "revision": "539e4979feaad9f2c0313b8c02c7297c"
  },
  {
    "url": "senior/typeScript/1.inde.html",
    "revision": "dbce7a99280ec8020bf75cc37be36d7f"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "5e77dd8ea9043b5d64166390661d0f22"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "839eae21d38784eb5bcddf9139bfe790"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "11c56c454903998911e39cd9f4a8fb84"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "159c4c0eea7f6d8955ac489ef03bef9f"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "9e70cce0ac3c1fb88f67c9b7d5b6af17"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "522ca46baa338070c8046f11d0849513"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "30a73afb2ad8f7c9d8715ef068f249fa"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "c58da26bb09f5e95eb26f3d5571cfd8f"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "64016f4b50e1c1efb697b5bb213ba7a8"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "4749002d14ccf9801bf568db459840ff"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "a52851a747cdc5ca5f9958afb4b57493"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
